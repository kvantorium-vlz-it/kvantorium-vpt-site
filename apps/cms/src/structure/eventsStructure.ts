import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared";
import { StructureBuilder } from "sanity/structure";
import { API_VERSION } from "../constants";

export default (S: StructureBuilder) => S
    .listItem()
    .title('Мероприятия')
    .id('events')
    .child(S
        .documentTypeList(DOCUMENT_TYPES.EVENTS)
        .title('Мероприятия')
        .id('events')
        .apiVersion(API_VERSION)
    )
