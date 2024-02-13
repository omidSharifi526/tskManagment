import { createTheme, ThemeProvider, PaletteMode } from "@mui/material";
import { createContext, useMemo, useState, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MUILocaleData, supportedLocales } from "../SupportedLocales";

export const MUIWrapperContext = createContext({
  toggleColorMode: () => {},
  setLocale: (locale: MUILocaleData) => {},
  locale: supportedLocales[0],
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "meaningless-key",
});

export default function MUIWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [locale, setLocale] = useState<MUILocaleData>(supportedLocales[0]);
  const muiWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      setLocale: (locale: MUILocaleData) => {},
      locale: supportedLocales[0],
    }),
    []
  );

  useEffect(() => {
    document.dir = locale.direction;
  }, [locale.direction]);

  const theme = useMemo(
    () =>
      createTheme(
        {
          palette: {
            mode,
          },
          direction: locale.direction,
        },
        locale.muiCore,
        locale.muiDatePicker
      ),
    [mode, locale]
  );

  return (
    <CacheProvider value={locale.direction === "rtl" ? cacheRtl : emptyCache}>
      <MUIWrapperContext.Provider
        value={{
          toggleColorMode: muiWrapperUtils.toggleColorMode,
          locale,
          setLocale,
        }}
      >
        <ThemeProvider theme={theme}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={locale.dayJSLanguage}>
            {children}
          </LocalizationProvider>
        </ThemeProvider>
      </MUIWrapperContext.Provider>
    </CacheProvider>
  );
}