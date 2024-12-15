import { StructureBuilder } from "sanity/structure"
import employee from '../schemas/documents/employee'
import { API_VERSION, DOCUMENT_TYPES } from "../constants"

export default (S: StructureBuilder) => S
    .listItem()
    .title('Сотрудники')
    .icon(employee.icon)
    .id('employees')
    .child(S
        .list()
        .title('Сотрудники')
        .id('employees-groups')
        .items([
            S.listItem()
                .title('Все сотрудники')
                .icon(employee.icon)
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
                .icon(employee.icon)
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
                .icon(employee.icon)
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
