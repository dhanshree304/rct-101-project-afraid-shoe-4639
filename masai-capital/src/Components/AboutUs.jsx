import { Box, Button, Heading, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Box w="80%" m="auto" mt={"200px"}>
      <Text>A B O U T &nbsp;U S</Text>
      <Stack
        mt="30px"
        direction={"row"}
        align={"center"}
        justify={"space-between"}
      >
        <Stack>
          <Heading w="60%" lineHeight={"45px"} color={"rgb(1,37,61)"}>
            One of the markets most effective Diversification Dyrategies
          </Heading>
          <Text mt={"30px"} lineHeight={"25px"} width={"50%"}>
            MASAI Captil gorup was launched in 2015 with one goal to help our
            clients achieves long term positive return on investments , ever
            since ,we have oprated with that goal in mind , and it remains our
            force to this day.
          </Text>
          <Button
            w={"30%"}
            mt="20px"
            p={"35px 30px"}
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </Button>
        </Stack>
        <Box w={"50%"}>
          <Img
            boxShadow={"lg"}
            borderRadius={"15px"}
            w="100%"
            src="https://www.crownasia.com.ph/assets/blogs/f387b0d998/A-Laptop-showing-a-graph.jpg"
            alt="x"
          />
        </Box>
      </Stack>
    </Box>
  );
};
