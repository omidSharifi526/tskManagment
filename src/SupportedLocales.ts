import { Direction } from "@mui/material";
import {
  enUS as datePickerLocaleEnglish,
  faIR as datePickerLocalePersia
} from "@mui/x-date-pickers";

import {
  enUS as materialLocaleEnglish,
  faIR as materialLocalePersian,
  Localization,
} from "@mui/material/locale";

import "dayjs/locale/ja";
import "dayjs/locale/de";
import "dayjs/locale/en";
import "dayjs/locale/he";
import "dayjs/locale/fa"

export interface MUILocaleData {
  muiCore: Localization;
  muiDatePicker: any;
  dayJSLanguage: string;
  title: string;
  direction: Direction;
}



const persian: MUILocaleData = {
  muiCore: materialLocalePersian,
  muiDatePicker: datePickerLocalePersia,
  dayJSLanguage: "fa",
  title: "فارسی",
  direction: "rtl",
};



const english: MUILocaleData = {
  muiCore: materialLocaleEnglish,
  muiDatePicker: datePickerLocaleEnglish,
  dayJSLanguage: "en",
  title: "English",
  direction: "ltr",
};

// RTL language


export const supportedLocales: MUILocaleData[] = [
  persian,
  english
 
];