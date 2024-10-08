import {
  Box,
  Burger,
  Button,
  ButtonProps,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  rem,
  ScrollArea,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LanguagePicker from "@/components/LanguagePicker";

const useStyles = createStyles((theme) => ({
  header: {
    border: "none",
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
  },
  link: {
    [theme.fn.smallerThan("sm")]: {},

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  activeLink: {
    backgroundColor: theme.colors.violet[0],
    borderBottom: `2px solid ${theme.colors.violet[9]}`,

    ...theme.fn.hover({
      borderRadius: theme.radius.sm,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),

    [theme.fn.smallerThan("md")]: {
      color: theme.colors.violet[9],
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  hiddenTablet: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    label: "Visit",
    link: "/visit",
  },
  {
    label: "Exhibitions",
    link: "/exhibitions",
  },
  {
    label: "Collections",
    link: "/collections",
  },
  {
    label: "Support",
    link: "/support",
  },
];

interface IProps {
  handleOpenSearch: () => void;
}

export default function TopNav({ handleOpenSearch }: IProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, cx, theme } = useStyles();
  const router = useRouter();

  const urlResolver = (url: string): boolean => {
    return router.pathname.includes(url.toLowerCase());
  };

  const buttonProps: ButtonProps = {
    variant: "subtle",
    size: "md",
  };

  const links = mockdata.map((item) => (
    <Button
      className={urlResolver(item.label) ? classes.activeLink : classes.link}
      key={item.label}
      component={Link}
      href={item.link}
      {...buttonProps}
    >
      {item.label}
    </Button>
  ));

  return (
    <Box>
      <Header height="100%" px="md" className={classes.header}>
        <Group position="apart" sx={{ height: "100%" }}>
          <UnstyledButton component={Link} href="/">
            <Title order={2}>Dr. Bhau Daji Lad Museum</Title>
          </UnstyledButton>

          <Group
            sx={{ height: "100%" }}
            spacing="xs"
            className={classes.hiddenTablet}
          >
            {links}
           
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            title="Open menu navigation"
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Museum & Art"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Stack spacing="sm" px="sm" mb="sm">
            {links}
            
          </Stack>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
        
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
