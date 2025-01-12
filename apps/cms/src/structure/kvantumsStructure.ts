import { StructureBuilder } from "sanity/structure"
import { API_VERSION } from "../constants"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"

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
