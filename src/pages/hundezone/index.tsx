import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { IDogZone, zones } from "../../resources/zones";
import { CustomContainer } from "../../components/layout/container";

interface IDogZoneOverviewProps {
    vets: IDogZone[];
}

const DogZoneOverview: NextPage<IDogZoneOverviewProps> = ({ vets }) => {
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

export async function getStaticProps() {
    return { props: { zones } };
}

export default DogZoneOverview;
