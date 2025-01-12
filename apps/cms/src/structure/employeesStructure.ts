import { StructureBuilder } from "sanity/structure"
import { API_VERSION } from "../constants"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"

export default (S: StructureBuilder) => S
    .listItem()
    .title('Сотрудники')
    .id('employees')
    .child(S
        .list()
        .title('Сотрудники')
        .id('employees-groups')
        .items([
            S.listItem()
                .title('Все сотрудники')
                .id('all-group')
                .child(S
                    .documentTypeList(DOCUMENT_TYPES.EMPLOYEE)
                    .title('Все сотрудники')
                    .id('employees')
                    .apiVersion(API_VERSION)
                ),

            S.divider(),

            S.listItem()
                .title('Педагоги')
                .id('teacher-group')
                .child(S
                    .documentTypeList(DOCUMENT_TYPES.EMPLOYEE)
                    .title('Педагоги')
                    .id('employees')
                    .apiVersion(API_VERSION)
                    .filter("isTeacher")
                ),

            S.listItem()
                .title('Сотрудники')
                .id('regular-group')
                .child(S
                    .documentTypeList(DOCUMENT_TYPES.EMPLOYEE)
                    .title('Сотрудники')
                    .id('employees')
                    .apiVersion(API_VERSION)
                    .filter("!isTeacher")
                )
        ])
    )
