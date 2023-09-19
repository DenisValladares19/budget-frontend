import { BudgetDTO } from './BudgetDTO'

export interface UserDTO {
    id: number
    name: string
    lastName: string
    email: string
    password: string
    budget: BudgetDTO
    token: string
}
