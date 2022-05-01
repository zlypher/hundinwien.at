import { IAddress } from "./types";

export interface IDogZone {
    slug: string;
    address?: IAddress;
}

export const zones: IDogZone[] = [
    {
        slug: "test",
    },
];
