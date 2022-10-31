import S from '@sanity/base/structure-builder'
import { FaCogs, FaFile, FaFolder, FaPhoneAlt, FaVk } from 'react-icons/fa'

import SiteSettings from './schemas/static/SiteSettings'
import KvantumsPage from './schemas/static/KvantumsPage'
import AboutPage from './schemas/static/AboutPage'

import Icon from './schemas/documents/Icon'
import IndexPage from './schemas/static/IndexPage'
import StaffPosition from './schemas/documents/StaffPosition'
import Document from './schemas/documents/Document'
import Contact from './schemas/documents/Contact'
import SocialNetwork from './schemas/documents/SocialNetwork'
import Tag from './schemas/documents/Tag'

const staticDocuments = [
    SiteSettings.name,
    IndexPage.name,
    KvantumsPage.name,
    AboutPage.name,
]

const excludedDocuments = [
    ...staticDocuments,
    Icon.name,
    StaffPosition.name,
    Document.name,
    Contact.name,
    SocialNetwork.name,
    Tag.name,
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
                .find(item => item.getId() === Document.name)
                .icon(FaFile)
                .title('Документы'),
            S.documentTypeListItems()
                .find(item => item.getId() === Contact.name)
                .icon(FaPhoneAlt)
                .title('Контакты'),
            S.documentTypeListItems()
                .find(item => item.getId() === SocialNetwork.name)
                .icon(FaVk)
                .title('Социальные сети'),
            S.documentTypeListItems()
                .find(item => item.getId() === Tag.name)
                .icon(FaFile)
                .title('Теги'),
            S.divider(),
            S.documentTypeListItems()
                .find(item => item.getId() === StaffPosition.name)
                .icon(FaFolder)
                .title('Должности'),
            S.documentTypeListItems()
                .find(item => item.getId() === Icon.name)
                .icon(FaFolder)
                .title('Иконки'),
            S.divider(),
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
            S.listItem()
                .title('Главная страница')
                .id(IndexPage.staticPageItemId)
                .icon(FaCogs)
                .child(
                    S.document()
                        .schemaType(IndexPage.name)
                        .documentId(IndexPage.name)
                        .title('Главная страница')
                ),
            S.listItem()
                .title('Страница о квантумах')
                .id(KvantumsPage.staticPageItemId)
                .icon(FaCogs)
                .child(
                    S.document()
                        .schemaType(KvantumsPage.name)
                        .documentId(KvantumsPage.name)
                        .title('Страница о квантумах')
                ),
            S.listItem()
                .title('Страница "о нас"')
                .id(AboutPage.staticPageItemId)
                .icon(FaCogs)
                .child(
                    S.document()
                        .schemaType(AboutPage.name)
                        .documentId(AboutPage.name)
                        .title('Страница "о нас"')
                ),
        ])

