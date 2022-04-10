import { randomElementInArray } from "helpers"

export const COLORS = [
  'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'
]

export const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export const randomColor = (minShade?: number) => {
  const color = randomElementInArray(COLORS)
  const shade = !minShade ? randomElementInArray(SHADES) : randomElementInArray(SHADES.filter(s => s >= minShade))
  return `${color}.${shade}`
}

export function* generateColor() {
  // TODO
}