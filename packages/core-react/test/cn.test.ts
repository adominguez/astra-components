import { describe, it, expect } from 'vitest'
import { cn } from '../src/utils/cn'

describe('cn', () => {
  it('combina clases básicas', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('fusiona utilidades de Tailwind', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })
})
