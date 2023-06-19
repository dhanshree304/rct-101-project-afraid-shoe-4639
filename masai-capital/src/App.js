import "./App.css";
import { Box } from "@chakra-ui/react";
import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
