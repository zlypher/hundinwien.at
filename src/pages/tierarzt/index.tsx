import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import type { GetStaticPropsResult, NextPage } from "next";
import { IVeterinarian, vets } from "../../resources/vets";
import NextLink from "next/link";
import { CustomContainer } from "../../components/layout/container";
import { IBasePageProps } from "../../types";

interface IVeterinarianOverviewProps extends IBasePageProps {
    vets: IVeterinarian[];
}

const VeterinarianOverview: NextPage<IVeterinarianOverviewProps> = ({ vets }) => {
    return (
        <CustomContainer>
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

export async function getStaticProps(): Promise<GetStaticPropsResult<IVeterinarianOverviewProps>> {
    return {
        props: {
            vets,
            header: {
                headline: "Tierärzte in Wien",
                color: "teal.100",
            },
        },
    };
}

export default VeterinarianOverview;
