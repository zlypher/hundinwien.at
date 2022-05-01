import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import type { GetStaticPathsContext, GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import { CustomContainer } from "../../components/layout/container";
import { SidebarCard } from "../../components/layout/sidebar/sidebard-card";
import { TwoColumnLayout, TwoColumnMain, TwoColumnSide } from "../../components/layout/two-column-layout";
import { IVeterinarian, vets } from "../../resources/vets";

interface IVeterinarianDetailProps {
    data: IVeterinarian;
}

const VeterinarianDetail: NextPage<IVeterinarianDetailProps> = ({ data }) => {
    if (!data) {
        // TODO
        return null;
    }

    return (
        <CustomContainer>
            <TwoColumnLayout>
                <TwoColumnMain>
                    <Heading as="h1">{data.name}</Heading>
                </TwoColumnMain>
                <TwoColumnSide>
                    <SidebarCard headline="Sidebar Card" description="Lorem IPsum" link={{ name: "Weitere Details", url: "/tbd" }} mb="4">
                        tbd
                    </SidebarCard>
                    <SidebarCard headline="Sidebar Card" description="Lorem IPsum" link={{ name: "Weitere Details", url: "/tbd" }} mb="4">
                        tbd
                    </SidebarCard>
                    <SidebarCard headline="Sidebar Card" description="Lorem IPsum" link={{ name: "Weitere Details", url: "/tbd" }}>
                        tbd
                    </SidebarCard>
                </TwoColumnSide>
            </TwoColumnLayout>
        </CustomContainer>
    );
};

export function getStaticProps(context: GetStaticPropsContext<{ slug: string }>): GetStaticPropsResult<IVeterinarianDetailProps> {
    const v = vets.find(vet => vet.slug === context.params?.slug);
    if (!v) {
        return {
            notFound: true,
        };
    }

    return { props: { data: v } };
}

export async function getStaticPaths() {
    return {
        paths: vets.map(v => {
            return {
                params: { slug: v.slug },
            };
        }),
        fallback: true,
    };
}

export default VeterinarianDetail;
