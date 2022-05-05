export interface ILinkResourceCategory {
    name: string;
    links: ILinkResource[];
}

export interface ILinkResource {
    name: string;
    url: string;
}

export const links: ILinkResourceCategory[] = [
    {
        name: "Rechtliches",
        links: [
            { name: "Wiener Tierhaltegesetz", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=LrW&Gesetzesnummer=20000404" },
            { name: "Tierschutzgesetz", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20003541" },
        ],
    },
    {
        name: "Online Shops (Österreich)",
        links: [{ name: "Puffpaws", url: "https://puffpaws.at/" }],
    },
    {
        name: "Online Shops (International)",
        links: [],
    },
    {
        name: "Sonstiges",
        links: [
            {
                name: "Österreichischer Kynologenverband",
                url: "https://www.oekv.at/de/",
            },
            {
                name: "Tierschutzhund.info",
                url: "https://www.tierschutzhund.info/",
            },
        ],
    },
];
