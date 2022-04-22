import { Box, HStack, Link, List, ListItem, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { INavigationLink } from "../../types";
import { CustomContainer } from "./container";

interface INavigationProps {
    children?: React.ReactNode;
}

const navigationStructure: INavigationLink[] = [
    {
        name: "Gesundheit",
        url: "/tbd",
        children: [
            {
                name: "Tieraräzte",
                url: "/tierarzt",
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
];

export const Navigation = ({ children }: INavigationProps) => {
    return (
        <Box bg="blue.400">
            <CustomContainer>
                <HStack>
                    <NextLink href="/" passHref>
                        <Link>Hundinwien.at</Link>
                    </NextLink>
                    <Spacer />
                    <List d="flex">
                        {navigationStructure.map(nav => {
                            return (
                                <ListItem key={nav.name} mb={[8, 0]}>
                                    <NextLink href={nav.url} passHref>
                                        <Link p="4" d="block">
                                            {nav.name}
                                        </Link>
                                    </NextLink>
                                </ListItem>
                            );
                        })}
                    </List>
                </HStack>
            </CustomContainer>
        </Box>
    );
};
