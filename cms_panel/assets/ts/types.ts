export interface IGroup {
    name: string;
    title?: string;
    icon?: unknown;
    default?: boolean;
    hidden?: ({currentUser, value, parent}) => boolean;
}

export interface IField {
    name: string;
    type: string;
}

export interface IAdditionalProps {
    [key: string]: unknown;
}
