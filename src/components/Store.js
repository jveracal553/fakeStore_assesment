import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Spinner,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const min = 15;
const max = 80;
const rand = () => min + Math.random() * (max - min);

const StoreItem = ({ product }) => {
  const [counterDown, setcounterDown] = useState(parseInt(rand()));
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (counterDown === 0) {
      setVisible(false);
    } else {
      setTimeout(() => setcounterDown(counterDown - 1), 2000);
    }
  }, [counterDown]);

  return (
    <Box p={4} borderRadius="lg" borderWidth="1px">
      {visible ? (
        <Box>
          <Tag mt={2} colorScheme={"green"}>
            {counterDown}s
          </Tag>
          <Link
            to={{
              pathname: `/product/${product.id}`,
              state: product,
            }}
          >
            <Center>
              <Image mt={4} src={product.image} w={24} h={24}></Image>
            </Center>
          </Link>
        </Box>
      ) : (
        <Box>
          <Tag mt={2} colorScheme={"red"}>
            Expired!
          </Tag>
          <Center>
            <Image mt={4} src={product.image} w={24} h={24}></Image>
          </Center>
        </Box>
      )}

      <Heading mt={4} noOfLines={1} size="sm" fontWeight="Normal">
        {product.title}
      </Heading>
      <Spacer />
      <Box>
        <Center>
          <Tag mt={2}>{product.category}</Tag>
        </Center>
      </Box>
      <Stack>
        <Box>
          <Center>
            <Tag mt={2}>${product.price}</Tag>
          </Center>
        </Box>
      </Stack>
    </Box>
  );
};

function Store() {
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setLoading(false);
      setStoreItem(data);
    });
  }, []);

  return (
    <Box>
      <Header title="Fake Store" />

      {loading ? (
        <Center mt={6}>
          <Spinner
            thickness="7px"
            speed="0.75s"
            emptyColor="gray.200"
            color="black.500"
            size="xl"
          />
        </Center>
      ) : (
        <Box p={2}>
          <SimpleGrid columns={4} spacing={4} mt={4} ml={276} mr={276}>
            {storeItem.map((item) => {
              return <StoreItem key={item.id} product={item} />;
            })}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

export default Store;
