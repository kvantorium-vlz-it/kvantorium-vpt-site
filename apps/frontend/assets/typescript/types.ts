export interface NavigationLink {
    label: string
    to?: string
}

export interface HeaderNavigationDropdownItemProps extends NavigationLink {}

export interface HeaderNavigationDropdownGroupProps {
    label: string
    items: Array<NavigationLink>
}

export interface HeaderNavigationItemProps extends NavigationLink {}
