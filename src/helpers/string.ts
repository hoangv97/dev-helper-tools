export const CASE_TYPES = [
  'lower',
  'upper',
  'constant',
  'camel',
  'snake',
  'kebab',
  'pascal',
];

const convertStr = (str: string, converter: any) => {
  return str
    .split('\n')
    .map((s) => s.replace(/[-_]/g, ' '))
    .map(converter)
    .join('\n');
};

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const convertStrByCase = (str: string, caseType: string) => {
  switch (caseType) {
    case 'lower':
      return str.toLowerCase();
    case 'upper':
      return str.toUpperCase();
    case 'constant':
      return convertStr(str, (s: string) =>
        s.replace(/\s/g, '_').toUpperCase()
      );
    case 'camel':
      return convertStr(str, (s: string) =>
        s.replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
      );
    case 'snake':
      return convertStr(str, (s: string) =>
        s.replace(/\s/g, '_').toLowerCase()
      );
    case 'kebab':
      return convertStr(str, (s: string) =>
        s.replace(/\s/g, '-').toLowerCase()
      );
    case 'pascal':
      return convertStr(str, (s: string) =>
        capitalize(s.replace(/\s(.)/g, (match, group1) => group1.toUpperCase()))
      );
    default:
      return str;
  }
};

export const camelToKebabCase = (propertyName: string) => {
  function upperToHyphenLower(match: string, offset: number, string: string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

