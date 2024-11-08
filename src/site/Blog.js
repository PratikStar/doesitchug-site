import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HomeAppBar } from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import TemplateFrame from './TemplateFrame';

import getBlogTheme from './theme/getBlogTheme';
import ToggleColorMode from "./components/ToggleColorMode";
import { useRef } from 'react';
export default function Blog() {

    const sectionRefs = {
        "home": useRef(),
        "background": useRef(),
        "dataset": useRef(),
        "downloads": useRef(),
        "citations": useRef(),
        "ack": useRef(),
        "faq": useRef(),

    }

  return (
      <>
        <HomeAppBar refs={sectionRefs}/>
        <Container
          maxWidth="lg"
          component="main"
          sx={{
              display: 'flex',
              flexDirection: 'column',
              my: 16,
              gap: 4,
              // bgcolor: 'yellow'
        }}
        >
          <MainContent refs={sectionRefs}/>
        </Container>
      </>
  );
}
