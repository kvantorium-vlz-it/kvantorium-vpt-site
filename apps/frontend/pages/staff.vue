<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStaffStore, IStaff } from '@/store/Staff'

const store = storeToRefs(useStaffStore())

const staffPositionMap = computed<Map<string, IStaff[]>>(() => {
    const _map = new Map<string, IStaff[]>()

    store.staff.value.forEach(staff => {
        if (_map.has(staff.position)) {
            _map.set(staff.position, [..._map.get(staff.position)!, staff])
        } else {
            _map.set(staff.position, [staff])
        }
    })

    return _map
})
</script>

<template>
    <PageSection>
        <PageSectionDefaultLayout>
            <template #heading>
                Сотрудники
            </template>

            <div v-for="([position, staff]) in staffPositionMap">
                <h2>
                    {{ position }}:
                </h2>
                <ul>
                    <li v-for="s in staff">
                        {{ s.secondName }} {{ s.firstName }} {{ s.middleName }}
                    </li>
                </ul>
            </div>

        </PageSectionDefaultLayout>
    </PageSection>
</template>
