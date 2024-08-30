import React from "react";
import {
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Paper,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    minHeight: rem(650),

    [theme.fn.smallerThan("sm")]: {
      minHeight: rem(500),
    },
  },
  imageBg: {
    minWidth: "100%",
    height: rem(650),
    objectFit: "cover",
    objectPosition: "bottom",

    [theme.fn.smallerThan("sm")]: {
      minHeight: rem(500),
    },
  },
  content: {
    marginTop: rem(-320),
    paddingBottom: rem(96),

    [theme.fn.smallerThan("md")]: {
      minHeight: rem(500),
      marginTop: rem(-400),
      paddingBottom: 0,
    },
    [theme.fn.smallerThan("sm")]: {
      minHeight: rem(500),
      marginTop: rem(-480),
      paddingBottom: 0,
    },
  },
}));
export default function HeroSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  return (
    <Box className={classes.wrapper}>
      <img
        className={classes.imageBg}
        src="https://www.bdlmuseum.org/assets/bdlimages/pagesbannerimages/aboutus/about-banner-small.webp"
        alt="Background"
      />
      <Container className={classes.content}>
        <Stack align="center" justify="end" pb="xl" sx={{ height: "100%" }}>
          <Paper p={smallerThan ? "md" : "lg"} shadow="md">
            <Text
              size={smallerThan ? 24 : 36}
              weight={600}
              mb="md"
              align="center"
            >
              Welcome to Dr. Bhau Daji Lad Museum
            </Text>
            <Text mb="md" size={smallerThan ? "md" : "lg"} align="center">
              Dr. Bhau Daji Lad Museum is the oldest museum in Mumbai. Situated in the vicinity of Byculla Zoo, Byculla East, it was originally established in 1855 as a treasure house of the decorative and industrial arts, and was later renamed in honour of Bhau Daji Lad.
            </Text>
            <Flex
              justify="center" 
              align="center"
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "sm", sm: "lg" }}
            >
              <Button size="lg" fullWidth={smallerThan} >
                Learn More
              </Button>
              <Button
                variant="white"
                fullWidth={smallerThan}
              >
                
              </Button>
            </Flex>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
