import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { IVeterinarian, vets } from "../../resources/vets";
import NextLink from "next/link";
import { CustomContainer } from "../../components/layout/container";

interface IVeterinarianOverviewProps {
    vets: IVeterinarian[];
}

const VeterinarianOverview: NextPage<IVeterinarianOverviewProps> = ({ vets }) => {
    return (
        <CustomContainer>
            <Heading as="h1">Tierärzte</Heading>
            <List>
                {vets.map((v: IVeterinarian) => (
                    <ListItem key={v.name}>
                        <NextLink href={`/tierarzt/${v.slug}`} passHref>
                            <Link>{v.name}</Link>
                        </NextLink>
                    </ListItem>
                ))}
            </List>
        </CustomContainer>
    );
};

export async function getStaticProps() {
    return { props: { vets } };
}

export default VeterinarianOverview;
