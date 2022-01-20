export type basicTask = {
  id: string
  description: string
  title: string
  createAt: string
  user: string
}

export type addTask = {
  task: basicTask
}

export type updateTask = {
  task: basicTask
}

export type deleteTask = Pick<basicTask, 'id'>
