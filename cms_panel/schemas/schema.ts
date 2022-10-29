import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singleton documents
import SiteSettings from './SiteSettings'

// Documents
import Icon from './documents/Icon'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        SiteSettings,
        Icon,
    ]),
})
