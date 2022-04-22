export interface INavigationLink {
    name: string;
    url: string;
    children?: INavigationLink[];
}
