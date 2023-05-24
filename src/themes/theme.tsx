import { createTheme } from '@mui/material/styles';


interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#9a8c8c',
        },
        secondary: {
            light: '#3498DBFF',
            main: '#00FF00',
        },
        text: {
            primary: '#1C1B1BFF',
        },
    },
});