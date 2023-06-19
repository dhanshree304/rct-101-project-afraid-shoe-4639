import { Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Stack
      h={"80px"}
      w="100%"
      bgColor={"#ffff"}
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      boxShadow={"lg"}
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
          height={"90%"}
          onClick={() => navigate("/")}
          cursor={"pointer"}
          alt="logog"
        />
      </Stack>
      <Stack
        height={"100%"}
        w="45%"
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link style={{ color: "#01253D", fontWeight: "bold" }} to="/">
          Home
        </Link>
        <Link style={{ color: "#01253D", fontWeight: "bold" }} to="/products">
          Products
        </Link>
        <Link
          style={{ color: "#01253D", fontWeight: "bold" }}
          to="/performance"
        >
          Performance
        </Link>
        <Link style={{ color: "#01253D", fontWeight: "bold" }} to="/about">
          About us
        </Link>
        <Link style={{ color: "#01253D", fontWeight: "bold" }} to="forms">
          Forms
        </Link>
        <Link style={{ color: "#01253D", fontWeight: "bold" }} to="contact">
          Contact us
        </Link>
      </Stack>
      <Stack
        height={"100%"}
        w="25%"
        direction={"row"}
        justifyContent={"center"}
        gap={6}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          onClick={() => navigate("/signup")}
          cursor={"pointer"}
        >
          <FaUser size={22} color="#00C5B4" />
          <Text style={{ color: "#01253D", fontWeight: "bold" }}>
            Open An Account
          </Text>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          onClick={() => navigate("/login")}
          cursor={"pointer"}
        >
          <RiLoginBoxLine color="#00C5B4" size={25} />
          <Text style={{ color: "#01253D", fontWeight: "bold" }}>Log in</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
