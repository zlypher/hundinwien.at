import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { CustomContainer } from "./container";
import { Navigation } from "./navigation";

interface IHeaderProps {
    children?: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
    return (
        <Box as="header" pos="relative">
            <img src="http://placekitten.com/1200/500" width="1200" height="500" />
            <Navigation />
        </Box>
    );
};
