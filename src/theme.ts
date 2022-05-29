import {createTheme} from "@mui/material";
import {yellow, blue} from "@mui/material/colors"

export const theme = createTheme({
    palette: {
        primary: {
            main: yellow[500]
        },
        secondary: {
            main: blue[500]
        },
        mode: "dark"
    }
})
