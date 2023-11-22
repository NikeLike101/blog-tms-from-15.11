

export type SignUpDataType = {
  username: string
  password: string
  email: string
  course_group: number
}

export type ActivationData = {
  uid: string
  token: string
}

export type LoginData = {
  email:string
  password: string
}

export type LoginSuccessReturnType ={
  access:string
  refresh: string
}
export type LoginFailureReturnType ={
  detail: string
}

export type LoginReturnType = LoginSuccessReturnType | LoginFailureReturnType