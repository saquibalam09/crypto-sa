import { Container, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <Container py={"10"} maxW={"full"} background={"#02124c"}>
      <br />{" "}
      <Heading
        textAlign={"center"}
        py={"8"}
        color={"whiteAlpha.700"}
        letterSpacing={"widest"}
        fontSize="x-large"
      >
        Who Are we ?
      </Heading>
      <Text
        p={"5"}
        lineHeight={"8"}
        fontSize={"medium"}
        color="whiteAlpha.800"
        textAlign={"center"}
      >
        Hey welcome to Crypto King.. We provide the best crypto trading app in
        India. We provide our guidance at a very cheap price.
      </Text>
      <br />
      <br />
      <Heading
        textAlign={"center"}
        py={"8"}
        color={"whiteAlpha.700"}
        letterSpacing={"widest"}
        fontSize="large"
      >
        Meet Our Developer
      </Heading>
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 0",
          paddingBottom: "2rem",
        }}
        initial={{
          x: -30,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
      >
        <Image
          borderRadius="full"
          boxSize="200px"
          src="https://avatars.githubusercontent.com/u/95972410?v=4"
          alt="saquib King"
        />
      </motion.div>
      <Text
        p={"5"}
        fontSize={"medium"}
        color="whiteAlpha.700"
        textAlign={"center"}
      >
        Saquib is a full stack web Develper, MERN Developer, React Native
        Developer. Well known in DS Algo. Curious to learn and grow.
      </Text>
    </Container>
  );
};

export default About;
