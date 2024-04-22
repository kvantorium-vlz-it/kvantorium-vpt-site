import { StructureBuilder } from "sanity/structure";
import { TagIcon } from '@sanity/icons'
import newsTag from "../schemas/documents/newsTag";

export default (S: StructureBuilder) => S
    .listItem()
    .id('tags-list-item')
    .title('Теги')
    .icon(TagIcon)
    .child(S
        .list()
        .id('tags-groups-list')
        .title('Теги')
        .items([
            S.listItem()
                .id('media-tags-group')
                .title('Медиа-теги')
                .icon(TagIcon)
                .child(S
                    .documentTypeList('media.tag')
                    .id('media-tags-list')
                    .apiVersion("API_VERSION")
                    .title('Медиа теги')
                ),
            S.divider(),
            S.listItem()
                .id('news-tags-group')
                .title('Новостные теги')
                .icon(TagIcon)
                .child(S
                    .documentTypeList(newsTag.name)
                    .id('news-tags-list')
                    .apiVersion("API_VERSION")
                    .title('Новостные теги')
                )
        ])
    )
