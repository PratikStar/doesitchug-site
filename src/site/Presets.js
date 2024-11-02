import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Autocomplete, CardHeader} from "@mui/material";
import {presets} from "./constants";
import TextField from "@mui/material/TextField";
import * as React from "react";
import MuiAudioPlayer from "mui-audio-player-plus";
import {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function CardTitle(props: { children: ReactNode }) {
    return null;
}

const Presets = () => {

    const [preset, setPreset] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');

    const onClickPreset = (data) => {
        console.log(data);
    }
    const au = new Audio('https://timbredataset-test.s3.us-east-2.amazonaws.com/09A+DI.wav');

    const handlePresetChange = (event, value) => {
        console.log("In handlePresetChange: " + value);
        setPreset(value);

    }
    const [audioUrl, setAudioUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAudioUrl = async () => {
            try {
                setIsLoading(true);

                // Generate the audio file URL from the Google Drive file ID
                const audioUrl = 'https://timbredataset-test.s3.us-east-2.amazonaws.com/09A+DI.wav';
                // const audioUrl = 'https://drive.google.com/file/d/1HNoaOnWQnqLKawYE8UYDIZlQJ_8y-Q_p/view?usp=sharing';

                // Fetch the audio file to check for CORS issues
                const response = await fetch(audioUrl, {
                    mode: 'cors',
                    headers: {
                        'Origin': 'https://example.com',
                        'Access-Control-Request-Headers': 'Content-Type',

                    }
                });

                if (response.ok) {
                    setAudioUrl(audioUrl);
                } else {
                    throw new Error('Failed to fetch audio file from Google Drive. CORS issue?');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAudioUrl();
    }, []);

    return (
        <Box container sx={{
            // bgcolor: 'primary.main',
            // justifyContent: 'flex-start',
            // alignItems: 'left',
            display: "flex",
            flexDirection: 'column',
            width: "80%",
            padding: '20px', margin: '0 auto',
            bgcolor: 'yellow'
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
                align={"left"}
                sx={{
                    paddingBottom: '40px',
                    fontSize: '12pt'}}
            >
                (How to cite the Dataset...)
            </Typography>
            <Card>
                <CardHeader>
                    <CardTitle>Google Drive Audio Player</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error}</div>
                    ) : (
                        <audio controls src={audioUrl}>
                            Your browser does not support the audio element.
                        </audio>
                    )}
                </CardContent>
            </Card>

            <Autocomplete
                id="presets"
                options={presets.map((option) => option.name)}
                sx={{
                    padding: '20px'
                }}

                renderInput={(params) => <TextField {...params} label="Select a Preset"/>}

                value={preset}
                onChange={(event: any, newValue: string | null) => {
                    handlePresetChange(event, newValue);
                }}

            />
            <MuiAudioPlayer id="inline" inline
                            src="https://timbredataset-test.s3.us-east-2.amazonaws.com/09A+DI.wav"/>


        </Box>
    );

};

export default Presets;