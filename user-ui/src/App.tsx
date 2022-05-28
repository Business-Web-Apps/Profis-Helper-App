import * as React from 'react';
import AllServices from './modules/views/AllServices';
import ServiceSmokingHero from './modules/views/ServiceSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ServiceShortList from './modules/views/ServiceShortList';
import ServiceHowItWorks from './modules/views/ServiceHowItWorks';
import ServiceNewsLetter from './modules/views/ServiceNewsLetter';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

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
