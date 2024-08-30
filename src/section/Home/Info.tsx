import React from "react";
import {
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconClock, IconMap2, IconTicket } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const { Col } = Grid;

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.violet[0],
    padding: theme.spacing.md,
  },
}));

export default function InfoSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const iconSize = smallerThan ? 32 : 48;

  return (
    <Container pt={80} pb={120}>
      <Title mb="xl" size={smallerThan ? 32 : 48} align="center">
        The world&apos;s leading museum of art
      </Title>
      <Grid>
        <Col md={6} lg={7}>
          <Image
            src="https://4.bp.blogspot.com/-PDbn67fk_fk/WcgB0pJt19I/AAAAAAAAFLo/lvMTJ2xjp2ABd2nCwjMuCCVKFRBEGIrgwCLcBGAs/s1600/DSC_0655.jpg"
            alt=""
            height={smallerThan ? 320 : 500}
            fit="cover"
            radius="sm"
          />
        </Col>
        <Col md={6} lg={5}>
          <Stack>
            <Paper className={classes.card}>
              <Flex gap="md">
                <Box sx={{ width: iconSize, height: iconSize }}>
                  <IconClock size={iconSize} />
                </Box>
                <Stack spacing="sm">
                  <Text size="lg" weight={500}>
                    Opening Times
                  </Text>
                  {/* <Text>From January 1</Text> */}
                  <Text>Monday - Friday : 10.00–17.00</Text>
                </Stack>
              </Flex>
            </Paper>
            <Paper className={classes.card}>
              <Flex gap="md">
                <Box sx={{ width: iconSize, height: iconSize }}>
                  <IconTicket size={iconSize} />
                </Box>
                <Stack spacing="sm" align="flex-start">
                  <Text size="lg" weight={500}>
                    Book Online
                  </Text>
                  <Text>
                    Some exhibitions and events carry a separate charge
                  </Text>
                  <Button size="md" fullWidth={smallerThan}>
                    Join Now and Book Online
                  </Button>
                </Stack>
              </Flex>
            </Paper>
            <Paper className={classes.card}>
              <Flex gap="md">
                <Box sx={{ width: iconSize, height: iconSize }}>
                  <IconMap2 size={iconSize} />
                </Box>
                <Stack spacing="sm">
                  <Text size="lg" weight={500}>
                    Where You Visit
                  </Text>
                  <Text>Veermata Jijabai Bhosale Botanical Udyan and Zoo (Rani Baug),
                        91/A, Dr Babasaheb Ambedkar Road,
                  </Text>
                  <Text>Byculla East Mumbai 400027 India</Text>
                </Stack>
              </Flex>
            </Paper>
          </Stack>
        </Col>
      </Grid>
    </Container>
  );
}
