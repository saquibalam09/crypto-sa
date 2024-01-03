import { Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HStack
      style={{
        borderBottom: "1px solid #add8e633",
      }}
      p={"2"}
      justifyContent={"space-evenly"}
      shadow={"base"}
      bgColor={"#02124c"}
    >
      <motion.span
        initial={{
          x: -10,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        <NavLink to={"/"}>
          <Image
            src={
              "https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg"
            }
            h={"10"}
            w={"10"}
            borderRadius={"full"}
          />
        </NavLink>
      </motion.span>
      <Button className="home-btn" variant={"unstyled"} color={"white"}>
        <NavLink to={"/"}>Home</NavLink>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <NavLink to={"/exchanges"}>Exchanges</NavLink>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <NavLink to={"/coins"}>Coins</NavLink>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <NavLink to={"/about"}>About us</NavLink>
      </Button>
    </HStack>
  );
};

export default Header;
