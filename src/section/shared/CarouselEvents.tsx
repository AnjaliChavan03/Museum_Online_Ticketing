import {
  ActionIcon,
  ActionIconProps,
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Progress,
  rem,
  Title,
} from "@mantine/core";
import { Carousel, Embla } from "@mantine/carousel";
import React, { useCallback, useEffect, useState } from "react";
import { IconArrowLeftBar, IconArrowRightBar } from "@tabler/icons-react";
import EventsCard from "@/components/EventsCard";
import { useMediaQuery } from "@mantine/hooks";

const data = [
  {
    image:
      "https://www.bdlmuseum.org/assets/images/museum-katta-ban.jpg",
    title: "Museum Katta",
    category: "Cultural Folk Art",
    date: "ongoing",
    type: "online",
    description:
    " Museum Katta, a curated programme series in Marathi, showcases historical and contemporary social and cultural practices in folk art, cinema, literature, theatre, music, and visual arts. It aims to be a mediator between artists and audience in building sensitive contemporary responses through pioneering historical projects, experiments, and programmes as a form of documentation.",
  },
  {
    image:
      "https://www.bdlmuseum.org/assets/images/workshop-panchtantra.jpg",
    title: "Pattachitra Painting Workshop by Rupsona Chitrakar",
    category: "Painting",
    date: "2 May",
    type: "ongoing",
    description:
      "Pattachitra, a cloth-based scroll painting, is one of the oldest and most popular art forms of West Bengal and Odisha. Dive into its intricate details and captivating mythological narratives alongside renowned artist Ruksona Chitrakar.",
  },
  {
    image:
      "https://www.bdlmuseum.org/assets/images/workshop-sholapith.jpg",
    title: "Sholapith Flower Workshop by Gobindo Halder",
    category: "Flower Workshop",
    date: "17 August – 31 October",
    type: "offline",
    description:
      " Discover the magic of Sholapith, also known as Indian cork, a fascinating material with endless possibilities for crafting. Imagine a dried, milky-white sponge that can be molded into various shapes and forms.",
  },
  {
    image:
      "https://www.bdlmuseum.org/assets/images/explore-movies-at-museum.jpg",
    title: "Movies at the Museum",
    category: "Movie",
    date: "15 August – ",
    type: "current",
    description:
      "Bergman's semi-autobiographical film 'Fanny and Alexander' explores the vicissitudes of the lives of a pair of siblings upon the death of their father. Originally intended to be a television series, this Academy Award-winning film showcases Bergman's trademark melancholy and emotional intensity with immense joy and passion.",
  },
  {
    image:
      "https://www.bdlmuseum.org/assets/images/explore-brilliant-thing.jpg",
    title: "Every Brilliant Thing",
    category: "Play",
    date: "15 August – 31 October",
    type: "current",
    description:
      " Every Brilliant Thing is an uplifting play about love, life, family, mental health and a list of all the wonderful things in the world! Presented as a live participative performance, this moving and intimate piece invites you to celebrate the joy found in everyday objects. A unique experience that encourages everyone present to meet and interact with each other and the performer and in doing so, take the story forward.",
  },
  {
    image:
      "https://www.bdlmuseum.org/assets/images/explore-book-launch.jpg",
    title: "Book Launch & Talk:",
    category: "Public Lectures and events",
    date: "31 October",
    type: "current",
    description:
      "The publication not only explores T. V. Santhosh's recent exhibition of the same title, which took place earlier this year at the Dr. Bhau Daji Lad Museum but also provides a critical examination of his 15-year career. It includes essays by Premjish Achari, Nancy Adajania, Siddharth Sivakumar, Najrin Islam, Renuka Sawhney, Prajna Desai, Sathyanand Mohan, Anushka Rajendran, Maya Kóvskaya, Margherita Artoni, and Gitanjali Dang, along with several of Santhosh's own reflections on his work.",
  },
];

const useStyles = createStyles((theme) => ({
  link: {
    "&:hover, &:focus": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

interface IProps {
  title?: string;
}

export default function CarouselEventsSection({ title }: IProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const actionIconProps: ActionIconProps = {
    size: "xl",
    variant: "subtle",
    color: "violet",
  };

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  const handleNext = () => {
    embla?.scrollNext();
  };

  const handlePrevious = () => {
    embla?.scrollPrev();
  };

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  const slides = data.map((item, i) => (
    <Carousel.Slide key={`item.title-${i}`}>
      <EventsCard item={item} />
    </Carousel.Slide>
  ));

  return (
    <Container fluid pt={80} pb={120} sx={{ overflow: "hidden" }}>
      <Flex justify="space-between" align={smallerThan ? "flex-end" : "center"}>
        <Title size={smallerThan ? 32 : 48}>
          {title ?? "Exhibitions and events"}
        </Title>
        <Flex gap="md">
          <ActionIcon
            onClick={handlePrevious}
            title="previous slide"
            {...actionIconProps}
          >
            <IconArrowLeftBar />
          </ActionIcon>
          <ActionIcon
            onClick={handleNext}
            title="next slide"
            {...actionIconProps}
          >
            <IconArrowRightBar />
          </ActionIcon>
        </Flex>
      </Flex>
      <Progress
        value={scrollProgress}
        styles={{
          bar: { transitionDuration: "0ms" },
          root: { maxWidth: "100%" },
        }}
        size="xs"
        mx="auto"
        my="lg"
        aria-label="Events Progress Bar"
        {...{
          "aria-labelledby": "Events Progress Bar",
          id: "eventProgressBar",
          title: "Events Progress Bar",
        }}
      />
      <Carousel
        slideSize="33%"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: rem(2) },
        ]}
        slideGap="md"
        align="start"
        slidesToScroll={1}
        loop
        dragFree
        getEmblaApi={setEmbla}
        withControls={false}
      >
        {slides}
      </Carousel>
      <Center mt={smallerThan ? 36 : "xl"}>
        <Button size="lg" variant="outline" fullWidth={smallerThan}>
          View all Upcoming Events
        </Button>
      </Center>
    </Container>
  );
}
