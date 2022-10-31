import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singleton documents
import SiteSettings from './static/SiteSettings'
import KvantumsPage from './static/KvantumsPage'
import AboutPage from './static/AboutPage'

// Documents
import Icon from './documents/Icon'
import SocialNetwork from './documents/SocialNetwork'
import Contact from './documents/Contact'
import StaffPosition from './documents/StaffPosition'
import Staff from './documents/Staff'
import Group from './documents/Group'
import Kvantum from './documents/Kvantum'
import Tag from './documents/Tag'
import News from './documents/News'

// Objects
import GroupSchedule from './objects/GroupSchedule'
import LessonSchedule from './objects/LessonSchedule'
import Document from './documents/Document'
import RichText from './objects/RichText'
import IndexPage from './static/IndexPage'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        SiteSettings,
        IndexPage,
        KvantumsPage,
        AboutPage,

        Icon,
        SocialNetwork,
        Contact,
        StaffPosition,
        Staff,
        Group,
        Document,
        Kvantum,
        Tag,
        News,

        GroupSchedule,
        LessonSchedule,
        RichText,
    ]),
})
