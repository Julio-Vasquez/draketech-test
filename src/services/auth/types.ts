type loginAction = {
  type: string
  payload: {
    email: string
    password: string
  }
}
type loginSuccessType = {
  payload: {
    token: string
    user: string
  }
}
type loginFailedType = {
  payload: { error: string }
}

export type { loginAction, loginSuccessType, loginFailedType }
