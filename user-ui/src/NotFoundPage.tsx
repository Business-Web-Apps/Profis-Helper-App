import * as React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from './modules/components/Typography';
import ServiceSmokingHero from './modules/views/ServiceSmokingHero';
import ServiceNewsLetter from './modules/views/ServiceNewsLetter';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from './modules/withRoot';

const NotFoundPage = () => {
    return (
    <React.Fragment>
        <AppAppBar />
        <Container maxWidth="sm">
            <Box sx={{ margin: 'auto' }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography component="div" color="red" align="center" variant="h1" marked="center">
                            404
                        </Typography>
                        <Typography component="div" color="inherit" align="center" variant="h2" marked="center">
                            Page Not Found
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography align="center" variant="h4" marked="center">
                            <Link to="/">Go Back Home</Link>
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
        </Container>
        <ServiceNewsLetter />
        <ServiceSmokingHero />
        <AppFooter />
    </React.Fragment>
    );
  };

export default withRoot(NotFoundPage);