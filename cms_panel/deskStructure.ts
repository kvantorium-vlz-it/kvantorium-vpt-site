import S from '@sanity/base/structure-builder'
import SiteSettings from './schemas/SiteSettings'

import { FaCogs } from 'react-icons/fa'

const staticDocuments = [
    SiteSettings.name,
]

export default () =>
    S.list()
        .title('Кванториум ВПТ')
        .id('KvantoriumVPTContent')
        .items([
            ...S.documentTypeListItems()
                .filter(item => !staticDocuments.includes(item.getId())),
            S.divider(),
            S.listItem()
                .title('Настройки сайта')
                .id('SiteSettingsItem')
                .icon(FaCogs)
                .child(
                    S.document()
                        .schemaType(SiteSettings.name)
                        .documentId(SiteSettings.name)
                        .title('Настройки сайта')
                ),
        ])

