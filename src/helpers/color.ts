import { randomElementInArray } from "helpers"

export const COLORS = [
  'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'
]

export const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export const randomColor = (minShade: number = 0, maxShade: number = 1000) => {
  const color = randomElementInArray(COLORS)
  const shade = randomElementInArray(SHADES.filter(s => s >= minShade && s <= maxShade))
  return `${color}.${shade}`
}

export const randomObject = () => {
  const color = randomElementInArray(COLORS)
  const shade = randomElementInArray(SHADES)
  return {
    bg: `${color}.${shade}`,
    color: shade < 500 ? 'black' : 'white'
  }
}

export function* generateColor() {
  // TODO
}