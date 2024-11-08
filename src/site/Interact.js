import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {Autocomplete, Tab, Tabs} from "@mui/material";
import TextField from "@mui/material/TextField";
import {presets} from "./constants";
import Container from "@mui/material/Container";
import MainContent from "./components/MainContent";
import Presets from "./Presets";
import Pairwise from "./Pairwise";

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from "@mui/material/Button";
import { InteractAppBar } from "./components/AppAppBar";
import WordCloud from "./WordCloud";
import UnifyingAnno from "./UnifyingAnno";

const Interact = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
    <>
        <InteractAppBar/>


        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >

            <Typography variant="h1" gutterBottom>
                Does it Chug?
            </Typography>
            <Typography variant="h5">Interact and Explore..!</Typography>

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="tabs" centered
                    sx={{marginTop: '20px'}}>
                        <Tab label={<Typography variant="button">Check the Pairwise Comparisons</Typography>} value="1"
                             sx={{marginX: '10px'}}/>
                        <Tab label={<Typography variant="button">Explore the preset sounds</Typography>} value="2"
                             sx={{marginX: '10px'}}/>
                        {/*<Tab label={<Typography variant="button">Unifying Annotations</Typography>} value="3"*/}
                        {/*     sx={{marginX: '10px'}}/>*/}
                    </TabList>
                </Box>

                <TabPanel value="1">
                    <Pairwise />
                </TabPanel>
                <TabPanel value="2">
                    <Presets />
                </TabPanel>
                <TabPanel value="3">
                    UNDER CONSTRUCTION...!!!!
                    <UnifyingAnno />
                    {/*<WordCloud />*/}
                </TabPanel>

            </TabContext>

        </Container>

       </> );
};

export default Interact;