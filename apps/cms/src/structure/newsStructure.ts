import { StructureBuilder } from "sanity/structure";
import news from "../schemas/documents/news";

export default (S: StructureBuilder) => S
    .listItem()
    .id('news-list-item')
    .title('Новости')
    .child(S
        .documentTypeList(news.name)
        .id('all-news')
        .title('Новости')
    )
