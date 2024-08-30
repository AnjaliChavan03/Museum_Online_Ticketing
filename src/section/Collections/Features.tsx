import {
  Button,
  ButtonProps,
  Container,
  createStyles,
  Paper,
  PaperProps,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.violet[8],
    color: theme.white,

    "&:hover, &:focus": {
      cursor: "pointer",
    },
  },
}));

export default function FeaturesSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const buttonProps: ButtonProps = {
    variant: "white",
    size: "sm",
    fullWidth: smallerThan,
  };

  const paperProps: PaperProps = {
    p: "md",
    className: classes.card,
  };

  return (
    <Container fluid pt={80} pb={120}>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <Paper {...paperProps}>
          <Stack align="start">
            <Title order={3}>Reference Materials</Title>
            <Text>
            At the Dr. Bhau Daji Lad Museum in Byculla, reference materials include archival documents that provide historical context and administrative details about the museum. The museum also houses research publications such as books, journals, and articles on art history, archaeology, and cultural studies. Catalogs of past exhibitions and permanent collections, along with photographic archives capturing historical and contemporary views, support research and education. Educational resources like guides and learning materials further assist students, researchers, and educators.
            </Text>
            <Button {...buttonProps}>Learn more</Button>
          </Stack>
        </Paper>
        <Paper {...paperProps}>
          <Stack align="start">
            <Title order={3}>Collections Access</Title>
            <Text>
            The museum provides access to its collections through various means. Digital archives offer online access to high-resolution images and detailed descriptions of artifacts, making it easier for researchers to explore the collection remotely. Physical access is available on-site for those conducting research, though it often requires prior arrangement and approval. The museum also maintains special collections, including rare or sensitive items, which may be accessed upon request for scholarly research purposes.The museum also offers virtual tours and interactive features to enhance remote exploration of its collections.
            </Text>
            <Button {...buttonProps}>Learn more</Button>
          </Stack>
        </Paper>
        <Paper {...paperProps}>
          <Stack align="start">
            <Title order={3}>Artifact Donations</Title>
            <Text>
            For those interested in contributing to the museum, artifact donations are guided by specific policies. These policies outline the criteria for acceptance and the process for submitting donation proposals. The museum recognizes and acknowledges donors, integrating donated items into its collection to support its mission and enhance its holdings. For detailed information on donation procedures or to make a donation, individuals are encouraged to contact the museum directly or visit its official website.The museum offers guidance and support to facilitate a smooth donation process.
            </Text>
            <Button {...buttonProps}>Learn more</Button>
          </Stack>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
