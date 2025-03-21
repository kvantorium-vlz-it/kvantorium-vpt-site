import { StructureBuilder } from "sanity/structure";
import { TagIcon } from '@sanity/icons'
import { API_VERSION } from "../constants";
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared";

export default (S: StructureBuilder) => S
    .listItem()
    .title('Теги')
    .icon(TagIcon)
    .id('tags')
    .child(S
        .list()
        .title('Теги')
        .id('tags-groups')
        .items([
            S.listItem()
                .title('Медиа-теги')
                .icon(TagIcon)
                .id('media-group')
                .child(S
                    .documentTypeList('media.tag')
                    .id('tags')
                    .apiVersion(API_VERSION)
                    .title('Медиа теги')
                ),

            S.divider(),

            S.listItem()
                .title('Новостные теги')
                .icon(TagIcon)
                .id('news-group')
                .child(S
                    .documentTypeList(DOCUMENT_TYPES.NEWS_TAG)
                    .title('Новостные теги')
                    .id('tags')
                    .apiVersion(API_VERSION)
                )
        ])
    )
