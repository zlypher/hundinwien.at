import { Box, Flex } from "@chakra-ui/react";

interface ITwoColumnLayoutProps {
    children: React.ReactNode;
}

export const TwoColumnLayout = ({ children }: ITwoColumnLayoutProps) => {
    return (
        <Flex flexDir="row" gap="4">
            {children}
        </Flex>
    );
};
interface ITwoColumnMainProps {
    children: React.ReactNode;
}

export const TwoColumnMain = ({ children }: ITwoColumnMainProps) => {
    return (
        <Box flexBasis={2} flexGrow={1}>
            {children}
        </Box>
    );
};
interface ITwoColumnSideProps {
    children: React.ReactNode;
}
export const TwoColumnSide = ({ children }: ITwoColumnSideProps) => {
    return <Box flexBasis={"300px"}>{children}</Box>;
};
