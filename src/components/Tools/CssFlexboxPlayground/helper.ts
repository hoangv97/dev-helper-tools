import { filter } from "@chakra-ui/react";
import { randomStyleObject } from "helpers/color";
import { camelToKebabCase, convertStrByCase } from "helpers/string";

interface ContainerStyle {
  name: string;
  options: string[];
}

export const containerStyles: ContainerStyle[] = [
  {
    name: 'flex-direction',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
  {
    name: 'flex-wrap',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
  },
  {
    name: 'justify-content',
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
    ],
  },
  {
    name: 'align-items',
    options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  },
  {
    name: 'align-content',
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch',
    ],
  },
];

export interface ItemStyle {
  name: string;
  number?: number;
  string?: string;
  options?: string[];
}

export const itemStyles: ItemStyle[] = [
  { name: 'order', number: 0 },
  { name: 'flex-grow', number: 0 },
  { name: 'flex-shrink', number: 1 },
  { name: 'flex-basis', string: 'auto' },
  {
    name: 'align-self',
    options: [
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch',
    ],
  },
];

export interface Item {
  index?: number;
  edited?: boolean;
  style: any;
}

export const getDefaultItemStyle = () => {
  const style: any = {};
  itemStyles.forEach((item) => {
    let value;
    if (item.options) {
      value = item.options[0];
    } else if (item.number !== undefined) {
      value = item.number;
    } else if (item.string !== undefined) {
      value = item.string;
    }
    style[convertStrByCase(item.name, 'camel')] = value;
  });
  return style;
};

export const newItem = (): Item => {
  return { style: { ...randomStyleObject(['gray']), ...getDefaultItemStyle() } };
};

export const defaultItems = () => {
  const initialItems = 3;
  const items: Item[] = [];
  for (let i = 0; i < initialItems; i++) {
    items.push(newItem());
  }
  return items;
};

export const getDefaultContainerStyle = () => {
  const style: any = {};
  containerStyles.forEach((item) => {
    style[convertStrByCase(item.name, 'camel')] = item.options[0];
  });
  return style;
};

export const getCssCode = (containerStyle: any, items: Item[], tab: string) => {
  const defaultContainerStyle = { ...getDefaultContainerStyle() };
  const defaultItemStyle = { ...getDefaultItemStyle() };

  let cssCode = '';

  const containerStyles = Object.keys(containerStyle)
    .filter((k) => containerStyle[k] !== defaultContainerStyle[k])
    .map((k) => `${tab}${camelToKebabCase(k)}: ${containerStyle[k]};`)

  if (containerStyles.length) {
    cssCode += `.container {
${containerStyles.join('\n')}
}

`
  }

  items.forEach((item, i) => {
    if (item.edited) {
      const itemStyles = Object.keys(item.style)
        .filter((k) => item.style[k] !== defaultItemStyle[k])
        .filter((k) => !['bg', 'color'].includes(k))
        .map((k) => `${tab}${camelToKebabCase(k)}: ${item.style[k]};`)

      if (itemStyles.length) {
        cssCode += `.item-${i + 1} {
${itemStyles.join('\n')}
}

`;
      }
    }
  });
  return cssCode
}