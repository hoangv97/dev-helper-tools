export const ACTIONS = {
  CODE_EDITOR_SETTINGS: 'CODE_EDITOR_SETTINGS',
}

export const getLocalStorage = (key: string, defaultValue?: any) => {
  let value = localStorage.getItem(key)
  if (value === null) {
    return defaultValue
  }
  return JSON.parse(value)
}

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}