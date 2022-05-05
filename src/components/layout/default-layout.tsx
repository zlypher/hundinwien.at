import { Box, Flex } from "@chakra-ui/react";
import { IHeader } from "../../types";
import { Footer } from "./footer";
import { Header } from "./header";

interface IDefaultLayoutProps {
    children: React.ReactNode;
    header: IHeader;
}

const DefaultLayout = ({ header, children }: IDefaultLayoutProps) => {
    return (
        <Flex flexDir="column" minH="100vh">
            <Header header={header}>Header</Header>
            <Box as="main" py="8" flexGrow={1}>
                {children}
            </Box>
            <Footer>...</Footer>
        </Flex>
    );
};

export default DefaultLayout;
