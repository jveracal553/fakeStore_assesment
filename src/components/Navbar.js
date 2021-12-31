import { Box, Center, HStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Center backgroundColor={"yellow"}>
        <SimpleGrid>
          <HStack>
            <Box
              fontWeight={"bold"}
              fontSize={"23px"}
              p={2}
              d="flex"
              alignItems="center"
            >
              <Link to="/">Home</Link>
            </Box>
            <Box
              fontWeight={"bold"}
              fontSize={"23px"}
              p={2}
              d="flex"
              alignItems="center"
            >
              <Link to="/about">About</Link>
            </Box>
          </HStack>
        </SimpleGrid>
      </Center>
    </div>
  );
};
export default Navbar;
