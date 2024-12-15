import { StructureBuilder } from "sanity/structure";
import news from "../schemas/documents/news";
import { DOCUMENT_TYPES } from "../constants";

export default (S: StructureBuilder) => S
    .listItem()
    .title('Новости')
    .id('news')
    .child(S
        .documentTypeList(DOCUMENT_TYPES.NEWS)
        .title('Новости')
        .id('all')
    )
