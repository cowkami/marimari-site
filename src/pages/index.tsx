import * as React from "react";
import { Grommet, Box, Text, Button, Heading } from 'grommet';
import { Menu, Phone, Mail } from "grommet-icons";


const storeName = (
  <>
    marimari &trade;
  </>
)

const mariTheme = {
  global: {
    font: {
      family: "Sans-serif"
    },
    colors: {
      brand: "#E3C576",
      assistance: "#2F4F4F",
      accent: "#FFFAF1"
    }
  }
}

const MariHeader = () => (
  <Box
    tag="header"
    direction="row"
    background="brand"
    pad={{ vertical: "medium", horizontal: "medium"}}
    justify="center"
  >
    <Text weight="bold" color="assistance" size="large"> { storeName } </Text>
  </Box> 
);

const MariFooter = () => (
  <Box
    tag="footer"
    direction="column"
    background="assistance"
    pad={{ vertical: "medium", horizontal: "medium"}}
    justify="center"
  >
    <Box direction="row" justify="center">
      <Heading color="accent"> { storeName } </Heading>
    </Box>
    <Box direction="row" justify="center">
      <Phone /> 
      <Text> {"0120-345-6789"} </Text>
    </Box>
    <Box direction="row" justify="center">
      <Mail />
      <Text> {"mari_mari_croffle@gmail.com"} </Text>
    </Box>
  </Box> 
);

const News = () => (
  <Box justify="between" align="center" background="brand">
    <Heading level="2">
      News
    </Heading>
  </Box>
);

const MariMenu = () => (
  <Box justify="between" align="center" background="brand">
    <Heading level="2">
      Menu
    </Heading>
  </Box>
);

const OpenAt = () => (
  <Box direction="column" justify="between" align="center" background="brand">
    <Heading level="2">
      Open
    </Heading>
    <Text weight="bold" color="assistance">
      <p>水~土曜日 11:00~17:30</p>
      <p>日曜日 11:00~18:00</p>
      <p>※売り切れ次第終了</p>
    </Text>
  </Box>
)

const MainPage = () => (
  <>
    <MariHeader />
    {/* <News /> */}
    <MariMenu />
    <OpenAt />
    <MariFooter />
  </>
);

const NavBar = () => (
  <Box
    tag="footer"
    direction="row"
    align="center"
    background="accent"
    justify="between"
    pad={{ vertical: "small", horizontal: "medium"}}
  >
    <Box align="left">
      <Text weight="bold"> { storeName } </Text>
    </Box>
    <Box align="right">
      <Button icon={<Menu />} onClick={() => {}} />
    </Box>
  </Box> 
);

const Home = () => (
  <Grommet
    theme={mariTheme}
    full={true}
  >
    <MainPage />
    <NavBar />
  </Grommet>
);
export default Home;
