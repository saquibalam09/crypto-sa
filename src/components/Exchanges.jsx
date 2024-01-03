import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import Loader from "./Loader";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(exchanges);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);

      setExchanges(data);
      setLoading(false);
    };

    fetchExchanges();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Container maxW={"container.xl"}>
      <HStack justifyContent={"space-evenly"} wrap={"wrap"}>
        {exchanges.map((i) => (
          <ExchangeCard
            key={i.id}
            name={i.name}
            image={i.image}
            rank={i.trust_score_rank}
            url={i.url}
          />
        ))}
      </HStack>
    </Container>
  );
};

const ExchangeCard = ({ name, image, rank, url }) => (
  <a href={url} target="blank">
    <VStack
      backgroundColor={"white"}
      w={"52"}
      shadow={"lg"}
      p={"10"}
      borderRadius={"lg"}
      transition={"all 0.4s"}
      m={"5"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={image} w={"10"} h={"10"} objectFit={"contain"} alt={"img"} />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
