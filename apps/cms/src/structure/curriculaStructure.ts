import { StructureBuilder } from "sanity/structure";
import curriculum from "../schemas/documents/curriculum";
import kvantum from "../schemas/documents/kvantum";
import employee from "../schemas/documents/employee";

import { CURRICULUM_LEVEL } from 'shared/enums'
import { capitalizeFirstLetter, getCurriculumLevelLabel } from "shared/utils";

export default (S: StructureBuilder) => S
    .listItem()
    .id('curricula-list-item')
    .title('Учебные программы')
    .child(S
        .list()
        .id('curricula-groups-list')
        .title('Учебные программы')
        .items([
            S.listItem()
                .id('all-curricula-group')
                .title('Все учебные программы')
                .child(S
                    .documentTypeList(curriculum.name)
                    .apiVersion("")
                    .id('all-curricula-list')
                    .title('Все учебные программы')
                ),

            S.divider(),

            S.listItem()
                .id('kvantums-curricula-group')
                .title('По квантумам')
                .child(S
                    .documentTypeList(kvantum.name)
                    .apiVersion("")
                    .id('kvantums-list')
                    .title('Учебные программы по квантумам')
                    .child((kvantumId) => S
                        .documentTypeList(curriculum.name)
                        .apiVersion("")
                        .id('kvantum-curricula-list')
                        .filter('references($id)')
                        .params({ id: kvantumId })
                        .title('Учебные программы')
                    )
                ),

            S.listItem()
                .id('teachers-curricula-group')
                .title('По педагогам')
                .child(S
                    .documentTypeList(employee.name)
                    .apiVersion("")
                    .filter('isTeacher')
                    .id('teachers-list')
                    .title("Учебные программы по педагогам")
                    .child((employeeId) => S.
                        documentTypeList(curriculum.name)
                        .apiVersion("")
                        .id('teacher-curricula-list')
                        .filter('references($id)')
                        .params({ id: employeeId })
                        .title('Учебные программы по педагогам')
                    )
                ),

            S.listItem()
                .id('levels-curricula-group')
                .title('По уровню обучения')
                .child(S
                    .list()
                    .id('levels-list')
                    .title('Учебные программы по уровню обучения')
                    .items(Object
                        .entries(CURRICULUM_LEVEL)
                        .map(([_, level]) => S
                            .listItem()
                            .id(`level-${level}-curricula-list`)
                            .title(`${capitalizeFirstLetter(getCurriculumLevelLabel(level))} уровень`)
                            .child(S
                                .documentTypeList(curriculum.name)
                                .apiVersion("")
                                .id('a1')
                                .filter(`level == ${level}`)
                                .title(`${capitalizeFirstLetter(getCurriculumLevelLabel(level))} уровень`)
                            )
                        )
                    )
                ),
        ])
    )
