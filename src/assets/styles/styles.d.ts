import 'styled-components';

import 'styled-dropdown-component';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background_default: string;
      background_900: string;
      background_800: string;

      text: string;
      text_overlay: string;
      text_overlay_negative: string;

      negative_color: string;

      caption_500: string;
      caption_400: string;
      caption_300: string;

      shape: string;

      primary: string;
      success: string;
      error: string;

      overlay: string;
    };
    font_family: {
      inter: string;
    };

    font_weight: {
      regular: number;
      semi_bold: number;
      bold: number;
      black: number;
    };

    font_size: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
}

declare module 'styled-dropdown-component';
