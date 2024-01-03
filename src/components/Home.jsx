import { Container, Heading, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import "../App.css";

const Home = () => {
  return (
    <Container height={"100vh"} background={"#02124c"} maxW={"full"}>
      <VStack p={"20"} h={"full"} justifyContent={"center"}>
        <motion.div
          className="anime-box"
          style={{
            height: "65vh",
          }}
          animate={{
            translateY: "30px",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={
              "https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg"
            }
            h={"96"}
            w={"96"}
            objectFit={"contain"}
            borderRadius={"full"}
          />
        </motion.div>
        <Heading
          className="brand"
          color={"whiteAlpha.700"}
          letterSpacing={"widest"}
          fontSize={"xx-large"}
        >
          Cypto King
        </Heading>
      </VStack>
    </Container>
  );
};

export default Home;
