import { StructureBuilder } from "sanity/structure";
import {  } from '@sanity/icons'
import { API_VERSION } from "../constants";
import kvantum from "../schemas/documents/kvantum";

export default (S: StructureBuilder) => S
    .listItem()
    .id('kvantums-list-item')
    .title('Квантумы')
    // TODO: add kvantum icon
    .child(S
        .documentTypeList(kvantum.name)
        .apiVersion(API_VERSION)
        .title("Квантумы")
        .id('all-kvantums-list')
    )
