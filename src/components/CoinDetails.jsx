import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  VStack,
  Image,
  Radio,
  Stack,
  RadioGroup,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../index";
import Chart from "./Chart";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [chartArray, setChartArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`);

      const { data: chartData } = await axios.get(
        `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=30`
      );

      setChartArray(chartData.prices);

      setCoin(data);
      setLoading(false);
    };

    fetchCoin();
  }, [params.id, currency]);

  return loading ? (
    <Loader />
  ) : (
    <Container background={"white"} maxW={"container.xl"}>
      <Box width={"full"} py={"5"} my={"8"}>
        <Heading
          mb={"6"}
          textAlign={"center"}
          letterSpacing={"widest"}
          color={"darkblue"}
          fontSize={"medium"}
        >
          Graph of 1 month
        </Heading>
        <Chart arr={chartArray} currency={currencySymbol} />
      </Box>

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

      <VStack spacing={"8"} p={"10"}>
        <Text fontSize={"small"} alignSelf={"center"}>
          {" "}
          Last Updated on {" : "} {Date(coin.last_updated).split("G")[0]}
        </Text>
        <Image src={coin.image.large} w={"20"} h={"20"} objectFit={"contain"} />
        <Stat lineHeight={"tall"}>
          <StatLabel>{coin.name}</StatLabel>
          <StatNumber my={"2"}>
            {`${currencySymbol} ${coin.market_data.current_price[currency]}`}
          </StatNumber>

          <StatHelpText mb={"4"}>
            <StatArrow
              type={
                coin.market_data.price_change_percentage_24h > 0
                  ? "increase"
                  : "decrease"
              }
            />
            {coin.market_data.price_change_percentage_24h} %
          </StatHelpText>
          <Badge
            p={"3"}
            backgroundColor={"blackAlpha.800"}
            color={"white"}
            borderRadius={"lg"}
          >
            {`# ${coin.market_data.market_cap_rank}`}
          </Badge>
        </Stat>

        <ProgressBar
          high={coin.market_data.high_24h[currency]}
          low={coin.market_data.low_24h[currency]}
        />
      </VStack>

      <Box w={"full"} p={"4"}>
        <Item title={"Max Supply"} value={coin.market_data.max_supply} />
        <Item
          title={"Circulating Supply"}
          value={coin.market_data.circulating_supply}
        />
        <Item
          title={"Market Cap"}
          value={`${currencySymbol} ${coin.market_data.market_cap[currency]}`}
        />
        <Item
          title={"All Time Low"}
          value={`${currencySymbol} ${coin.market_data.atl[currency]}`}
        />
        <Item
          title={"All Time High"}
          value={`${currencySymbol} ${coin.market_data.ath[currency]}`}
        />
      </Box>
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} m={"5"} w={"full"}>
    <Text letterSpacing={"widest"}>{title}</Text>
    <Text fontWeight={"semibold"}>{value}</Text>
  </HStack>
);

const ProgressBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"gray"} w={"full"} />
    <HStack w={"full"} justifyContent={"space-between"}>
      <Badge p={"3"} backgroundColor={"gray.300"}>
        {low}
      </Badge>
      <Text fontSize={"medium"}>24H Range</Text>
      <Badge p={"3"} backgroundColor={"yellow"}>
        {high}
      </Badge>
    </HStack>
  </VStack>
);

export default CoinDetails;
