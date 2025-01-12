import { StructureBuilder } from "sanity/structure";
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared";

export default (S: StructureBuilder) => S
    .listItem()
    .title('Новости')
    .id('news')
    .child(S
        .documentTypeList(DOCUMENT_TYPES.NEWS)
        .title('Новости')
        .id('all')
    )
