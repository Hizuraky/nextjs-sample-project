import zod from 'zod'

const message = {
  required: '必須項目です',
}

export const schema = zod.object({
  email: zod.string().min(1, message.required),
  password: zod.string().min(1, message.required),
  role: zod.string().min(1, message.required),
})
