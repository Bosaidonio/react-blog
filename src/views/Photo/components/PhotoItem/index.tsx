import { FC, MouseEventHandler, CSSProperties } from 'react'
import LazyLoad from 'react-lazyload'
import Mount from '@/components/animation/Mount'
// import styles from '@/views/Photo/components/PhotoItem/index.module.scss'
const imgWithClick = { cursor: 'pointer' }

export interface IPhoto {
  src: string
  width: number
  height: number
}
export interface IPhotoItem {
  keyIndex: number
  photo: IPhoto
  margin?: string
  direction: string
  top?: number
  left?: number
  onClick?: (e: any, { photo, index }: { photo: IPhoto; index: number }) => void
}

const PhotoItem: FC<IPhotoItem> = ({ keyIndex, photo, margin, direction, top, left, onClick }) => {
  const imgStyle: CSSProperties = { margin: margin, width: '100%', height: '100%' }
  if (direction === 'column') {
    imgStyle.position = 'absolute'
    imgStyle.left = left
    imgStyle.top = top
  }
  const handleClick: MouseEventHandler = (event) => {
    onClick && onClick(event, { photo, index: keyIndex })
  }

  return (
    <LazyLoad style={{ width: photo.width, height: photo.height, margin }}>
      <Mount customStyle={{ width: '100%', height: '100%' }}>
        <img style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle} {...photo} onClick={handleClick} alt="img" />
      </Mount>
    </LazyLoad>
  )
}

export default PhotoItem
