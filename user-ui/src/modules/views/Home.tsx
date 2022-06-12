import * as React from 'react';
import AllServices from './AllServices';
import ServiceSmokingHero from './ServiceSmokingHero';
import AppFooter from './AppFooter';
import ServiceShortList from './ServiceShortList';
import ServiceHowItWorks from './ServiceHowItWorks';
import ServiceNewsLetter from './ServiceNewsLetter';
import AppAppBar from './AppAppBar';
import withRoot from '../withRoot';

function Index() {
  return (
    <React.Fragment>
        <AppAppBar />
        <ServiceShortList />
        <AllServices />
        <ServiceHowItWorks />
        <ServiceNewsLetter />
        <ServiceSmokingHero />
        <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);