export type EndPoint = keyof typeof EP

export const EP = {
  test: () => '/test',
  testArg: (id: number) => `/test/${id}`,
}
