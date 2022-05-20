export const ACTIONS = {
  CODE_EDITOR_SETTINGS: 'CODE_EDITOR_SETTINGS',
  CODE_EDITOR_PAGE_SETTINGS: 'CODE_EDITOR_PAGE_SETTINGS',
  HTML_PREVIEW_CODE: 'HTML_PREVIEW_CODE',
  MD_PREVIEW_CODE: 'MD_PREVIEW_CODE',
  CSS_FLEXBOX: 'CSS_FLEXBOX',
  PAINT: 'PAINT',
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

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}