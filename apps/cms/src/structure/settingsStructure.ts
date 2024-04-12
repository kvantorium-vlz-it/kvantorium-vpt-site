import { StructureBuilder } from "sanity/structure";
import { CogIcon } from '@sanity/icons'

export default (S: StructureBuilder) => S
    .listItem()
    .id('settings-list-item')
    .title('Настройки')
    .icon(CogIcon)
    .child(S.document()
        .schemaType('settings')
        .documentId('settings')
        .title('Настройки сайта')
    )
