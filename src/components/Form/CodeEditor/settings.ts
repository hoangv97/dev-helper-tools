import { ACTIONS, getLocalStorage, setLocalStorage } from "helpers/localStorage"

const THEMES = [
  'ambiance',
  'chaos',
  'chrome',
  'clouds',
  'clouds_midnight',
  'cobalt',
  'crimson_editor',
  'dawn',
  'dracula',
  'dreamweaver',
  'eclipse',
  'github',
  'gob',
  'gruvbox',
  'idle_fingers',
  'iplastic',
  'katzenmilch',
  'kr_theme',
  'kuroir',
  'merbivore',
  'merbivore_soft',
  'monokai',
  'mono_industrial',
  'nord_dark',
  'one_dark',
  'pastel_on_dark',
  'solarized_dark',
  'solarized_light',
  'sqlserver',
  'terminal',
  'textmate',
  'tomorrow',
  'tomorrow_night',
  'tomorrow_night_blue',
  'tomorrow_night_bright',
  'tomorrow_night_eighties',
  'twilight',
  'vibrant_ink',
  'xcode',
]

export interface SettingsProps {
  theme: string;
  fontSize: number;
  tabSize: number;
}

export const DEFAULT_SETTINGS: SettingsProps = {
  theme: 'github',
  fontSize: 14,
  tabSize: 2,
}

export const getCurrentSettings = (): SettingsProps => {
  return getLocalStorage(ACTIONS.CODE_EDITOR_SETTINGS, DEFAULT_SETTINGS)
}

export const setCurrentSettings = (value: SettingsProps) => {
  setLocalStorage(ACTIONS.CODE_EDITOR_SETTINGS, value)
}

export default THEMES