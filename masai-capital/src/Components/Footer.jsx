import { Box, Divider, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./../Assets/logo.png";
export const Footer = () => {
  return (
    <Box w="100%" h={550} bgColor={"#0D2D44"}>
      <Box w="80%" color={"white"} m="auto" p={50}>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          exercitationem in saepe rerum quasi quam provident autem neque
          eligendi a molestias ut vero consequatur distinctio reiciendis rem,
          asperiores architecto error.
        </Text>
        <Text mt={30}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          exercitationem in saepe rerum quasi quam provident autem neque
          eligendi a molestias ut vero consequatur distinctio reiciendis rem,
          asperiores architecto error.Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quisquam, exercitationem in saepe rerum quasi quam
          provident autem neque eligendi a molestias ut vero consequatur
          distinctio reiciendis rem, asperiores architecto error.
        </Text>
        <Text mt={30}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          exercitationem in saepe rerum quasi quam provident autem neque
          eligendi a molestias ut vero consequatur distinctio reiciendis rem,
          asperiores architecto error.Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quisquam, exercitationem in saepe rerum quasi quam
          provident autem neque eligendi a molestias ut vero consequatur
          distinctio reiciendis rem, asperiores architecto error.Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quisquam, exercitationem
          in saepe rerum quasi quam provident autem neque eligendi a molestias
          ut vero consequatur distinctio reiciendis rem, asperiores architecto
          error. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quisquam, exercitationem in saepe rerum quasi quam provident autem
          neque eligendi a molestias ut vero consequatur distinctio reiciendis
          rem, asperiores architecto error.
        </Text>
        <Divider mt={30} />
        <Stack
          mt={2}
          direction={"row"}
          align={"center"}
          justify={"space-between"}
        >
          <Stack
            height={"100%"}
            w="20%"
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Img
              src={Logo}
              width={"200px"}
              height={"80px"}
              cursor={"pointer"}
              alt="logog"
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
