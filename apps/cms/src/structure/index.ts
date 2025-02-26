import { StructureBuilder } from "sanity/structure";
import employeesStructure from "./employeesStructure";
import kvantumsStructure from "./kvantumsStructure";
import curriculaStructure from "./curriculaStructure";
import newsStructure from "./newsStructure";
import tagsStructure from "./tagsStructure";
import settingsStructure from "./settingsStructure";

export default (S: StructureBuilder) =>
    S
        .list()
        .title('Контент и настройки')
        .id('root')
        .items([
            employeesStructure(S),
            kvantumsStructure(S),
            curriculaStructure(S),
            newsStructure(S),

            S.divider(),

            tagsStructure(S),
            settingsStructure(S),
        ])
