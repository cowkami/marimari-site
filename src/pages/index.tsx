import * as React from "react";
import { Grommet, Box, Text, Button } from 'grommet';
import { Up, Phone, Mail } from "grommet-icons";
import { IncomingMessage } from "http";
import { traceDeprecation } from "process";

const expand = 'sm'

const Marimari = (
  <>
    marimari &trade;
  </>
)

const mariTheme = {
  global: {
    font: {
      family: "Roboto"
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
    <Text weight="bold" color="assistance"> { Marimari } </Text>
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
      <Text weight="bold" color="accent">marimari &trade;</Text>
    </Box>
    <Box direction="row" justify="center">
      <Phone />
      <Text> {"0120-345-6789"} </Text>
    </Box>
    <Box direction="row" justify="center">
      <Mail />
      <Text>
        {"mari_mari_croffle@gmail.com"}
      </Text>
    </Box>
  </Box> 
);

const MainPage = () => (
  <>
    <MariHeader />
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
      <Text weight="bold">marimari</Text>
    </Box>
    <Box align="right">
      <Button
        icon={<Up />}
        onClick={() => {}}
      />
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
