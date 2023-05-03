import { toTree } from '@/utils'

describe('toTree function', () => {
  it('should return an empty array when input is empty', () => {
    const input: any = []
    const result = toTree(input)
    expect(result).toEqual([])
  })

  it('should return a tree with correct structure', () => {
    const input = [{ hLevel: 1 }, { hLevel: 2 }, { hLevel: 3 }, { hLevel: 2 }, { hLevel: 1 }, { hLevel: 2 }]

    const expectedResult: any = [
      {
        hLevel: 1,
        level: 1,
        children: [
          {
            hLevel: 2,
            level: 2,
            children: [
              {
                hLevel: 3,
                level: 3,
              },
            ],
          },
          {
            hLevel: 2,
            level: 2,
          },
        ],
      },
      {
        hLevel: 1,
        level: 1,
        children: [
          {
            hLevel: 2,
            level: 2,
          },
        ],
      },
    ]

    const result = toTree(input)
    expect(result).toEqual(expectedResult)
  })

  it('should ignore items with hLevel less than or equal to 0', () => {
    const input = [{ hLevel: 1 }, { hLevel: -1 }, { hLevel: 2 }, { hLevel: 0 }, { hLevel: 1 }]

    const expectedResult = [
      {
        hLevel: 1,
        level: 1,
        children: [
          {
            hLevel: 2,
            level: 2,
          },
        ],
      },
      {
        hLevel: 1,
        level: 1,
      },
    ]

    const result = toTree(input)
    expect(result).toEqual(expectedResult)
  })
})
