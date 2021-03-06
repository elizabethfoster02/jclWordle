import { VALIDGUESSES } from './validGuesses'

export function isLatin(answer: string) {
  const latinSet = new Set<string>()

  for (let i = 0; i < VALIDGUESSES.length; i++) {
    latinSet.add(VALIDGUESSES[i].toUpperCase())
  }
  if (!latinSet.has(answer)) {
    return false
  } else {
    return true
  }
}
