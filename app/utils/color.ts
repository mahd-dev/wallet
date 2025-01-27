export const strToHueColor = (str: string): number =>
  str
    .split("")
    .reduce((hash, char) => char.charCodeAt(0) + ((hash << 5) - hash), 0) % 360;
