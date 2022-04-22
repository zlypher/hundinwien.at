import { Box, BoxProps } from "@chakra-ui/react";

export const CONTAINER_PX = [4, 4, 4, 4];
export const CONTAINER_W = ["100%", "100%", "80ch", "100ch"];

export const CustomContainer = ({ children, ...boxProps }: BoxProps) => {
    return (
        <Box px={CONTAINER_PX} w={CONTAINER_W} mx="auto" {...boxProps}>
            {children}
        </Box>
    );
};
