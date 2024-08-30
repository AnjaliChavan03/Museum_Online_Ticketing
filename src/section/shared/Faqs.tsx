import { Container, Title, Accordion, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export default function FaqsSection() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>What are our opening hours?</Accordion.Control>
          <Accordion.Panel>The museum is open from 10 AM to 6 PM every day except Tuesdays. We are closed on Tuesdays for maintenance and staff training. </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            How long does it take to look aroung?
          </Accordion.Control>
          <Accordion.Panel>On average, visitors spend between 1.5 to 2 hours exploring the museum. The duration can vary based on your interest and the depth of your exploration of the exhibits.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            Are there printed or audio guides?
          </Accordion.Control>
          <Accordion.Panel>Yes, we offer both printed guides and audio guides to enhance your visit. Printed guides are available at the entrance, and audio guides can be rented for a more in-depth experience of our exhibits.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Do you give talks?</Accordion.Control>
          <Accordion.Panel>Yes, we regularly host educational talks and guided tours. These sessions cover various topics related to our exhibitions and collections. Please check our website or contact us for the current schedule.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>Is there a shop or cafe`?</Accordion.Control>
          <Accordion.Panel>Yes, the museum has a shop where you can purchase souvenirs, books, and unique gifts related to our exhibits. We also have a café offering a selection of refreshments and light meals for you to enjoy during your visit.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="luggage">
          <Accordion.Control>
            Do you have anywhere to store our luggage?
          </Accordion.Control>
          <Accordion.Panel>Yes, we provide luggage storage facilities for visitors to ensure you can explore the museum comfortably without carrying your bags.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="access">
          <Accordion.Control>How accessible is the museum?</Accordion.Control>
          <Accordion.Panel>The museum is designed to be accessible to all visitors. It features ramps and elevators for easy movement between floors, and accessible restrooms are available. We also offer wheelchair rentals and assistance upon request to ensure a comfortable visit for everyone.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="suitable">
          <Accordion.Control>
            Is the museum suitable for families?
          </Accordion.Control>
          <Accordion.Panel>Yes, the museum is very family-friendly, featuring interactive exhibits and activities designed for children. We also offer special programs and workshops tailored to families, making it an enjoyable and educational experience for all ages.</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
