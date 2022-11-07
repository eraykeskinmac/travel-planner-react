export type RegisterUserParams = {
  username: string
  password: string
}

export type LoginUserParams = {
  username: string
  password: string
}

export type User = {
  id: number
  username: string
}

export type Plan = {
  id: number
  date: string
  title: string
  description: string
  users: User[]
}

export type CreatePlanParams = {
  title: string
  description: string
  date:string
}

export type CreatePlanFormFields = {
  title: string
  description: string
}