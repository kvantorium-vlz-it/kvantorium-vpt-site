import { StructureBuilder } from "sanity/structure";
import { API_VERSION } from "../constants";
import employee from '../schemas/documents/employee'

export default (S: StructureBuilder) => S
    .listItem()
    .id('employees-list-item')
    .title('Сотрудники')
    .icon(employee.icon)
    .child(S
        .list()
        .id('employees-groups-list')
        .title('Сотрудники')
        .items([
            S.listItem()
                .id('all-employees-group')
                .title('Все сотрудники')
                .icon(employee.icon)
                .child(S
                    .documentTypeList(employee.name)
                    .apiVersion(API_VERSION)
                    .id('all-employees-list')
                    .title('Все сотрудники')
                ),

            S.divider(),

            S.listItem()
                .id('teacher-employees-group')
                .title('Педагоги')
                .icon(employee.icon)
                .child(S
                    .documentTypeList(employee.name)
                    .apiVersion(API_VERSION)
                    .id('teacher-employees-list')
                    .title('Педагоги')
                    .filter("isTeacher")
                ),
            S.listItem()
                .id('regular-employees-group')
                .title('Сотрудники')
                .icon(employee.icon)
                .child(S
                    .documentTypeList(employee.name)
                    .apiVersion(API_VERSION)
                    .title('Сотрудники')
                    .id('regular-employees-list')
                    .filter("!isTeacher")
                )
        ])
    )
