import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Tabs,
    Tab,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Alert,
    Divider,
    Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';
import ErrorIcon from '@mui/icons-material/Error';
import {Link} from "react-router-dom";

// Code block component with copy functionality
const CodeBlock = ({ code, language }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <Box sx={{ position: 'relative', my: 2 }}>
            <Paper
                sx={{
                    bgcolor: 'grey.100',

                    p: 2,
                    borderRadius: 1,
                    color: '#14110B',
                    fontFamily: 'monospace',
                    position: 'relative',
                }}
            >
                <Button
                    size="small"
                    onClick={handleCopy}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'grey.400',
                    }}
                    startIcon={<ContentCopyIcon />}
                >
                    Copy
                </Button>
                <pre style={{ margin: 0, overflow: 'auto' }}>
          <code>{code}</code>
        </pre>
            </Paper>
        </Box>
    );
};

const DatasetInstructions = ({ datasetPath = "username/dataset-name" }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const installationCode = `pip install datasets`;
    const pythonCode = `from datasets import load_dataset

# Load the full dataset
dataset = load_dataset("${datasetPath}")`;

    const offlineCode = `from datasets import load_dataset
dataset = load_dataset("${datasetPath}", download_mode="force_redownload")`;

    const cliInstallCode = `pip install huggingface-hub`;
    const cliDownloadCode = `huggingface-cli login
huggingface-cli whoami
huggingface-cli download --repo-type dataset pratikstar/doesitchug`;

    const csvCode = `import pandas as pd
dataset = pd.read_csv('path_to_downloaded_file.csv')`;
    const parquetCode = `import pandas as pd
dataset = pd.read_parquet('path_to_downloaded_file.parquet')`;

    return (
        <Container maxWidth={false} sx={{ py: 4 }}>
            {/*<Typography variant="h5" component="h1" gutterBottom>*/}
            {/*    Downloading the Dataset from HuggingFace*/}
            {/*</Typography>*/}

            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                sx={{ mb: 3 }}
                variant="scrollable"
            >
                <Tab icon={<CodeIcon />} label="Datasets Library" />
                <Tab icon={<DownloadIcon />} label="Manual Download" />
                <Tab icon={<CodeIcon />} label="HuggingFace CLI" />
            </Tabs>

            {/* Datasets Library Method */}
            <Box hidden={selectedTab !== 0} align={"left"}>
                <Typography variant="h6" gutterBottom>
                    Using the datasets Library (Recommended)
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Installation
                </Typography>
                <CodeBlock code={installationCode} language="bash" />

                <Typography variant="subtitle1" gutterBottom>
                    Python Code
                </Typography>
                <CodeBlock
                    code={pythonCode} language="python" />

            </Box>

            {/* Manual Download Method */}
            <Box hidden={selectedTab !== 1} align={"left"}>
                <Typography variant="h6" gutterBottom>
                    Manual Download Steps
                </Typography>
                <ol>
                    <li>
                        <Typography paragraph>
                            Visit the dataset page at{' '}
                            <Link href={`https://huggingface.co/datasets/${datasetPath}`}>
                                https://huggingface.co/datasets/{datasetPath}
                            </Link>
                        </Typography>
                    </li>
                    <li>
                        <Typography paragraph>
                            Click on the "Files and versions" tab
                        </Typography>
                    </li>
                    <li>
                        <Typography paragraph>
                            Download the desired files directly from the web interface
                        </Typography>
                    </li>
                </ol>
            </Box>

            {/* CLI Method */}
            <Box hidden={selectedTab !== 2} align={"left"}>
                <Typography variant="h6" gutterBottom>
                    Using the HuggingFace CLI
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Installation
                </Typography>
                <CodeBlock code={cliInstallCode} language="bash" />

                <Typography variant="subtitle1" gutterBottom>
                    Download Command
                </Typography>
                <CodeBlock code={cliDownloadCode} language="bash" />
            </Box>

            {/* Common Sections */}
            <Box sx={{ mt: 4 }}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Loading Specific File Formats</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" gutterBottom>
                            CSV Files
                        </Typography>
                        <CodeBlock
                            code={csvCode}
                            language="python"
                        />

                        <Typography variant="subtitle1" gutterBottom>
                            Parquet Files
                        </Typography>
                        <CodeBlock
                            code={parquetCode}
                            language="python"
                        />
                    </AccordionDetails>
                </Accordion>

                {/*<Accordion>*/}
                {/*    <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
                {/*        <Typography variant="h6">Private Dataset Access</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Typography paragraph>*/}
                {/*            For private datasets, follow these steps:*/}
                {/*        </Typography>*/}
                {/*        <ol>*/}
                {/*            <li>*/}
                {/*                <Typography paragraph>Create a HuggingFace account</Typography>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Typography paragraph>*/}
                {/*                    Generate an access token at{' '}*/}
                {/*                    <Link href="https://huggingface.co/settings/tokens">*/}
                {/*                        https://huggingface.co/settings/tokens*/}
                {/*                    </Link>*/}
                {/*                </Typography>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Typography paragraph>Login using CLI or Python:</Typography>*/}
                {/*                <CodeBlock code="huggingface-cli login" language="bash" />*/}
                {/*                <Typography variant="subtitle2" gutterBottom>*/}
                {/*                    Or in Python:*/}
                {/*                </Typography>*/}
                {/*                <CodeBlock*/}
                {/*                    code={`from huggingface_hub import login\nlogin("your_token_here")`}*/}
                {/*                    language="python"*/}
                {/*                />*/}
                {/*            </li>*/}
                {/*        </ol>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}

                {/*<Accordion>*/}
                {/*    <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
                {/*        <Typography variant="h6">Troubleshooting</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Alert severity="info" sx={{ mb: 2 }}>*/}
                {/*            If you encounter issues, check the following:*/}
                {/*        </Alert>*/}
                {/*        <ul>*/}
                {/*            <li>*/}
                {/*                <Typography paragraph>Verify your internet connection</Typography>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Typography paragraph>*/}
                {/*                    Ensure you have the latest version of the libraries*/}
                {/*                </Typography>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Typography paragraph>*/}
                {/*                    Double-check the dataset path is correct*/}
                {/*                </Typography>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Typography paragraph>*/}
                {/*                    Confirm authentication for private datasets*/}
                {/*                </Typography>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
            </Box>
        </Container>
    );
};

export default DatasetInstructions;