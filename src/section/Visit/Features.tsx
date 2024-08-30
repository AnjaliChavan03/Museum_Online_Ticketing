import {
  Box,
  Container,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Galleries",
    description:
      "Explore the museum's diverse galleries, each showcasing unique collections that span various periods and cultures. From ancient artifacts to contemporary art, the galleries offer an immersive experience into the rich tapestry of human history and creativity. Spend time discovering the museum's permanent exhibits and rotating displays, each carefully curated to provide deeper insights and foster a greater appreciation of art and heritage.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661893375334-e2603ce341d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
    title: "Family visits",
    description:
      "A visit to the museum is a great way for families to enjoy quality time together while learning about history and art. The museum offers family-friendly exhibits and interactive activities designed to engage visitors of all ages. Special programs and workshops for children and families make it easy to explore the museum's collections in a fun and educational way, creating memorable experiences for everyone. The museum offers interactive activities for all ages.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601059252957-c3d6f1911313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Exhibitions and Events",
    description:
      "Stay updated on the museum’s latest exhibitions and special events, which feature temporary displays, guest speakers, and cultural celebrations. These events offer unique opportunities to see new and rare items, participate in educational workshops, and experience the museum’s dynamic offerings. Check the museum’s schedule regularly to take advantage of these enriching activities and gain a deeper understanding of various art forms and historical themes.",
  },
];

export default function FeaturesSection() {
  const theme = useMantineTheme();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  return (
    <Container fluid pt={80} pb={120}>
      <Title size={smallerThan ? 32 : 48} align="center" mb="xl">
        Ways to explore
      </Title>
      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {data.map((d, i) => (
          <Paper
            key={`visit-feature-${i}`}
            sx={{ backgroundColor: theme.colors.violet[0] }}
          >
            <Image src={d.image} alt={d.title} height={360} radius="sm" />
            <Box p="md">
              <Title order={3} mb="md">
                {d.title}
              </Title>
              <Text>{d.description}</Text>
            </Box>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
