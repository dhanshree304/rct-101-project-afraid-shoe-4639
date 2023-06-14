import { Box, Stack } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <Stack
      h={"80px"}
      w="100%"
      bgColor={"#ffff"}
      direction={"row"}
      justifyContent={"space-around"}
      border="1px solid red"
      alignItems={"center"}
    >
      <Box height={"100%"} w="25%">
        ab
      </Box>
      <Box height={"100%"} w="40%">
        bbc
      </Box>
      <Box height={"100%"} w="25%">
        cc
      </Box>
    </Stack>
  );
};
