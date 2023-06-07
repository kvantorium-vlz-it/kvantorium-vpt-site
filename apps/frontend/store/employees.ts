import { defineStore } from 'pinia'
import { Employee } from '@types'

export const useEmployeesStore = defineStore('employes', () => {
    const employees = ref<Employee[]>([])

    async function fetchAllEmployees() {
        employees.value = await $fetch('/api/employees')
        return employees
    }

    return {
        fetchAllEmployees,
        employees,
    }
})
