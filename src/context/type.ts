import { ReactNode, Dispatch } from 'react'

export type contextChildren = {
  children: ReactNode
}

export type taskType = {
  id: string
  title: string
  description: string
  user: string
  createAt: string
}

export type contextData = {
  task: taskType[]
  dispatch: Dispatch<any>
}
