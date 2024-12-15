import { StructureBuilder } from "sanity/structure"
import { API_VERSION, CURRICULUM_LEVEL, DOCUMENT_TYPES } from "../constants"
import { upperFirst } from "scule"
import { getCurriculumLevelLabel } from "../schemas/utils"

export default (S: StructureBuilder) => S
    .listItem()
    .title('Учебные программы')
    .id('curricula')
    .child(S
        .list()
        .title('Учебные программы')
        .id('curricula-groups')
        .items([
            S.listItem()
                .title('Все учебные программы')
                .id('all-group')
                .child(S
                    .documentTypeList(DOCUMENT_TYPES.CURRICULUM)
                    .title('Все учебные программы')
                    .id('curricula')
                    .apiVersion(API_VERSION),
                ),

            S.divider(),

            S.listItem()
                .id('kvantum-group')
                .title('По квантумам')
                .child(S
                    .documentTypeList(DOCUMENT_TYPES.KVANTUM)
                    .title('Учебные программы по квантумам')
                    .id('kvantums-list')
                    .apiVersion(API_VERSION)
                    .child((kvantumId) => S
                        .documentTypeList(DOCUMENT_TYPES.CURRICULUM)
                        .title('Учебные программы')
                        .id('curricula')
                        .apiVersion(API_VERSION)
                        .filter('references($id)')
                        .params({ id: kvantumId }),
                    ),
                ),

            S.listItem()
                .id('teacher-group')
                .title('По педагогам')
                .child(S
                    .documentTypeList(DOCUMENT_TYPES.EMPLOYEE)
                    .title("Учебные программы по педагогам")
                    .id('teachers-list')
                    .apiVersion(API_VERSION)
                    .filter('isTeacher')
                    .child((employeeId) => S
                        .documentTypeList(DOCUMENT_TYPES.CURRICULUM)
                        .title('Учебные программы по педагогам')
                        .id('currcula')
                        .apiVersion(API_VERSION)
                        .filter('references($id)')
                        .params({ id: employeeId }),
                    ),
                ),

            S.listItem()
                .id('level-group')
                .title('По уровню обучения')
                .child(S
                    .list()
                    .title('Учебные программы по уровню обучения')
                    .id('levels-list')
                    .items(Object
                        .entries(CURRICULUM_LEVEL)
                        .map(([_, level]) => S
                            .listItem()
                            .title(`${upperFirst(getCurriculumLevelLabel(level))} уровень`)
                            .id(`level-${level}`)
                            .child(S
                                .documentTypeList(DOCUMENT_TYPES.CURRICULUM)
                                .title(`${upperFirst(getCurriculumLevelLabel(level))} уровень`)
                                .id('curricula')
                                .filter(`level == ${level}`)
                                .apiVersion(API_VERSION)
                            ),
                        ),
                    ),
                ),
        ]),
    )
