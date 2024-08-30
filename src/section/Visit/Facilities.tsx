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
      "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    title: "food and drink",
    description:
      "The museum’s café provides a welcoming space where visitors can enjoy a variety of food and drink options. Whether you're looking for a quick snack, a refreshing beverage, or a light meal, the café offers a comfortable environment to relax and recharge. Seasonal specials and locally sourced ingredients enhance the dining experience. It’s a great spot to unwind and reflect on your museum experience before continuing your exploration. The café’s pleasant ambiance adds to the overall enjoyment of your visit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "museum shop",
    description:
      " Located conveniently within the museum, the shop offers a wide range of merchandise that reflects the themes and exhibits of the museum. From art books and prints to unique handcrafted items, the shop provides a chance to take home a piece of the museum's culture and heritage. Exclusive museum-themed products and limited edition items make it a destination for unique finds. It’s an excellent place to find memorable souvenirs or gifts that capture the essence of your visit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1635184551554-e42829283972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "collections",
    description:
      "The museum boasts a rich and varied collection of historical artifacts, artworks, and cultural objects. Each exhibit is carefully curated to offer a deeper understanding of different art forms and historical periods. Interactive displays and detailed descriptions enhance visitor engagement and education. The collections provide an immersive experience, allowing visitors to explore and appreciate the diverse cultural and historical narratives presented through the museum's displays.",
  },
];

export default function FacilitiesSection() {
  const theme = useMantineTheme();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  return (
    <Container fluid pt={80} pb={120}>
      <Title size={smallerThan ? 32 : 48} mb="xl" align="center">
        Facilities
      </Title>
      <SimpleGrid
        cols={3}
        spacing="lg"
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
              <Title order={3} mb="md" transform="capitalize">
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
