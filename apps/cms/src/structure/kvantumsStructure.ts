import { StructureBuilder } from "sanity/structure"
import kvantum from "../schemas/documents/kvantum"
import { API_VERSION, DOCUMENT_TYPES } from "../constants"

export default (S: StructureBuilder) => S
    .listItem()
    .title('Квантумы')
    .id('kvantums')
    // TODO: add kvantum icon
    .child(S
        .documentTypeList(DOCUMENT_TYPES.KVANTUM)
        .title("Квантумы")
        .apiVersion(API_VERSION)
        .id('all')
    )
