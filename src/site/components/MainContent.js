import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Link from "@mui/material/Link";
import DatasetInstructions from "./DatasetInstructions";
import CitationInstructions from "./CitationInstructions";
import ArticleIcon from "@mui/icons-material/Article";
import DatasetCreationProcess from "./DatasetCreationProcess";

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description:
      'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [
      { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Design',
    title: 'Designing for the future: trends and insights',
    description:
      'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Company',
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=45',
    tag: 'Engineering',
    title: 'Pioneering sustainable engineering solutions',
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Product',
    title: 'Maximizing efficiency with our latest product updates',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…2"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent({refs}) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1"
                    ref={refs["home"]}
                    gutterBottom>
          Does it Chug?
        </Typography>
        <Typography variant="h5">Towards a Data-Driven  Understanding of Guitar Tone Description</Typography>
      </div>

      <Box container sx={{
        // bgcolor: 'primary.main',
        // justifyContent: 'flex-start',
        // alignItems: 'left',
        display: "flex",
        flexDirection: 'column',
        width: "80%",
        padding: '20px', margin: '0 auto',
        // bgcolor: 'yellow'
      }}>

        {/*<Typography variant="h3"*/}
        {/*            color="textSecondary"*/}
        {/*            align={"left"}*/}
        {/*            sx={{*/}
        {/*              paddingBottom: '20px'}}>*/}
        {/*  Home*/}
        {/*</Typography>*/}
        <Typography
            align={"left"}
            sx={{
              paddingBottom: '40px',
              fontSize: '12pt'}}
        >
          Natural language is commonly used to describe instrument timbre, such as a “warm” or “heavy” sound. Since these adjectives depend on human perception, there can be disagreements over precisely which acoustic features are relevant to the perceived adjective. In this work, we pursue a data-driven approach to further our understanding of such adjectives in the context of guitar tone. Our main contribution is a dataset of timbre adjectives constructed by taking single clips of instrument audio and processing each to generate diverse timbres that vary in terms of EQ, and effects, like distortion. Adjective annotations are obtained for each clip by crowdsourcing experts to complete a pairwise comparison and a labeling task. We examine the dataset and reveal correlations between adjective ratings and highlight instances where the data contradicts prevailing theories on spectral features and timbral adjectives, suggesting a need for a more nuanced, data-driven understanding of timbre.
        </Typography>


        {/*<Typography variant="h3"*/}
        {/*            color="textSecondary"*/}
        {/*            align={"left"}*/}
        {/*            ref={refs["background"]}*/}
        {/*            sx={{*/}
        {/*              paddingBottom: '20px'}}>*/}
        {/*  Background*/}
        {/*</Typography>*/}
        {/*<Typography*/}
        {/*    align={"left"}*/}
        {/*    sx={{*/}
        {/*      paddingBottom: '40px',*/}
        {/*      fontSize: '12pt'}}*/}
        {/*>*/}
        {/*  (Background goes here...)*/}
        {/*</Typography>*/}




        <Typography variant="h3"
                    color="textSecondary"
                    align={"left"}
                    ref={refs["dataset"]}
                    sx={{
                      paddingBottom: '20px'}}>
          Dataset
        </Typography>
        <Typography
            align={"left"}
            sx={{
              paddingBottom: '40px',
              fontSize: '12pt'}}
        >
          Our dataset creation involved three main steps: collecting guitar tone descriptors from online communities to compile a list of 110 adjectives,
          generating diverse guitar audio samples by recording direct input signals performed by guitarists of various skill levels and
          processing them with effects to create 960 unique clips, and annotating these recordings through a web-based interface.
          This interface facilitated pairwise comparisons, label selections, and custom adjective inputs by expert annotators,
          with 87% having over 10 years of guitar experience.
          The process yielded 2,038 annotations, unified to provide comprehensive scores linking specific adjectives to audio characteristics.
        </Typography>
        <DatasetCreationProcess />



        <Typography variant="h3"
                    color="textSecondary"
                    align={"left"}
                    ref={refs["downloads"]}
                    sx={{
                      paddingBottom: '20px'}}>
          Downloads
        </Typography>
        <Typography
            align={"left"}
            sx={{
              fontSize: '12pt'}}
        >
          The dataset is hosted on HuggingFace Hub, please follow the following instructions to download and use it.

        </Typography>
        <DatasetInstructions datasetPath="pratikstar/doesitchug" />





        <Typography variant="h3"
                    color="textSecondary"
                    align={"left"}
                    ref={refs["citations"]}
                    sx={{
                      paddingBottom: '20px'}}>
          <ArticleIcon sx={{ mr: 1 }} /> Citations
        </Typography>
        <Typography
            align={"left"}
            sx={{
              paddingBottom: '40px',
              fontSize: '12pt'}}
        >
          If you extend or use this work, please cite the paper where it was introduced:

          <CitationInstructions />

        </Typography>




        <Typography variant="h3"
                    color="textSecondary"
                    align={"left"}
                    ref={refs["ack"]}
                    sx={{
                      paddingBottom: '20px'}}>
          Acknowledgements
        </Typography>
        <Typography
            align={"left"}
            sx={{
              paddingBottom: '40px',
              fontSize: '12pt'}}
        >
          We thank the guitarists <b><em>Lorcan Ward</em></b>, and <b><em>Ola Englund</em></b> for granting permission to
          use their DI tracks. We
          also thank the many survey participants from&nbsp;
          <a href="https://www.thegearpage.net/board/index.php?home/">The Gear Page</a>,&nbsp;
          <a href="https://sevenstring.org/">Sevenstring.org</a>,&nbsp;
          <a href="https://www.reddit.com/r/guitars/">r/Guitars</a>, and&nbsp;
          <a href="https://valeriovelardo.com/the-sound-of-ai-community/">The Sound of AI</a>.
        </Typography>




        <Typography variant="h3"
                    color="textSecondary"
                    align={"left"}
                    ref={refs["faq"]}
                    sx={{
                      paddingBottom: '20px'}}>
          FAQ
        </Typography>
        <Typography
            align={"left"}
            sx={{
              paddingBottom: '40px',
              fontSize: '12pt'}}
        >
          (Optional section...)
        </Typography>




      </Box>

      {/*<Grid container spacing={2} columns={12}>*/}
      {/*  <Grid size={{ xs: 12, md: 6 }}>*/}
      {/*    <SyledCard*/}
      {/*      variant="outlined"*/}
      {/*      onFocus={() => handleFocus(0)}*/}
      {/*      onBlur={handleBlur}*/}
      {/*      tabIndex={0}*/}
      {/*      className={focusedCardIndex === 0 ? 'Mui-focused' : ''}*/}
      {/*    >*/}
      {/*      <CardMedia*/}
      {/*        component="img"*/}
      {/*        alt="green iguana"*/}
      {/*        image={cardData[0].img}*/}
      {/*        aspect-ratio="16 / 9"*/}
      {/*        sx={{*/}
      {/*          borderBottom: '1px solid',*/}
      {/*          borderColor: 'divider',*/}
      {/*        }}*/}
      {/*      />*/}
      {/*      <SyledCardContent>*/}
      {/*        <Typography gutterBottom variant="caption" component="div">*/}
      {/*          {cardData[0].tag}*/}
      {/*        </Typography>*/}
      {/*        <Typography gutterBottom variant="h6" component="div">*/}
      {/*          {cardData[0].title}*/}
      {/*        </Typography>*/}
      {/*        <StyledTypography variant="body2" color="text.secondary" gutterBottom>*/}
      {/*          {cardData[0].description}*/}
      {/*        </StyledTypography>*/}
      {/*      </SyledCardContent>*/}
      {/*      <Author authors={cardData[0].authors} />*/}
      {/*    </SyledCard>*/}
      {/*  </Grid>*/}
      {/*  <Grid size={{ xs: 12, md: 6 }}>*/}
      {/*    <SyledCard*/}
      {/*      variant="outlined"*/}
      {/*      onFocus={() => handleFocus(1)}*/}
      {/*      onBlur={handleBlur}*/}
      {/*      tabIndex={0}*/}
      {/*      className={focusedCardIndex === 1 ? 'Mui-focused' : ''}*/}
      {/*    >*/}
      {/*      <CardMedia*/}
      {/*        component="img"*/}
      {/*        alt="green iguana"*/}
      {/*        image={cardData[1].img}*/}
      {/*        aspect-ratio="16 / 9"*/}
      {/*        sx={{*/}
      {/*          borderBottom: '1px solid',*/}
      {/*          borderColor: 'divider',*/}
      {/*        }}*/}
      {/*      />*/}
      {/*      <SyledCardContent>*/}
      {/*        <Typography gutterBottom variant="caption" component="div">*/}
      {/*          {cardData[1].tag}*/}
      {/*        </Typography>*/}
      {/*        <Typography gutterBottom variant="h6" component="div">*/}
      {/*          {cardData[1].title}*/}
      {/*        </Typography>*/}
      {/*        <StyledTypography variant="body2" color="text.secondary" gutterBottom>*/}
      {/*          {cardData[1].description}*/}
      {/*        </StyledTypography>*/}
      {/*      </SyledCardContent>*/}
      {/*      <Author authors={cardData[1].authors} />*/}
      {/*    </SyledCard>*/}
      {/*  </Grid>*/}
      {/*  <Grid size={{ xs: 12, md: 4 }}>*/}
      {/*    <SyledCard*/}
      {/*      variant="outlined"*/}
      {/*      onFocus={() => handleFocus(2)}*/}
      {/*      onBlur={handleBlur}*/}
      {/*      tabIndex={0}*/}
      {/*      className={focusedCardIndex === 2 ? 'Mui-focused' : ''}*/}
      {/*      sx={{ height: '100%' }}*/}
      {/*    >*/}
      {/*      <CardMedia*/}
      {/*        component="img"*/}
      {/*        alt="green iguana"*/}
      {/*        image={cardData[2].img}*/}
      {/*        sx={{*/}
      {/*          height: { sm: 'auto', md: '50%' },*/}
      {/*          aspectRatio: { sm: '16 / 9', md: '' },*/}
      {/*        }}*/}
      {/*      />*/}
      {/*      <SyledCardContent>*/}
      {/*        <Typography gutterBottom variant="caption" component="div">*/}
      {/*          {cardData[2].tag}*/}
      {/*        </Typography>*/}
      {/*        <Typography gutterBottom variant="h6" component="div">*/}
      {/*          {cardData[2].title}*/}
      {/*        </Typography>*/}
      {/*        <StyledTypography variant="body2" color="text.secondary" gutterBottom>*/}
      {/*          {cardData[2].description}*/}
      {/*        </StyledTypography>*/}
      {/*      </SyledCardContent>*/}
      {/*      <Author authors={cardData[2].authors} />*/}
      {/*    </SyledCard>*/}
      {/*  </Grid>*/}
      {/*  <Grid size={{ xs: 12, md: 4 }}>*/}
      {/*    <Box*/}
      {/*      sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}*/}
      {/*    >*/}
      {/*      <SyledCard*/}
      {/*        variant="outlined"*/}
      {/*        onFocus={() => handleFocus(3)}*/}
      {/*        onBlur={handleBlur}*/}
      {/*        tabIndex={0}*/}
      {/*        className={focusedCardIndex === 3 ? 'Mui-focused' : ''}*/}
      {/*        sx={{ height: '100%' }}*/}
      {/*      >*/}
      {/*        <SyledCardContent*/}
      {/*          sx={{*/}
      {/*            display: 'flex',*/}
      {/*            flexDirection: 'column',*/}
      {/*            justifyContent: 'space-between',*/}
      {/*            height: '100%',*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          <div>*/}
      {/*            <Typography gutterBottom variant="caption" component="div">*/}
      {/*              {cardData[3].tag}*/}
      {/*            </Typography>*/}
      {/*            <Typography gutterBottom variant="h6" component="div">*/}
      {/*              {cardData[3].title}*/}
      {/*            </Typography>*/}
      {/*            <StyledTypography*/}
      {/*              variant="body2"*/}
      {/*              color="text.secondary"*/}
      {/*              gutterBottom*/}
      {/*            >*/}
      {/*              {cardData[3].description}*/}
      {/*            </StyledTypography>*/}
      {/*          </div>*/}
      {/*        </SyledCardContent>*/}
      {/*        <Author authors={cardData[3].authors} />*/}
      {/*      </SyledCard>*/}
      {/*      <SyledCard*/}
      {/*        variant="outlined"*/}
      {/*        onFocus={() => handleFocus(4)}*/}
      {/*        onBlur={handleBlur}*/}
      {/*        tabIndex={0}*/}
      {/*        className={focusedCardIndex === 4 ? 'Mui-focused' : ''}*/}
      {/*        sx={{ height: '100%' }}*/}
      {/*      >*/}
      {/*        <SyledCardContent*/}
      {/*          sx={{*/}
      {/*            display: 'flex',*/}
      {/*            flexDirection: 'column',*/}
      {/*            justifyContent: 'space-between',*/}
      {/*            height: '100%',*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          <div>*/}
      {/*            <Typography gutterBottom variant="caption" component="div">*/}
      {/*              {cardData[4].tag}*/}
      {/*            </Typography>*/}
      {/*            <Typography gutterBottom variant="h6" component="div">*/}
      {/*              {cardData[4].title}*/}
      {/*            </Typography>*/}
      {/*            <StyledTypography*/}
      {/*              variant="body2"*/}
      {/*              color="text.secondary"*/}
      {/*              gutterBottom*/}
      {/*            >*/}
      {/*              {cardData[4].description}*/}
      {/*            </StyledTypography>*/}
      {/*          </div>*/}
      {/*        </SyledCardContent>*/}
      {/*        <Author authors={cardData[4].authors} />*/}
      {/*      </SyledCard>*/}
      {/*    </Box>*/}
      {/*  </Grid>*/}
      {/*  <Grid size={{ xs: 12, md: 4 }}>*/}
      {/*    <SyledCard*/}
      {/*      variant="outlined"*/}
      {/*      onFocus={() => handleFocus(5)}*/}
      {/*      onBlur={handleBlur}*/}
      {/*      tabIndex={0}*/}
      {/*      className={focusedCardIndex === 5 ? 'Mui-focused' : ''}*/}
      {/*      sx={{ height: '100%' }}*/}
      {/*    >*/}
      {/*      <CardMedia*/}
      {/*        component="img"*/}
      {/*        alt="green iguana"*/}
      {/*        image={cardData[5].img}*/}
      {/*        sx={{*/}
      {/*          height: { sm: 'auto', md: '50%' },*/}
      {/*          aspectRatio: { sm: '16 / 9', md: '' },*/}
      {/*        }}*/}
      {/*      />*/}
      {/*      <SyledCardContent>*/}
      {/*        <Typography gutterBottom variant="caption" component="div">*/}
      {/*          {cardData[5].tag}*/}
      {/*        </Typography>*/}
      {/*        <Typography gutterBottom variant="h6" component="div">*/}
      {/*          {cardData[5].title}*/}
      {/*        </Typography>*/}
      {/*        <StyledTypography variant="body2" color="text.secondary" gutterBottom>*/}
      {/*          {cardData[5].description}*/}
      {/*        </StyledTypography>*/}
      {/*      </SyledCardContent>*/}
      {/*      <Author authors={cardData[5].authors} />*/}
      {/*    </SyledCard>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </Box>
  );
}
