import { useAtom, atom } from 'jotai'

const testAtom = atom(0)
export const useTestAtom = () => {
  const [count, setCount] = useAtom(testAtom)
  return { count, setCount }
}
