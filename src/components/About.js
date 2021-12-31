import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "./Header";

function ProductCard({}) {
  return (
    <Box>
      <Header title="About" />
      <Grid mt={10} templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" />
        <GridItem w="100%" />
        <GridItem w="100%" p={4} maxW="xm" borderRadius="lg" borderWidth="2px">
          <VStack>
            <Center>
              <Image
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGU04yF5WxsQw/profile-displayphoto-shrink_800_800/0/1590288503657?e=1646265600&v=beta&t=DslnXSPV_bZK8gBQIfocB2nYVyrmiX1Ya8chTX6xTfw"
                w={44}
                h={44}
                borderRadius={"100px"}
              ></Image>
            </Center>

            <Heading mt={4} noOfLines={1} size="sm" fontWeight="bold">
              Jesus Vera C.
            </Heading>
            <a
              href="https://github.com/jveracal553?tab=repositories"
              target={"_blank"}
              rel="noreferrer"
            >
              @jveracal553
            </a>
            <HStack>
              <Tag fontSize={"12px"}>Data Analyst</Tag>
              <Tag fontSize={"12px"}>Web Developer</Tag>
              <Tag fontSize={"12px"}>Peruvian</Tag>
            </HStack>
          </VStack>
          <GridItem mt={4} ml={3} fontSize={"13px"}>
            {/* <Center>
              <Text textAlign={"center"} fontWeight={"bold"}>
                "Si un problema de la vida real se puede programar, manos a la
                obra"
              </Text>
            </Center> */}
            <Center mt={4}>
              <ul>
                <li>Me gusta la tecnologia y la innovacion.</li>
                <li>
                  He iniciado el camino de ser Web/Movil Developer en Make It
                  Real (Colombia).
                </li>
                <li>
                  Actualmente trabajo en Freeport McMoran. Inc como Data
                  Analyst.
                </li>
              </ul>
            </Center>
          </GridItem>
          <GridItem mt={3} ml={3} fontSize={"13px"}>
            <ul>
              <Text fontWeight={"bold"}>En Make It Real, aprendi:</Text>
              <li>Soft Skills.</li>
              <li>React JS, JS, Best js practices.</li>
              <li>Ingles.</li>
            </ul>
          </GridItem>
        </GridItem>
        <GridItem w="100%" />
        <GridItem w="100%" />
      </Grid>
    </Box>
  );
}

export default ProductCard;
