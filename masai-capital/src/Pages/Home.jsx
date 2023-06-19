import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ImHome3 } from "react-icons/im";
import { AboutUs } from "../Components/AboutUs";
import { WhyUs } from "../Components/WhyUs";
import { CallDetails } from "../Components/CallDetails";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Box className="Home" w={"100%"} h={"750px"}>
        <Box w={"100%"} h={"100%"} bgColor={"rgb(8,44,68,0.8)"}>
          <Stack w="80%" m="auto" flexDirection={"column"} color={"white"}>
            <Stack flexDirection={"row"} mt="200px" alignItems={"center"}>
              <ImHome3 color="#01A1DF" size={35} />
              <Text>H O M E</Text>
            </Stack>
            <Heading size={"2xl"} w={"50%"} lineHeight={"70px"}>
              Meet your future goals with our
              <span style={{ color: "#01A1DF" }}> Mutual fund </span>
            </Heading>
            <Text w={"45%"} fontSize={"2xl"} lineHeight={"40px"}>
              MASAI capital helps our clients achieve logn-term positive return
              on investments.
            </Text>
            <Button
              w={"20%"}
              mt="20px"
              p={"35px 0px"}
              colorScheme="teal"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              JOIN US NOW
            </Button>
            <Stack
              direction={"row"}
              mt={"50px"}
              h="250px"
              boxShadow={"lg"}
              // justifyContent={"space-between"}
              gap={0}
            >
              <Stack
                justifyContent={"center"}
                bgColor={"#022239"}
                alignItems={"center"}
                w="30%"
                p={20}
                borderLeftRadius={"25px"}
              >
                <Text color="#01A1DF" fontSize={"4xl"}>
                  25+
                </Text>
                <Text fontSize={"3xl"} textAlign={"center"}>
                  Average years of exprience
                </Text>
              </Stack>
              <Stack
                justifyContent={"center"}
                bgColor={"rgb(1,37,61)"}
                alignItems={"center"}
                w="40%"
                p={20}
              >
                <Text color="#01A1DF" fontSize={"4xl"}>
                  50%+
                </Text>
                <Text fontSize={"3xl"} textAlign={"center"}>
                  Avarage anual return for last 4 year
                </Text>
              </Stack>
              <Stack
                justifyContent={"center"}
                bgColor="rgb(2,42,68)"
                alignItems={"center"}
                w="30%"
                p={20}
                borderRightRadius={"25px"}
              >
                <Text color="#01A1DF" fontSize={"4xl"}>
                  0%+
                </Text>
                <Text fontSize={"3xl"} textAlign={"center"}>
                  Load fee performance
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <AboutUs />
      <WhyUs />
      <CallDetails />
    </>
  );
};
