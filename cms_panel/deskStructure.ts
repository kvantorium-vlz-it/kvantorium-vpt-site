import S from '@sanity/base/structure-builder'
import { FaCogs, FaFolder } from 'react-icons/fa'

import SiteSettings from './schemas/static/SiteSettings'

import Icon from './schemas/documents/Icon'
import IndexPage from './schemas/static/IndexPage'

const staticDocuments = [
    SiteSettings.name,
    IndexPage.name,
]

const excludedDocuments = [
    ...staticDocuments,
    Icon.name,
]

export default () =>
    S.list()
        .title('Кванториум ВПТ')
        .id('KvantoriumVPTContent')
        .items([
            ...S.documentTypeListItems()
                .filter(item => !excludedDocuments.includes(item.getId())),
            S.divider(),
            S.documentTypeListItems()
                .find(item => item.getId() === Icon.name)
                .icon(FaFolder)
                .title('Иконки'),
            S.listItem()
                .title('Главная страница')
                .id(`${IndexPage.name}Item`)
                .icon(FaCogs)
                .child(
                    S.document()
                        .schemaType(IndexPage.name)
                        .documentId(IndexPage.name)
                        .title('Главная страница')
                ),
            S.listItem()
                .title('Настройки сайта')
                .id(`${SiteSettings.name}Item`)
                .icon(FaCogs)
                .child(
                    S.document()
                        .schemaType(SiteSettings.name)
                        .documentId(SiteSettings.name)
                        .title('Настройки сайта')
                ),
        ])

