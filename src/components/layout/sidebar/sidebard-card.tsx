import { Box, BoxProps, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { INavigationLink } from "../../../types";

interface ISidebarCardProps extends BoxProps {
    headline: string;
    description: string;
    link: INavigationLink;
}

export const SidebarCard = ({ headline, description, link, ...boxProps }: ISidebarCardProps) => {
    return (
        <Box shadow="md" pt="4" border="1px solid" borderColor="gray.200" borderRadius="md" {...boxProps}>
            <Heading as="h2" fontSize="md" mb="2" px="4">
                {headline}
            </Heading>
            <Box bg="blue.500" p="4">
                <Text>{description}</Text>
                {link && (
                    <NextLink href={link.url} passHref>
                        <Link d="block" mt="2" textAlign="right">
                            {link.name}
                        </Link>
                    </NextLink>
                )}
            </Box>
        </Box>
    );
};
