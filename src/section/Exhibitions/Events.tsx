import {
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Title,
} from "@mantine/core";
import React from "react";
import EventsCard from "@/components/EventsCard";
import { useMediaQuery } from "@mantine/hooks";

export default function EventsSection() {
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const data = [
    {
      image:
        "https://www.bdlmuseum.org/assets/images/exhibition-portrait-anamika.jpg",
      title: "All those who touched my life",
      category: "nature",
      date: "ongoing",
      type: "current",
      description:
        "The exhibition showcases Alamu's figurative works and self-portraits, deeply rooted in personal narratives. Her art honors those who have influenced her life, transforming everyday moments into remarkable, heroic depictions through rich appliques and tapestries. Alamu also creates abstract tapestries and landscapes inspired by nature. Her work, rooted in her South Indian heritage, draws on traditional stitching and embroidery techniques learned from her grandmother and mother, reclaiming and elevating these creative feminine practices.",
    },
    {
      image:
        "https://www.bdlmuseum.org/assets/images/upcoming_exhibition_28feb.jpg",
      title: "Kalanand 2024",
      category: "beach",
      date: "2 September",
      type: "current",
      description:
        "The Kalanand online grants program, initiated ten years ago by the Prafulla Dahanukar Art Foundation, supports emerging artists across India, including those from remote areas. A jury of art historians, critics, and artists selected the winning works through a blind review process. The 2023-24 contest saw over 300 entries, with 10 artists receiving the All India Grant and 15 receiving the All India Merit Grant. The Dr Bhau Daji Lad Museum is partnering with the Foundation to exhibit the 25 winning entries across six categories: Painting, Drawing, Printmaking, Ceramics, Sculpture, and Tapestry.",
    },
    {
      image:
        "https://www.bdlmuseum.org/assets/images/exhibition-event-jan2020.png",
      title: "THE WITNESS",
      category: "nature",
      date: "17 August – 31 October",
      type: "online",
      description:
        "In this exhibition, Nalini Malani, a pioneer of experimental art in India, explores themes of oppression, freedom, and justice through immersive installations, wall drawings, erasure performances, and video/shadow plays. Her work challenges societal certainties and cultural constructs, engaging viewers in a commentary on the present and our collective past and future. Presented by Dr. Bhau Daji Lad Museum in collaboration with Goethe-Institut / Max Mueller Bhavan Mumbai and supported by Volte Art Projects, the exhibition pushes the boundaries of visual art.",
    },
    {
      image:
        "https://www.bdlmuseum.org/assets/images/spectral_timesfeb19.jpg",
      title: "Spectral Times by Sarnath Banerjee",
      category: "nature",
      date: "15 August – 31 October",
      type: "current",
      description:
        "Sarnath Banerjee, an acclaimed graphic novelist, draws inspiration from Mumbai and the Museum’s historic collection to craft stories that blend the ordinary with the extraordinary. Narrated through a fictional magazine interview, these uncanny tales explore urban life, using both sound and visuals to create an archive of memories. Banerjee’s work blurs the line between reality and fiction, inviting viewers to pause, reflect, and question appearances with a touch of humor.",
    },
    {
      image:
        "https://www.bdlmuseum.org/assets/images/mexican-exb.jpg",
      title: "Mexican Amates",
      category: "tourism",
      date: "15 August – 31 October",
      type: "current",
      description:
        "This exhibition features Mexican Folk Art on Amate, a traditional bark paper with roots in pre-Hispanic Mexico. Amate is made by the Otomi people from the bark of Jonote trees and decorated by the Nahua people. Historically used for rituals and codices, Amate production was banned during the Spanish conquest but continued in some indigenous communities. Today, it’s a vibrant handcraft that supports tourism in San Pablito, Puebla, with bright, colorful paintings created by Nahua artisans in Guerrero.",
    },
    {
      image:
        "https://www.bdlmuseum.org/assets/images/shoonya-ghar-past.jpg",
      title: "Shoonya Ghar",
      category: "nature",
      date: "15 August – 31 October",
      type: "current",
      description:
        "Shoonya Ghar a multimedia exhibition by Sudarshan Shetty, is debuting in Mumbai. Inspired by the 12th-century poet Gorakhnath, the exhibition features a large-scale installation combining sculpture, found objects, and film. The outdoor sculptural piece serves as an architectural set, while the film portrays its construction, with scenes depicting birth, death, dance, play, and violence. The exhibition invites viewers to engage with the components—set, music, performance—in various stages of construction, encouraging them to craft their own narrative.",
    },
  ];

  return (
    <Container fluid pt={80} pb={120}>
      <Flex mb="xl" align="center" justify="space-between">
        <Title size={smallerThan ? 32 : 48}>Special Exhibitions</Title>
        <Button variant="light">Browser all</Button>
      </Flex>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 2, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {data.map((item) => (
          <EventsCard item={item} key={`event-title${item.title}`} />
        ))}
      </SimpleGrid>
      <Center mt={smallerThan ? 36 : "xl"}>
        <Button size="lg" variant="outline" fullWidth={smallerThan}>
          Load More
        </Button>
      </Center>
    </Container>
  );
}
