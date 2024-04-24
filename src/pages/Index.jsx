// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <Image src="https://images.unsplash.com/photo-1590102426319-c7526718cd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MHx8fHwxNzEzODIzNjAwfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
      </Flex>
      <SimpleGrid columns={3} spacing={10}>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaShoppingCart />
            <Text ml={2}>Sales</Text>
          </StatLabel>
          <StatNumber>1,587</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.4%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaDollarSign />
            <Text ml={2}>Revenue</Text>
          </StatLabel>
          <StatNumber>$89,400</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            3.8%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Growth</Text>
          </StatLabel>
          <StatNumber>7.2%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            Yearly Growth
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
