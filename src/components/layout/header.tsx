import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IHeader } from "../../types";
import { CustomContainer } from "./container";
import { Navigation } from "./navigation";

interface IHeaderProps {
    children?: React.ReactNode;
    header: IHeader;
}

export const Header = ({ header, children }: IHeaderProps) => {
    const color = header?.color || "blue.100";

    return (
        <Box as="header" pos="relative">
            <Flex bg={color} minH="400px" alignItems="center" py="8">
                <CustomContainer>
                    <Heading as="h1">{header?.headline}</Heading>
                    {header?.subheadline && <Text>{header.subheadline}</Text>}
                </CustomContainer>
            </Flex>
            <Navigation />
        </Box>
    );
};
