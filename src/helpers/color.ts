import { randomElementInArray } from "helpers"

export const COLORS = [
  'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'
]

export const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export const randomColor = (exceptColors: string[] = []) =>
  randomElementInArray(COLORS.filter(c => !exceptColors.includes(c)))

export const randomShade = (minShade: number = 0, maxShade: number = 1000) =>
  randomElementInArray(SHADES.filter(s => s >= minShade && s <= maxShade))

export const randomColorAndShade = (exceptColors: string[] = [], minShade: number = 0, maxShade: number = 1000) => {
  const color = randomColor(exceptColors)
  const shade = randomShade(minShade, maxShade)
  return `${color}.${shade}`
}

export const randomStyleObject = (exceptColors: string[] = []) => {
  const color = randomColor(exceptColors)
  const shade = randomShade()
  return {
    bg: `${color}.${shade}`,
    color: shade < 500 ? 'black' : 'white'
  }
}
