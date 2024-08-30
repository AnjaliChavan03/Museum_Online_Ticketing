import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const { Col } = Grid;

const data = [
  {
    image:
      "https://www.bdlmuseum.org/collections/img/early-modern/6.jpg",
    title: "	Carpet, Bombay School of Art: Late 19th to early 20th century",
    description:
      "This floral patterned carpet was acquired by the Museum in 1906 as part of a set of five carpets. It was manufactured in the Reay Art Workshop at the Sir J. J School of Art (formerly known as the Bombay School of Art). The Reay Art workshop was set up in 1890 to promote regional crafts like wood carving, pottery, silver and copper work and carpet weaving. Some of the specimens from this set were loaned to the Principal of the School of Art to exhibit in the Bombay Section of the Allahabad Exhibition between the years 1910-11",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://www.bdlmuseum.org/collections/img/trade-cultural/trade-03.jpg",
    title: "Dattatreya: Late 19th to early 20th century ",
    description:
      "Dattatreya, a Hindu deity, is an aspect of the Trimurti, the Divine Trinity of Brahma, Vishnu and Shiva. This Dattatreya idol illustrates the naturalistic form which developed in response to European influence on Indian art. It can be distinguished from other paramparik, or traditional, idols in the Museum's collection that conform to traditional iconographic conventions.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://www.bdlmuseum.org/collections/img/history/history-7.jpg",
    title: "People of Mumbai: Late 19th to early 20th century - Plaster of Paris models",
    description:
      "The Kamalnayan Bajaj Mumbai Gallery highlights the diverse traditional headgear of Mumbai’s various communities, reflecting the city’s cosmopolitan nature. The establishment of the East India Company’s headquarters in Mumbai in the 16th century spurred migration, as the company invited communities from across India and beyond, offering economic and social opportunities. This migration contributed significantly to the city’s growth and diversity.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://www.bdlmuseum.org/collections/img/modern/2.jpg",
    title: "Listening to the Shades: Nalini Malani 2014 - Facsimile printed reverse paintings",
    description:
      "Listening to the Shades an artists book by Nalini Malani and Robert Storr, draws from Christa Wolfs interpretation of the Greek myth of Cassandra. Featuring forty-two facsimile reverse paintings, it explores Cassandra's ignored insights and relates them to ongoing issues in the women's revolution. Malanis work highlights the persistent challenges women face globally. Artist Nalini Malani donated a copy of the 42 facsimile prints, Listening to the Shades, to the Museum in February 2014.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://www.bdlmuseum.org/collections/img/trade-cultural/trade-10.jpg",
    title: "	Jar, India: Late 19th to early 20th century",
    description:
      "Enamelling is the art of ornamenting the surface of metal by fusing together different minerals over it to create designs in colour. The metal is first engraved, chased or repoussed to provide depressions within which the colours are embedded. The range of colour attainable on gold is greater than on silver and still more on copper than on brass. In India, Jaipur and Kashmir are two important centres of this art form.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://www.bdlmuseum.org/collections/img/trade-cultural/trade-13.jpg",
    title: "Lampstand, Ratnagiri 1922: Bison Horn",
    description:
      "This intricately carved lamp stand from the Ratnagiri School of Art is made of bison horn and blends European form with Indian decorative elements like the cobra. In the 19th-20th centuries, bison horn was used both for aesthetics and utility. It was shaped by heating and moistening with coconut oil, then hand-worked or molded, polished, and adorned with designs. Ratnagiri and Sawantwadi in Maharashtra were key centers for producing such ornamental horn objects.",
    imageDescription: "Images by Unsplash",
  },
];
export default function Collections() {
  const theme = useMantineTheme();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const items = data.map((d, i) => (
    <Paper
      key={`collection-item-${i}`}
      p={smallerThan ? 0 : "md"}
      sx={{ backgroundColor: theme.colors.violet[0] }}
    >
      <Grid gutter="md" sx={{ alignItems: "center" }}>
        <Col lg={4}>
          <Image src={d.image} alt={d.title} height={340} width={290} radius="sm" mb="sm" />
          <Text align="center" italic size="sm">
            {/* {d.imageDescription} */}
          </Text>
        </Col>
        <Col lg={8}>
          <Title order={3}>{d.title}</Title>
          <Text my="md">{d.description}</Text>
          <Button variant="outline" fullWidth={smallerThan}>
            Explore
          </Button>
        </Col>
      </Grid>
    </Paper>
  ));

  return (
    <Container pt={80} pb={120}>
      <Title size={smallerThan ? 32 : 48} mb="xl">
        Featured Collections
      </Title>
      <Stack>{items}</Stack>
      <Center mt={smallerThan ? 36 : "xl"}>
        <Button size="lg" variant="outline" fullWidth={smallerThan}>
          Explore More Featured Collections
        </Button>
      </Center>
    </Container>
  );
}
