import groq from "groq";
import { DOCUMENT_TYPES } from "../../constants.js";
import { newsTagQueryFieldsFragment, NewsTagQueryResult } from "./newsTag.js";
import { imageQueryFieldsFragment, ImageQueryResult } from "../common/image.js";
import { portableTextQueryFieldsFragment, PortableTextQueryResult } from "../common/portableText.js";

export const newsQueryFilterFragment = groq`_type == '${DOCUMENT_TYPES.NEWS}'`

export const newsQueryFieldsFragment = groq`
    _id,
    _type,
    publishDate,
    title,
    'slug': slug.current,
    content[] { ${portableTextQueryFieldsFragment} },
    previewImage {
        ${imageQueryFieldsFragment},
    },
    'gallery': gallery[] {
        ${imageQueryFieldsFragment},
    },
    'tags': tags[] -> {
        ${newsTagQueryFieldsFragment},
    }
`

export type NewsQueryResult = {
    _id: string,
    _type: typeof DOCUMENT_TYPES.NEWS,
    title: string,
    slug: string,
    publishDate: string,
    content: PortableTextQueryResult[],
    previewImage: ImageQueryResult,
    gallery: ImageQueryResult[],
    tags: NewsTagQueryResult[],
}
