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
import Group from './documents/Group'
import Kvantum from './documents/Kvantum'

// Objects
import GroupSchedule from './objects/GroupSchedule'
import LessonSchedule from './objects/LessonSchedule'
import Document from './documents/Document'
import RichText from './objects/RichText'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        SiteSettings,

        Icon,
        SocialNetwork,
        Contact,
        StaffPosition,
        Staff,
        Group,
        Document,
        Kvantum,

        GroupSchedule,
        LessonSchedule,
        RichText,
    ]),
})
