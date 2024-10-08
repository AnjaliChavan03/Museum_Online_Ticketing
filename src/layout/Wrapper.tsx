import TopNav from "@/components/TopNav";
import { ReactNode } from "react";
import AppFooter from "@/components/AppFooter";
import FooterData from "@/data/footer.json";
import TopBar from "@/components/TopBar";
import { Box, rem, useMantineTheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

interface IProps {
  children: ReactNode;
}

export default function Wrapper({ children }: IProps) {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const smallerThan = useMediaQuery("(max-width: 769px)");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 2,
          width: "100%",
          boxShadow: theme.shadows.sm,
        }}
      >
        <TopBar />
        <TopNav handleOpenSearch={open} />
      </Box>
      <Box sx={{ marginTop: rem(104) }}>{children}</Box>
      <AppFooter data={FooterData.data} />
      
    </motion.div>
  );
}
