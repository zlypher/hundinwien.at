import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import type { GetStaticPropsResult, NextPage } from "next";
import { IDogZone, zones } from "../../resources/zones";
import { CustomContainer } from "../../components/layout/container";
import { IBasePageProps } from "../../types";

interface IDogZoneOverviewProps extends IBasePageProps {
    zones: IDogZone[];
}

const DogZoneOverview: NextPage<IDogZoneOverviewProps> = ({ zones }) => {
    return (
        <CustomContainer>
            <Heading as="h1">Hunde Zonen</Heading>
            <List>
                {zones.map((v: IDogZone) => (
                    <ListItem key={v.slug}>{v.slug}</ListItem>
                ))}
            </List>
        </CustomContainer>
    );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<IDogZoneOverviewProps>> {
    return {
        props: {
            zones,
            header: {
                headline: "Hundezonen in Wien",
                color: "purple.100",
            },
        },
    };
}

export default DogZoneOverview;
