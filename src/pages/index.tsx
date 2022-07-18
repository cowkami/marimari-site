import * as React from "react";
import { Grommet, Box, Header, Footer, Text, Button } from 'grommet';
import { Up } from 'grommet-icons';

const expand = 'sm'

const MariHeader = () => (
  <Header background="brand">
    <Box align="center">
      <Text>marimari</Text>
    </Box>
  </Header> 
);

const MainPage = () => (
  <>
    <MariHeader></MariHeader>
    <MariFooter></MariFooter>
  </>
);

const MariFooter = () => (
 <Footer background="brand">
    <Text>marimari</Text>
    <Box align="right">
      <Button icon={<Up />}>
      </Button>
    </Box>
  </Footer> 
);

const Home = () => (
  <Grommet plain>
    <div>
      <MainPage></MainPage>
    </div>
  </Grommet>
);
export default Home;
