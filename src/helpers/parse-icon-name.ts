import { Theme } from "@/enums/theme.enum";
import { ValueOf } from "@/types/value-of.type";

const parseIconName = (icon: string, theme: ValueOf<typeof Theme>): string => {
  const iconId = icon.slice(0, 2);
  const themeId = theme === Theme.DAY ? "d" : "n";
  const iconSizeAndExtention = "@2x.png";

  return `${iconId}${themeId}${iconSizeAndExtention}`;
};

export { parseIconName };
