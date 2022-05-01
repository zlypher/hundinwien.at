import { Box, Container, Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import { INavigationLink } from "../../types";
import { CustomContainer } from "./container";

interface IFooterProps {
    children?: React.ReactNode;
}

const navigationStructure: INavigationLink[] = [
    {
        name: "Alltag",
        url: "/tbd",
        children: [
            {
                name: "Tieraräzte",
                url: "/tierarzt",
            },
            {
                name: "Hundezonen",
                url: "/hundezone",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
        ],
    },
    {
        name: "Lorem Ipsum",
        url: "/tbd",
        children: [
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
        ],
    },
    {
        name: "Lorem Ipsum",
        url: "/tbd",
        children: [
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
        ],
    },
    {
        name: "Sonstiges",
        url: "/tbd",
        children: [
            {
                name: "Linksammlung",
                url: "/links",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
            {
                name: "Lorem Ipsum",
                url: "/lorem",
            },
        ],
    },
];

export const Footer = ({ children }: IFooterProps) => {
    return (
        <Box as="footer" bg="gray.200" py="8">
            <CustomContainer>
                <Flex flexDir={["column", "row"]} justifyContent="space-between" alignItems={["center", "flex-start"]}>
                    {navigationStructure.map(nav => {
                        return (
                            <Box key={nav.name} mb={[8, 0]}>
                                <Text d="block" mb="2" fontSize="lg" fontWeight="bold">
                                    {nav.name}
                                </Text>
                                {nav.children && (
                                    <List>
                                        {nav.children.map(navSub => {
                                            return (
                                                <ListItem key={navSub.name}>
                                                    <Link href={navSub.url}>{navSub.name}</Link>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                )}
                            </Box>
                        );
                    })}
                </Flex>
            </CustomContainer>
        </Box>
    );
};
