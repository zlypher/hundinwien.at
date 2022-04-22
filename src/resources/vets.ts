import { IAddress } from "./types";

export interface IVeterinarian {
    slug: string;
    name: string;
    address?: IAddress;
    website?: string;
}

export const vets: IVeterinarian[] = [
    {
        slug: "test",
        name: "Test",
    },
];
