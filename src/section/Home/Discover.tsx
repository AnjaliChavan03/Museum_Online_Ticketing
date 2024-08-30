import {
  Box,
  Button,
  ButtonProps,
  Center,
  Container,
  createStyles,
  Divider,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.violet[0],

    "&:hover, &:focus": {
      transition: "all ease 200ms",
    },
  },
}));

export default function DiscoverSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const buttonProps: ButtonProps = {
    variant: "outline",
    fullWidth: smallerThan,
  };

  return (
    <Container fluid pt={80} pb={120}>
      <Box mb="xl" sx={{ textAlign: "center" }}>
        <Title size={48} mb="md">
          Discover
        </Title>
        
      </Box>
      <Paper className={classes.card} p={smallerThan ? 8 : 6}>
        <Grid sx={{ alignItems: "center" }}>
          <Grid.Col lg={6} p={0}>
            <Image
             // src="https://images.unsplash.com/photo-1610494940231-a07875fb25fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              height={smallerThan ? 320 : 420}
              fit="cover"
              radius="sm"
            />
          </Grid.Col>
          <Grid.Col lg={6} p={0}>
            <Stack align="start" p={smallerThan ? "md" : "lg"}>
              <Title size={24}></Title>
              <Text>
              Address
              Dr. Bhau Daji Lad Museum,
              Veermata Jijabai Bhosale Botanical Udyan and Zoo (Rani Baug),
              91/A, Dr Babasaheb Ambedkar Road,
              Byculla East Mumbai 400027 India
              +91 22 2374 1234
              +91 22 2371 4119
              </Text>
              <Text>
              Coordinates
              18°58'46.4"N 72°50'05.3"E
              </Text>
              <Text>
              How to get here
              The Museum Plaza is located right behind the main Museum building.
              Accessible via a separate entrance on the left once you enter the IN gate of the Veermata Jijabai Bhosale Botanical Udyan and Zoo (Rani Bagh).
              It is a 2 mins walk from the Byculla (E) station.
              </Text>
              <Button {...buttonProps} size={smallerThan ? "sm" : "md"}>
                Continue reading
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
      {!smallerThan && <Divider my="xl" />}
      <SimpleGrid
        cols={4}
        mt="xl"
        breakpoints={[
          { maxWidth: "lg", cols: 2, spacing: "lg" },
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
      </SimpleGrid>
    
    </Container>
  );
}
