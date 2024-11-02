import { Outlet, Link } from "react-router-dom";
import TemplateFrame from "./TemplateFrame";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import * as React from "react";
import getBlogTheme from "./theme/getBlogTheme";

const Layout = () => {

    const [mode, setMode] = React.useState('light');
    const blogTheme = createTheme(getBlogTheme(mode));

    // This code only runs on the client side, to determine the system color preference
    React.useEffect(() => {
        console.log("useEffect Layout.js")
        // Check if there is a preferred mode in localStorage
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode) {
            setMode(savedMode);
        } else {
            // If no preference is found, it uses system preference
            const systemPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;
            setMode(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleColorMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
    };
    return (
        <>

            <TemplateFrame
                mode={mode}
                toggleColorMode={toggleColorMode}
            >
                <ThemeProvider theme={blogTheme}>
                    <CssBaseline enableColorScheme />


                    <Outlet />

                    <Footer />
                </ThemeProvider>
            </TemplateFrame>

        </>
    )
};

export default Layout;