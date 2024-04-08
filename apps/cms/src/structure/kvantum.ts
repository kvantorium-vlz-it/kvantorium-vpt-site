import { StructureBuilder } from "sanity/structure";
import {  } from '@sanity/icons'
import kvantum from "../../schemaTypes/kvantum";
import { API_VERSION } from "../constants";

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
