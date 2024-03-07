import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Divider, Image, SimpleGrid } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Business Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={12}>
        <Stat>
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>$345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Total Customers</StatLabel>
          <StatNumber>45,602</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            1.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Avg Order Value</StatLabel>
          <StatNumber>$76.20</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            8.12%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Conversion Rate</StatLabel>
          <StatNumber>2.84%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            0.23%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={12}>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Heading size="lg" mb={4}>
            Revenue Trend <FaChartLine />
          </Heading>
          <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnQlMjByZXZlbnVlfGVufDB8fHx8MTcwOTgwMTMxN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue trend chart" />
        </Box>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Heading size="lg" mb={4}>
            Sales by Category <FaChartPie />
          </Heading>
          <Image src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWUlMjBjaGFydCUyMHNhbGVzJTIwYnklMjBjYXRlZ29yeXxlbnwwfHx8fDE3MDk4MDEzMTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales by category chart" />
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Heading size="lg" mb={4}>
            New vs Returning Customers <FaUsers />
          </Heading>
          <Image src="https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXIlMjBjaGFydCUyMG5ldyUyMHZzJTIwcmV0dXJuaW5nJTIwY3VzdG9tZXJzfGVufDB8fHx8MTcwOTgwMTMxOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="New vs returning customers chart" />
        </Box>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Heading size="lg" mb={4}>
            Top Products <FaChartBar />
          </Heading>
          <Image src="https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXIlMjBjaGFydCUyMHRvcCUyMHByb2R1Y3RzfGVufDB8fHx8MTcwOTgwMTMxOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Top products chart" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
