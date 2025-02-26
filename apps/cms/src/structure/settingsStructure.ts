import { StructureBuilder } from "sanity/structure";
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared";

export default (S: StructureBuilder) => S
    .listItem()
    .title('Настройки')
    .id('settings')
    .child(
        S.document()
            .schemaType(DOCUMENT_TYPES.SETTINGS)
            .documentId('settings'),
    )
