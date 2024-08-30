import React from "react";
import {
  Button,
  Container,
  createStyles,
  Overlay,
  rem,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  bg: {
    backgroundImage: `url(https://images.unsplash.com/photo-1561722798-9a732d141027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`,
    minHeight: rem(650),
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.fn.smallerThan("sm")]: {
      minHeight: rem(500),
    },
  },
  container: {
    height: rem(650),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },
  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },
}));
export default function HeroSection() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.bg}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>
            Film Screening: When the time comes
          </Title>
          <Text className={classes.description} size="xl" mt="xl">
            Saturday, September 8, 2024
          </Text>
          <Button mt="xl" size="lg" variant="filled">
            RSVP Now
          </Button>
        </Container>
      </div>
    </div>
  );
}
