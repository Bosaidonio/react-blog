export interface MenuList {
  label: string
  icon?: JSX.Element
  children?: MenuList[]
  path?: string
}
