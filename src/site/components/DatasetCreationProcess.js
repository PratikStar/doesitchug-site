import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Container,
    Grid,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PeopleIcon from '@mui/icons-material/People';

const DatasetCreationProcess = () => {
    const poem = `
        In the world of tone, where music breathes,
        We sought the words that sound weaves.
        From forums deep and voices shared,
        A list of 110 bright adjectives we prepared.

        With strings that sang, raw and pure,
        Three players’ hands, each note demure,
        Crafted segments, untouched by art,
        Processed anew, each one set apart.

        Effects and echoes, a myriad born,
        From simple chords to solos worn.
        Through ears of masters, keen and true,
        Annotations gathered, old and new.

        Pair by pair, they judged each sound,
        Labels chosen, insights found.
        Some offered words unmarked, unknown,
        Adding depth to what was shown.

        2,038 notes, in harmony aligned,
        A dataset rich, expertly defined.
        Thus, music's language, shaped and scored,
        Found its voice, its vast accord.`
    ;
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 6 }}>

                <Timeline position="alternate" sx={{ p: 0 }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <SearchIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper' }}>
                                <Typography variant="h6" component="h2">
                                    Data Collection
                                </Typography>
                                <Typography>
                                    Gathered 110 timbre descriptors from online communities and articles
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <AudiotrackIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper' }}>
                                <Typography variant="h6" component="h2">
                                    Audio Recording
                                </Typography>
                                <Typography>
                                    Created diverse guitar recordings from three players across different music styles
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <PeopleIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper' }}>
                                <Typography variant="h6" component="h2">
                                    Expert Annotation
                                </Typography>
                                <Typography>
                                    Crowdsourced annotations from guitar experts for timbre classification
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>


            {/*<Paper elevation={3} style={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5' }}>*/}
            {/*    <Typography variant="body1" component="pre" style={{ whiteSpace: 'pre-wrap' }}>*/}
            {/*        {poem}*/}
            {/*    </Typography>*/}
            {/*</Paper>*/}



            {/*<Grid container spacing={3} sx={{ mt: 4 }}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <Paper*/}
            {/*            elevation={1}*/}
            {/*            sx={{*/}
            {/*                p: 2,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <Typography variant="body2">*/}
            {/*                The complete dataset, including code and annotations, is available on our{' '}*/}
            {/*                <a*/}
            {/*                    href="https://github.com/PratikStar/doesitchug"*/}
            {/*                    style={{ color: 'inherit', fontWeight: 'bold' }}*/}
            {/*                    target="_blank"*/}
            {/*                    rel="noopener noreferrer"*/}
            {/*                >*/}
            {/*                    GitHub repository*/}
            {/*                </a>*/}
            {/*                .*/}
            {/*            </Typography>*/}
            {/*        </Paper>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </Container>
    );
};

export default DatasetCreationProcess;