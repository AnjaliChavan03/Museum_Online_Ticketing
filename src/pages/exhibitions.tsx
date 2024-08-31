import Head from "next/head";
import { AnimatedBox, Wrapper } from "@/layout";
import HeroSection from "@/section/Exhibitions/Hero";
import EventsSection from "@/section/Exhibitions/Events";
import SupportSection from "@/section/shared/Support";

export default function Exhibitions() {
  return (
    <>
      <Head>
        <title>Museum - Exhibitions</title>
      </Head>
      <Wrapper>
        <HeroSection />
        <AnimatedBox>
          <EventsSection />
        </AnimatedBox>
        <AnimatedBox>
          <SupportSection />
        </AnimatedBox>
      </Wrapper>
    </>
  );
}
