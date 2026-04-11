import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItems',
      JSON.stringify(['ahef7s9utp83c41ezwfggp45', 'gk60wzt9lvucsx56a73e7cnl'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual([
      'ahef7s9utp83c41ezwfggp45',
      'gk60wzt9lvucsx56a73e7cnl'
    ])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('cartItems', [
      'ahef7s9utp83c41ezwfggp45',
      'gk60wzt9lvucsx56a73e7cnl'
    ])

    expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
      JSON.stringify(['ahef7s9utp83c41ezwfggp45', 'gk60wzt9lvucsx56a73e7cnl'])
    )
  })
})
