import React from "react";
import "../App.css"; // Import your CSS file for styling
import Logo from "../Assets/logo.png";
import { Heading } from "@chakra-ui/react";
const About = () => {
  return (
    <div className="about-container">
      <Heading size={"lg"} mb={50}>
        About Masai Capital
      </Heading>
      <div className="about-content">
        <img src={Logo} alt="Masai Capital Logo" className="logo" />
        <p>
          Masai Capital is a leading mutual fund company dedicated to helping
          investors achieve their financial goals. With a team of experienced
          professionals and a diverse portfolio of investment options, we strive
          to deliver consistent, long-term returns for our clients.
        </p>
        <p>
          At Masai Capital, we believe in a disciplined investment approach that
          focuses on thorough research, risk management, and diversification.
          Our team of investment managers utilizes their expertise to identify
          promising investment opportunities and actively manage our funds to
          maximize returns while mitigating risks.
        </p>
        <p>
          We offer a wide range of mutual funds tailored to different investment
          objectives and risk profiles. Whether you're saving for retirement,
          planning for your child's education, or aiming for other financial
          milestones, our funds provide flexible options to help you reach your
          goals.
        </p>
        <p>
          Our commitment to transparency and integrity is at the core of our
          operations. We prioritize clear communication with our investors,
          providing regular updates on fund performance, market insights, and
          changes in investment strategy. Our aim is to empower our clients with
          the knowledge and tools they need to make informed investment
          decisions.
        </p>
        <p>
          Discover the potential of mutual fund investing with Masai Capital.
          Join us on the journey towards financial growth and stability.
        </p>
      </div>
    </div>
  );
};

export default About;
