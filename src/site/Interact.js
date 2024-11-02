import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import {presets} from "./constants";
import Container from "@mui/material/Container";
import MainContent from "./components/MainContent";
import Presets from "./Presets";
const Interact = () => {
    return (

        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >
            <Presets />
            <Presets />
        </Container>

        );
};

export default Interact;