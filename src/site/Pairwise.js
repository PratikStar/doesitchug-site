import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
    CardHeader, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {adjectives, presets, presetsById, presetUrlPrefix, segmentUrlPrefix} from "./constants";
import * as React from "react";
import MuiAudioPlayer from "mui-audio-player-plus";
import {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import top100Films from "./top100Films";
import {ReactNode} from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useRef } from 'react';

import { AudioInterface, AudioPlayer, AudioPlayerRef } from 'react-audio-play';
import {pairsByAdjective} from "./pairwise_data";

function CardTitle(props: { children: ReactNode }) {
    return null;
}

const Pairwise = () => {

    const [adjective, setAdjective] = React.useState(adjectives[Math.floor(Math.random() * adjectives.length)]);
    const [comparisons, setComparisons] = React.useState(pairsByAdjective[adjective]);

    const audioRefs = useRef(null);
    const handleAdjectiveChange = (event, adjective) => {
        console.log('In handleAdjectiveChange ' + adjective);
        console.log(pairsByAdjective[adjective]);

        if (!adjectives.includes(adjective)) {
            return;
        }

        setAdjective(adjective);
        setComparisons(pairsByAdjective[adjective]);

    };
    const getSegmentUrl = (key) => {
        return segmentUrlPrefix + key + " " + presetsById[key.split("-")[0]].replace('\'', '_') + ".wav";
    };
    const handleSegmentPlay = (segment) => {
        console.log("In handleSegmentPlay " + segment);
        // const index = parseInt(segment);
        // // Stop all other players
        // audioRefs.current.forEach((player, playerIndex) => {
        //     if (playerIndex !== index && player) {
        //         // const audioElement = player.audioEl.current;
        //         player.pause();
        //     }
        // });
        //
    };

    const handleSegmentPause = (id) => {
        console.log('Audio paused ' + id);
    };
    const handleSegmentEnd = (id) => {
        console.log('Audio Ended ' + id);
    };
    return (
        <Box container sx={{
            // justifyContent: 'flex-start',
            // alignItems: 'left',
            display: "flex",
            flexDirection: 'column',
            width: "90%",
            padding: '20px', margin: '0 auto',
            // bgcolor: '#f6f8f6'
        }}>
            <Typography variant="h3"
                        color="textSecondary"
                        align={"left"}
                        sx={{
                            paddingBottom: '20px'
                        }}>
                Pairwise comparisons
            </Typography>

            <Divider sx={{
                margin: '20px',
            }}/>

            <Typography
                variant="subtitle1"
                align={"left"}
                sx={{

                    padding: '20px',
                    marginBottom: '10px',
                }}
            >
                Select an adjective from the dataset to see the pairwise comparisons made by experts.
            </Typography>

            <Autocomplete
                id="adjectives"
                options={adjectives}
                sx={{
                    padding: '20px',
                    marginBottom: '20px'

                }}
                renderInput={(params) => <TextField {...params} label="Select an Adjective"/>}
                value={adjective}

                onChange={(event: any, newValue: string | null) => {
                    handleAdjectiveChange(event, newValue);
                }}
                // getOptionLabel={(option) => {
                //
                //     return ;
                // }}

            />

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }}
                       aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Less <Typography variant="h3">
                                     {adjective}
                                </Typography>
                                </TableCell>
                            <TableCell align="center">
                                More <Typography variant="h3">
                                {adjective}
                            </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {comparisons.map((pair) => (
                            <TableRow
                                key={pair.less + "-" + pair.more}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <div>
                                    <AudioPlayer id={pair.less}
                                                 key={pair.less}
                                                 sx={{
                                                     padding: '20px'
                                                 }}
                                                 src={getSegmentUrl(pair.less)}
                                        // ref={el => audioRefs.current[parseInt(segment)] = el}
                                        // onPlay={() => {
                                        //     handleSegmentPlay(segment);
                                        // }}
                                        // onPause={() => {
                                        //     handleSegmentPause(segment);
                                        // }}
                                        // onEnd={() => {
                                        //     handleSegmentEnd(segment);
                                        // }}

                                    />

                                    <Typography
                                        align={"center"}
                                        sx={{
                                            // paddingBottom: '40px',
                                            marginTop: '10px',
                                            fontSize: '10pt'}}
                                    > {presetsById[pair.less.split("-")[0]]}

                                    </Typography>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div>
                                    <AudioPlayer id={pair.more}
                                                 key={pair.more}
                                                 sx={{
                                                     padding: '20px'
                                                 }}
                                                 src={getSegmentUrl(pair.more)}
                                                 // ref={el => audioRefs.current[parseInt(segment)] = el}
                                                 onPlay={() => {
                                                     handleSegmentPlay(pair.more);
                                                 }}
                                                 onPause={() => {
                                                     handleSegmentPause(pair.more);
                                                 }}
                                                 onEnd={() => {
                                                     handleSegmentEnd(pair.more);
                                                 }}

                                    />
                                        <Typography
                                            align={"center"}
                                            sx={{
                                                // paddingBottom: '40px',
                                                marginTop: '10px',
                                                fontSize: '10pt'}}
                                        > {presetsById[pair.more.split("-")[0]]}

                                        </Typography>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );

};

export default Pairwise;