import {
  Button,
  Center,
  Container,
  List,
  Paper,
  PaperProps,
  Stack,
  Text,
  Title,
  TitleProps,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

const { Item } = List;

export default function WelcomeSection() {
  const theme = useMantineTheme();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const paperProps: PaperProps = {
    withBorder: true,
    p: "lg",
    sx: {
      backgroundColor: theme.colors.violet[0],
    },
  };

  const titleProps: TitleProps = {
    order: 3,
    mb: "md",
  };

  return (
    <Container pt={80} pb={120}>
      <Stack spacing="lg">
        <Paper {...paperProps}>
          <Title {...titleProps}>Museum Hours</Title>
          <List>
            <Item>
              Monday, Tuesday, Wednesday, Thrusday, Friday–Sunday: 10 a.m.–5 p.m.; last entry is
              at 4 p.m.
            </Item>
            <Item>
              Closed Monday and in observance of Juneteenth (6/19), Fourth of
              July, Anniversary of the Civil Liberties Act of 1988 (8/10),
              Indigenous People’s Day, Election Day, Thanksgiving, Christmas,
              and New Year’s Day.
            </Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>Advance Timed Ticketing</Title>
          <List>
            <Item>Timed, advance tickets are recommended.</Item>
            <Item>
              Entrance times are on the hour, every hour, starting at 10 a.m.
              until 4 p.m. (PST).
            </Item>
            <Item>
              Admission is accepted up to 30 minutes after your ticket time.
            </Item>
            <Item>Tickets are released four weeks in advance.</Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>Before You Arrive</Title>
          <List>
            <Item>
              Please print your ticket or download it to your mobile device.
            </Item>
            <Item>
              Confirm the museum's operating hours and any special dates or times for closures.
            </Item>
            <Item>
              Familiarize yourself with the museum layout, current exhibitions, and any special events or tours available.
            </Item>
            <Item>
               Bring any necessary items such as a water bottle, comfortable shoes, and any required identification or membership cards.
            </Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>When You Arrive</Title>
          <List>
            <Item>Scan your ticket at self scanning stations.</Item>
            <Item>
              If required, check in at the reception desk or kiosk to confirm your reservation or membership status.
            </Item>
            <Item>
               Pick up a museum map or guide from the information desk to help navigate the exhibits.
            </Item>
            <Item>
              Utilize available lockers or designated areas for storing personal belongings, if applicable.
            </Item>
            <Item>
              Check for any specific guidelines related to the exhibitions you plan to visit, such as photography rules or restricted areas.
            </Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>Visitor Policies</Title>
          <List>
            <Item>
              Masks are strongly recommended, except for children ages two and
              younger.
            </Item>
            <Item>No food or drinks permitted in the museum.</Item>
            <Item>
              A limited number of self-serve storage lockers (9&quot;W x
              22&quot;H x 16&quot;D) are available on a first-come basis. Valid
              ID required to use lockers.
            </Item>
            <Item>Large bags are not permitted</Item>
            <Item>Only service animals are allowed.</Item>
          </List>
        </Paper>
        <Text>
          Protecting the health and well-being of our staff and visitors is our
          top priority.
        </Text>
        <Text>
          See below for admission pricing and directions. For more information
          please contact Visitor Services at museumservices@email.org or call
          000.00.0000.
        </Text>
        <Text>
          Occasionally we may need to close galleries at short notice. We regret
          that we are not always able to alert visitors in advance of their
          visit.
        </Text>
        <Text>We look forward to welcoming you.</Text>
        <Center mt={smallerThan ? 16 : "xl"}>
          <Button size="lg" fullWidth={smallerThan}>
            Get Tickets
          </Button>
        </Center>
      </Stack>
    </Container>
  );
}
