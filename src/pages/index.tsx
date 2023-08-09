import { Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <div>Olá Mundo</div> */}
      <Box w="100%" h="100%" bg="red">
        test
      </Box>
    </>
  );
}
