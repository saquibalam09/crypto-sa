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
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=${currency}`
      );

      setCoins(data);
      setLoading(false);
    };

    fetchExchanges();
  }, [currency]);
  return loading ? (
    <Loader />
  ) : (
    <Container maxW={"container.xl"}>
      <RadioGroup value={currency} onChange={setCurrency}>
        <Stack
          justifyContent={"center"}
          direction={"row"}
          spacing={8}
          padding={"5"}
        >
          <Radio value="inr">₹ INR</Radio>
          <Radio marginX={"8"} value="usd">
            $ USD
          </Radio>
          <Radio value="eur">€ EUR</Radio>
        </Stack>
      </RadioGroup>

      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {coins.map((i) => (
          <CoinCard
            key={i.id}
            id={i.id}
            name={i.name}
            image={i.image}
            price={i.current_price}
            symbol={i.symbol}
            currencySymbol={currencySymbol}
          />
        ))}
      </HStack>
    </Container>
  );
};

const CoinCard = ({ id, name, image, price, symbol, currencySymbol }) => (
  <NavLink to={`/coins/${id}`}>
    <VStack
      background={"white"}
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
      <Image
        src={image}
        marginBottom={"5"}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"img"}
      />
      <Heading size={"md"} noOfLines={1}>
        {name}
      </Heading>
      <Text noOfLines={1}>
        Price {" : "} {currencySymbol}
        {price}
      </Text>
      <Text noOfLines={1}>{symbol}</Text>
    </VStack>
  </NavLink>
);

export default Coin;
