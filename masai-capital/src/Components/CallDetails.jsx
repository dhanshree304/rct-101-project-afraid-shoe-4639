import React from "react";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
export const CallDetails = () => {
  return (
    <Box mt={50} bgColor={"#1A547A"} w="100%" h={250}>
      <Stack
        direction={"row"}
        justify={"space-between"}
        w="80%"
        m="auto"
        height={"100%"}
        align={"center"}
      >
        <Stack justify={"center"} height={"100%"} align={"center"}>
          <IoLocationSharp color="white" size={65} />
          <Text
            color={"white"}
            fontWeight={"bold"}
            mt={3}
            width={"60%"}
            textAlign={"center"}
            lineHeight={"10"}
          >
            {" "}
            3900 N 10th St McAllen TX,78501 ,Suite 1050
          </Text>
        </Stack>
        <Divider orientation="vertical" height={"80px"} />

        <Stack justify={"center"} height={"100%"} align={"center"}>
          <IoCallOutline color="white" size={65} />
          <Text
            color={"white"}
            fontWeight={"bold"}
            mt={3}
            textAlign={"center"}
            lineHeight={"10"}
          >
            +3 8825659871
          </Text>
        </Stack>
        <Divider orientation="vertical" height={"80px"} />
        <Stack justify={"center"} height={"100%"} align={"center"}>
          <SlEnvolopeLetter color="white" size={65} />
          <Text
            color={"white"}
            fontWeight={"bold"}
            mt={3}
            textAlign={"center"}
            lineHeight={"10"}
          >
            masaicapital@gmail.com
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
