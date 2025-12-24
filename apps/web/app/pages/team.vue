<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { employeeProjection, q, type EmployeeProjection } from '#shared/sanity';

const employeesQueryBuilder = q
    .star
    .filterByType(DOCUMENT_TYPES.EMPLOYEE)
    .project(employeeProjection)
    .order('surname asc')

const { data: employees } = await useSanityQuery<Array<EmployeeProjection>>(employeesQueryBuilder.query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Наша команда
            </SectionHeading>

            <ul class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2">
                <li v-for="employee in employees">
                    <EmployeeCard :employee class="h-full" />
                </li>
            </ul>
        </SectionContainer>
    </Section>
</template>
