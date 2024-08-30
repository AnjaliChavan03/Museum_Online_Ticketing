import {
  Button,
  Container,
  Flex,
  Grid,
  List,
  Paper,
  PaperProps,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const { Item } = List;

export default function InfoSection() {
  const theme = useMantineTheme();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const paperProps: PaperProps = {
    p: "md",
    sx: {
      backgroundColor: theme.colors.violet[0],
    },
  };

  return (
    <Container fluid pt={80} pb={120}>
      <Grid>
        <Grid.Col lg={7}>
          <Paper {...paperProps}>
            <Title order={2} mb="lg">
              Your support is vital and helps the Museum to share the collection
              with the world.
            </Title>
            <Text mb="md">
            Your support is more than just a contribution; it’s a vital lifeline that helps the Museum share its collection with the world. Every donation, membership, and sponsorship plays a crucial role in preserving the rich tapestry of human history, art, and culture that we safeguard within our walls.

            Imagine a world where ancient artifacts, masterful artworks, and historical documents remain hidden, accessible only to a fortunate few. Your support shatters those barriers, making it possible for anyone, anywhere, to explore and learn from our vast collection. Whether it's through in-person visits, virtual exhibitions, or educational programs, your generosity ensures that the treasures of the past are accessible to future generations.
            </Text>
            <List mb="md">
              <Item>
              Moreover, your contributions enable us to innovate and expand our reach. With your help, we can invest in cutting-edge technology, enhance our digital platforms, and develop new ways to engage and inspire a global audience. From interactive online tours to virtual reality experiences, your support helps us bring history to life in dynamic and meaningful ways.
              </Item>
             
              <Item>
              you for being a champion of culture, knowledge, and inspiration. Together, we can make a difference, one exhibit, one artifact, and one story at a time
              </Item>
             
            </List>
            <Text>
              Read our supporter case studies to discover just a few of the
              fantastic collaborations already in place.
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col lg={5}>
          <Paper {...paperProps}>
            <Title order={3} mb="lg">
              Contact us
            </Title>
            <Text mb="md">
              For more information about supporting the Museum:
            </Text>
            <Text mb="md">Email: email@museum.org</Text>
            <Text mb="md">Phone: +000 000 000</Text>
            <Flex gap="sm" wrap="wrap">
              <Button fullWidth={smallerThan}>Donate Now</Button>
              <Button fullWidth={smallerThan}>Make a regular donation</Button>
              <Button fullWidth={smallerThan}>Donate an artifact</Button>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
