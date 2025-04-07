type GetColorArgs = {
  isIos: boolean;
  darkMode: boolean;
  iosDark: string;
  iosLight: string;
  mdDark: string;
  mdLight: string;
};

export const getColor = ({
  isIos,
  darkMode,
  iosDark,
  iosLight,
  mdDark,
  mdLight,
}: GetColorArgs): string => {
  if (isIos && darkMode) return iosDark;
  if (isIos && !darkMode) return iosLight;
  if (!isIos && darkMode) return mdDark;
  if (isIos && !darkMode) return mdLight;
  return mdLight;
};
