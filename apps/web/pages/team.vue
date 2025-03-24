<script setup lang="ts">
import { employeeFragmentFactory } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { Employee } from '~/assets/typescript/types';

const employeesQueryBuilder = q
    .star
    .filterByType(DOCUMENT_TYPES.EMPLOYEE)
    .project(employeeFragmentFactory(q))
    .order('surname asc')

const { data: employees } = await useSanityQuery<Employee[]>(employeesQueryBuilder.query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Наша команда
            </SectionHeading>

            <ul class="grid grid-cols-3 gap-2">
                <li v-for="employee in employees">
                    <EmployeeCard :employee class="h-full" />
                </li>
            </ul>
        </SectionContainer>
    </Section>
</template>
