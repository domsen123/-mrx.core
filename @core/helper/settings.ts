import type { AppSettings } from '@mrx/types';

let __settings: AppSettings = {};

export const setSettings = (s: AppSettings) => {
  __settings = s;
};

export const setting = <K extends keyof AppSettings>(
  name: K,
): AppSettings[K] => {
  return __settings[name];
};
