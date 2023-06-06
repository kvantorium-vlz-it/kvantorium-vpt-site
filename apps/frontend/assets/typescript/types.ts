import { RawEmployee, RawKvantum } from '@kvantorium-vpt-site/sanity-schema'

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

export interface Kvantum {
    id: RawKvantum['_id']
    name: RawKvantum['name']
    isAdditional: RawKvantum['isAdditional']
    description: RawKvantum['description']
    promoImage: string
    icon: string
}

export interface Employee {
    id: RawEmployee['_id']
    firstName: RawEmployee['firstName']
    secondName: RawEmployee['secondName']
    middleName: RawEmployee['middleName']
}
