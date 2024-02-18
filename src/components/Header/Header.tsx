import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import { MUIWrapperContext } from "../../ThemeWrapper/ThemeWrapper";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import FormControl from "@mui/material/FormControl";
  import Select, { SelectChangeEvent } from "@mui/material/Select";
  import { MUILocaleData, supportedLocales } from "../../SupportedLocales";
  
  export default function Header() {
    const theme = useTheme();
    const { locale, setLocale, toggleColorMode }:any =
      React.useContext(MUIWrapperContext);
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar sx={{ height: 80,bgcolor:'red' }}>
            {locale?.title && (
              <Box sx={{ minWidth: 120, color: "inherit",bgcolor:'blue' }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">direction</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-selectd"
                    value={locale}
                    renderValue={(val) => val.title}
                    label="Direction"
                    onChange={(event: SelectChangeEvent<MUILocaleData>) => {
                      const data = event.target.value;
                      setLocale(data as MUILocaleData);
                    }}
                  >
                    {supportedLocales.map((item:any) => {
                      return (
                        // @ts-ignore - necessary to load object into value
                        <MenuItem key={item.title} value={item}>
                          {item.title}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            )}
            <IconButton
              sx={{ fontSize: "1rem" }}
              onClick={toggleColorMode}
              color="inherit"
              disableTouchRipple
              disableRipple
            >
              {theme.palette.mode === "dark" ? (
                <span role="img" aria-label="sun">
                  ☀️
                </span>
              ) : (
                <span role="img" aria-label="moon">
                   🌚
                </span>
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }