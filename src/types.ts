export interface INavigationLink {
    name: string;
    url: string;
    children?: INavigationLink[];
}

export interface IHeader {
    headline: string;
    subheadline?: string;
    color?: string; // TODO: Color
}

export interface IBasePageProps {
    header: IHeader;
}
