/*
 * @Date: 2023-04-24 22:19:07
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 12:46:07
 * @Description: Do not edit
 */
export const fonts = {}
export const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '24px',
}
export const spaces = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '64px',
}
interface MediaQueryMap {
  [key: string]: string
}
export const breakpoints: MediaQueryMap = {
  xs: '480px',
  sm: '768px',
  md: '991px',
  lg: '1200px',
}
type MediaQueryBreakpoints = 'xs' | 'sm' | 'md' | 'lg'

export const mediaQueries = (critical: 'min' | 'max' = 'min'): Record<MediaQueryBreakpoints, string> => {
  return {
    xs: `@media (${critical}-width: ${breakpoints.xs})`,
    sm: `@media (${critical}-width: ${breakpoints.sm})`,
    md: `@media (${critical}-width: ${breakpoints.md})`,
    lg: `@media (${critical}-width: ${breakpoints.lg})`,
  }
}
export const boxShadow = {
  primary: '0 1px 4px 1px rgb(0 0 0 / 5%)',
  panel: '0 1px 1px rgb(0 0 0 / 5%)',
}
