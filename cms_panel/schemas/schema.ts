import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singleton documents
import SiteSettings from './SiteSettings'

// Documents
import Icon from './documents/Icon'
import SocialNetwork from './documents/SocialNetwork'
import Contact from './documents/Contact'
import StaffPosition from './documents/StaffPosition'
import Staff from './documents/Staff'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        SiteSettings,

        Icon,
        SocialNetwork,
        Contact,
        StaffPosition,
        Staff,
    ]),
})
