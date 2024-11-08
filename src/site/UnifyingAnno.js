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
import { InlineMath, BlockMath } from 'react-katex';


import { AudioInterface, AudioPlayer, AudioPlayerRef } from 'react-audio-play';
import {pairsByAdjective} from "./pairwise_data";

function CardTitle(props: { children: ReactNode }) {
    return null;
}

const UnifyingAnno = () => {

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
                Unifying Pairwise and Label Annotations
            </Typography>

            <Divider sx={{margin: '20px'}}/>

            <Typography
                variant="subtitle1"
                component={"p"}
                align={"left"}
                sx={{

                    padding: '20px',
                    }}
            >
                We collect multiple types of annotations (pairwise comparisons and labels), each type of annotation can be used to support tasks in isolation, but they can also be combined to provide better estimates.
                Label annotations provide more direct adjective-preset information, while pairwise annotations can drastically reshape our understanding of the data as a whole via the transitive property (if A is more X than B, and B is more X than C, A should also be more X than C).

            </Typography>
            <Typography
                variant="subtitle1"
                component={"p"}
                align={"left"}
                sx={{

                    paddingX: '20px',
                    marginBottom: '20px'
                }}
            >
                On unifying the label and pairwise annotations, we get a weak ordering among the clips.
                Here, you can listen to the result of this ordering based on each adjective.


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
            {/*<AudioPlayer id={"inlinewee"}*/}
            {/*             sx={{*/}
            {/*                 padding: '20px'*/}
            {/*             }}*/}
            {/*             preload={"auto"}*/}
            {/*             src={presetUrl}*/}
            {/*             onPlay={handleSegmentPlay}*/}
            {/*             onPause={handleSegmentPause}*/}



            {/*/>*/}


            {/*<TableContainer component={Paper}>*/}

            {/*    <Table sx={{ minWidth: 650 }}*/}
            {/*           aria-label="simple table">*/}
            {/*        <TableHead>*/}
            {/*            <TableRow>*/}
            {/*                <TableCell align="center"><Typography variant={"h5"}> Segment description </Typography></TableCell>*/}
            {/*                <TableCell align="center"><Typography variant={"h5"}>Preset applied</Typography></TableCell>*/}
            {/*            </TableRow>*/}
            {/*        </TableHead>*/}
            {/*        <TableBody>*/}
            {/*            {segments.map((segment) => (*/}
            {/*                <TableRow*/}
            {/*                    key={segment}*/}
            {/*                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
            {/*                >*/}
            {/*                    <TableCell component="th" scope="row" sx={{ width: '60%' }}>*/}
            {/*                        <Typography variant={"subtitle2"}>*/}
            {/*                            {musicDesc[parseInt(segment-1)]}*/}
            {/*                        </Typography>*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="center" sx={{ width: '40%' }}>*/}
            {/*                        <AudioPlayer id={"inline" + segment}*/}
            {/*                                     key={parseInt(segment)}*/}
            {/*                                        sx={{*/}
            {/*                                            padding: '20px'*/}
            {/*                                        }}*/}
            {/*                                        src={getSegmentUrl(preset, segment)}*/}
            {/*                                     ref={el => audioRefs.current[parseInt(segment)] = el}*/}
            {/*                                     onPlay={() => {*/}
            {/*                                         handleSegmentPlay(segment);*/}
            {/*                                     }}*/}
            {/*                                     onPause={() => {*/}
            {/*                                         handleSegmentPause(segment);*/}
            {/*                                     }}*/}
            {/*                                     onEnd={() => {*/}
            {/*                                         handleSegmentEnd(segment);*/}
            {/*                                     }}*/}

            {/*                        />*/}
            {/*                    </TableCell>*/}
            {/*                </TableRow>*/}
            {/*            ))}*/}
            {/*        </TableBody>*/}
            {/*    </Table>*/}
            {/*</TableContainer>*/}
            <Typography
                align={"right"}>

                Please refer to the paper to check the graph-based algorithm used to unify the annotations.
                There is no objectively correct method for combining these annotation statistics,
                and practitioners can recompute such scores giving more or less weight to each annotation type.
            </Typography>


        </Box>
    );

};

export default UnifyingAnno;