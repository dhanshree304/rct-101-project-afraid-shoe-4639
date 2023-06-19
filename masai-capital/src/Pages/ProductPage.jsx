import React from "react";
import "../App.css";
import { Heading, Stack } from "@chakra-ui/react";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Equity Fund",
      description:
        "Invest in a diversified portfolio of stocks for long-term capital growth.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.NMFYHKUeD8_ZtQscXgJCxwHaEc&pid=ImgDet&rs=1",
    },
    {
      id: 2,
      name: "Bond Fund",
      description:
        "Invest in a portfolio of fixed-income securities for stable income and capital preservation.",
      image:
        "https://1.bp.blogspot.com/-fN8bofXToqI/XPUEF0x8FvI/AAAAAAAABFw/ku0jZEexBWMuatn3c_3lXfXnbbdV0HjwwCLcBGAs/s1600/what-are-bonds-cover-min.jpg",
    },
    {
      id: 3,
      name: "Balanced Fund",
      description:
        "Invest in a mix of stocks and bonds for a balanced approach to capital growth and income.",
      image:
        "https://tradebrains.in/wp-content/uploads/2019/02/balanced-mutual-fund-cover-1024x576.jpg",
    },
  ];

  return (
    <div className="product-page-container">
      <Heading mb={10}>Our Products</Heading>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Stack direction={"row"} justify={"center"} align={"center"}>
              {" "}
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Stack>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
