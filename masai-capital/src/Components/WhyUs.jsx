import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TbHealthRecognition } from "react-icons/tb";
import { FaStethoscope } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
export const WhyUs = () => {
  return (
    <Box w="80%" m="auto" mt={"200px"}>
      <Text>W H Y &nbsp;U S</Text>
      <Stack
        mt="30px"
        direction={"row"}
        align={"center"}
        justify={"space-between"}
      >
        <Stack>
          <Heading lineHeight={"45px"} color={"rgb(1,37,61)"}>
            Extensive investment exprience{" "}
          </Heading>
          <Text mt={"30px"} lineHeight={"25px"} width={"70%"}>
            99% of the client assest under our administration are managed by
            highly exprineced portfolio managers who posses over 20 years of
            exprience
          </Text>
        </Stack>
      </Stack>
      <Stack
        w="100%"
        direction={"row"}
        align={"center"}
        justify={"space-between"}
        mt={30}
        gap={5}
      >
        <Box boxShadow={"lg"} borderRadius={15} padding={5}>
          <Stack
            w={"-webkit-fit-content"}
            justify={"center"}
            align={"center"}
            boxShadow={"dark-lg"}
            p={5}
            borderRadius={15}
          >
            <TbHealthRecognition size={80} />
          </Stack>
          <Text mt={30} fontWeight={"bold"} lineHeight={8} w={"70%"}>
            Unrestrict approch to international healthcare opportunities
          </Text>
        </Box>
        <Box boxShadow={"lg"} borderRadius={15} padding={5}>
          <Stack
            w={"-webkit-fit-content"}
            justify={"center"}
            align={"center"}
            boxShadow={"dark-lg"}
            p={5}
            borderRadius={15}
          >
            <FaStethoscope size={80} />
          </Stack>
          <Text mt={30} fontWeight={"bold"} lineHeight={8} w={"70%"}>
            Long-ternured advisires of three PhDs and one MD in internal
            medicine{" "}
          </Text>
        </Box>{" "}
        <Box boxShadow={"lg"} borderRadius={15} padding={5}>
          <Stack
            w={"-webkit-fit-content"}
            justify={"center"}
            align={"center"}
            boxShadow={"dark-lg"}
            p={5}
            borderRadius={15}
          >
            <GiTakeMyMoney size={80} />
          </Stack>
          <Text mt={30} fontWeight={"bold"} lineHeight={8} w={"70%"}>
            Industry leading investment returns with on focus of risk management{" "}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
