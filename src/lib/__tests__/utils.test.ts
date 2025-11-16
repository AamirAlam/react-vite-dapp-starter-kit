import { describe, it, expect } from 'vitest'
import { getCount } from '../utils'

describe('utils', () => {
  describe('getCount', () => {
    it('should increment count', () => {
      const count = getCount(0)
      expect(count).toBe(1)
    })

    it('should return correct type of count', () => {
      const count = getCount(1)
      expect(typeof count).toBe('number')
    })
  })
})
