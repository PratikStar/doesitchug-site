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
import {presets, presetsById, presetUrlPrefix, segmentUrlPrefix} from "./constants";
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

function CardTitle(props: { children: ReactNode }) {
    return null;
}

const Presets = () => {

    const [preset, setPreset] = React.useState('00033');
    const [presetUrl, setPresetUrl] = React.useState('https://timbredataset-test.s3.us-east-2.amazonaws.com/09A+DI.wav');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nowPlaying, setNowPlaying] = useState(null);


    const makePresetUrl = (presetId) => {
        console.log("in getPresetUrl");
        return presetUrlPrefix + presetsById[preset] + ".wav";
    }
    const getSegmentUrl = (presetId, segmentId) => {
        return segmentUrlPrefix + preset +  "-" + segmentId + " " + presetsById[preset] + ".wav";
    }

    const handlePresetChange = (event, presetId) => {
        console.log("In handlePresetChange: " + presetId);
        setPreset(presetId);
        setPresetUrl(makePresetUrl(presetId));

    }

    const segments = [...Array(12).keys()].map(i => (i + 1).toString().padStart(2, '0'));

    // const audioRefs = [
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null)
    // ];
    const audioRefs = useRef([]);

    useEffect(() => {
        audioRefs.current = audioRefs.current.slice(0, 12);
    }, []);

    // Function to handle when play is clicked on any player
    const handleSegmentPlay = (segment) => {
        console.log("In handleSegmentPlay " + segment);
        const index = parseInt(segment);
        // Stop all other players
        audioRefs.current.forEach((player, playerIndex) => {
            if (playerIndex !== index && player) {
                // const audioElement = player.audioEl.current;
                player.pause();
            }
        });

        setNowPlaying(index);
    };
    // const handleSegmentPlay = (segment) => {
    //     console.log("In handleSegmentPlay for " + segment);
    //
    //     if (nowPlaying !== null && nowPlaying !== segment) {
    //         console.log("Stopping " + nowPlaying);
    //         audioRefs[parseInt(nowPlaying)].current.stop();
    //
    //     }
    //     setNowPlaying(segment);
    // };

    const handleSegmentPause = (segment) => {
        console.log('Audio paused ' + segment);
        setNowPlaying(null);
    };
    const handleSegmentEnd = (segment) => {
        console.log('Audio Ended ' + segment);
        setNowPlaying(null);
    };

    const musicDesc = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ]
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
                Explore the Presets
            </Typography>

            <Divider sx={{margin: '20px'}}/>

            <Typography
                variant="subtitle1"
                align={"left"}
                sx={{

                    padding: '20px',
                    marginBottom: '10px',
                    }}
            >
                The <a href="https://line6.com/helix/helixnative.html" target="_blank" rel="noopener noreferrer"><em>Helix Native plugin</em></a> from Line 6 comes equipped with a rich collection of 80 factory presets, offering a diverse range of guitar tones right out of the box.
                These presets, built into the software version of Line 6's renowned Helix guitar processor family, provide an impressive variety of timbres that perfectly suit our requirements.
                As a leading name in digital audio processing, Line 6 has carefully crafted each preset to deliver professional-quality sounds without any additional configuration needed.
                You can explore all 80 presets applied on the DI used in our work from the following dropdown.
            </Typography>

            {/*<Card>*/}
            {/*    <CardHeader>*/}
            {/*        <CardTitle>Google Drive Audio Player</CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*        {isLoading ? (*/}
            {/*            <div>Loading...</div>*/}
            {/*        ) : error ? (*/}
            {/*            <div>Error: {error}</div>*/}
            {/*        ) : (*/}
            {/*            <audio controls src={audioUrl}>*/}
            {/*                Your browser does not support the audio element.*/}
            {/*            </audio>*/}
            {/*        )}*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}


            <Autocomplete
                id="presets"
                options={Object.keys(presetsById)}
                sx={{
                    padding: '20px',
                    marginBottom: '20px'
                }}
                renderInput={(params) => <TextField {...params} label="Select a Preset"/>}
                value={preset}
                onChange={(event: any, newValue: string | null) => {
                    handlePresetChange(event, newValue);
                }}
                getOptionLabel={(option) => {
                    return presetsById[option];
                }}

            />
            {/*<AudioPlayer id={"inlinewee"}*/}
            {/*             sx={{*/}
            {/*                 padding: '20px'*/}
            {/*             }}*/}
            {/*             preload={"auto"}*/}
            {/*             src={presetUrl}*/}
            {/*             onPlay={handleSegmentPlay}*/}
            {/*             onPause={handleSegmentPause}*/}



            {/*/>*/}


            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }}
                       aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ width: '20%' }}><Typography variant={"h5"}>Segment Number</Typography></TableCell>
                            <TableCell align="left" sx={{ width: '80%' }}><Typography variant={"h5"}>Processed Audio</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {segments.map((segment) => (
                            <TableRow
                                key={segment}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ width: '20%' }}>
                                    <Typography variant={"subtitle2"}>
                                        {musicDesc[parseInt(segment-1)]}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center" sx={{ width: '80%'}}>
                                    <AudioPlayer id={"inline" + segment}
                                                 key={parseInt(segment)}
                                                 align="center"
                                                    sx={{
                                                        padding: '20px'
                                                    }}
                                                    src={getSegmentUrl(preset, segment)}
                                                 ref={el => audioRefs.current[parseInt(segment)] = el}
                                                 onPlay={() => {
                                                     handleSegmentPlay(segment);
                                                 }}
                                                 onPause={() => {
                                                     handleSegmentPause(segment);
                                                 }}
                                                 onEnd={() => {
                                                     handleSegmentEnd(segment);
                                                 }}

                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </Box>
    );

};

export default Presets;