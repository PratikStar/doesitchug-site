import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Button,
    Container,
    Link,
    Snackbar,
    Fade,
    Alert,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';

const CitationInstructions = () => {
    const [copying, setCopying] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);

    const citationText = `@inproceedings{sutar-etal-2024-does,
    title = "\"Does it Chug?\" Towards a Data-Driven Understanding of Guitar Tone Description",
    author = "Sutar, Pratik and 
        Naradowsky, Jason and 
        Miyao, Yusuke",
    booktitle = "Proceedings of the 3rd Workshop on NLP for Music and Audio (NLP4MusA)",
    month = "nov",
    year = "2024",
    publisher = "Association for Computational Linguistics", # TBD
    url = "", # TBD
    pages = "", # TBD
}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(citationText);
            setCopying(true);
            setShowSnackbar(true);

            // Reset the copying state after animation
            setTimeout(() => {
                setCopying(false);
            }, 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSnackbar(false);
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>

            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    bgcolor: 'grey.100',
                    position: 'relative',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: 6,
                    },
                }}
            >
                <Button
                    variant="contained"
                    size="small"
                    startIcon={
                        <Fade in={!copying}>
                            <ContentCopyIcon />
                        </Fade>
                    }
                    endIcon={
                        <Fade in={copying}>
                            <CheckCircleIcon />
                        </Fade>
                    }
                    onClick={handleCopy}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: 16,
                        transition: 'all 0.3s ease',
                        bgcolor: copying ? 'success.main' : 'primary.main',
                        '&:hover': {
                            bgcolor: copying ? 'success.dark' : 'primary.dark',
                        },
                    }}
                >
                    {copying ? 'Copied!' : 'Copy Citation'}
                </Button>

                <pre
                    style={{
                        margin: 0,
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                        overflow: 'auto',
                        maxHeight: '400px',
                        paddingRight: '140px',
                        color: "#14110B",
                    }}
                >
          {citationText}
        </pre>
            </Paper>

            <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    The citation is in BibTeX format and can be directly used in your LaTeX documents.
                </Typography>
            </Box>

            {/* Success Snackbar */}
            <Snackbar
                open={showSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                TransitionComponent={Fade}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Citation copied to clipboard!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default CitationInstructions;