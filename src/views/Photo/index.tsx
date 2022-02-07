import { useState, useCallback } from 'react'
import BlogHeader from '@/components/BlogHeader'
import Gallery from 'react-photo-gallery'
import { PictureOutlined } from '@ant-design/icons'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { data } from '@/views/Photo/assets'
import PhotoItem from '@/views/Photo/components/PhotoItem'
import styles from '@/views/Photo/index.module.scss'
import classNames from 'classnames'
import Breadcrumb from '@/components/Breadcrumb'
const photos = data.map((photo) => {
  return {
    ...photo,
    width: Math.round(photo.width / 200),
    height: Math.round(photo.height / 200),
  }
})

const Photo = () => {
  const [isShowPhoto, setIsShowPhoto] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  // 预览图片
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  // 关闭预览
  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const headerData = {
    title: '相册图片',
    desc: '美好的事情值得纪念呦 ~ ',
    isCenter: true,
    customStyle: {
      fontSize: '24px',
    },
  }
  const handleClick = () => {
    setIsShowPhoto(!isShowPhoto)
  }
  const renderAlbums = () => {
    const albumsList = Array(7).fill('')
    return (
      <>
        {albumsList.map((item, index) => (
          <div className={styles.item} key={index} onClick={handleClick}>
            <figure className={styles['album-thumb']}>
              <span className={classNames(styles['img-wrap'], 'iconfont')}>
                <PictureOutlined className={classNames('iconfont icon-tupian', styles['icon-image'])} />
                <img className="lazy" alt="没想好标题" src="https://www.ihewro.com/usr/uploads/2018/07/3084946582.png" />
              </span>
              <figcaption>没想好标题</figcaption>
            </figure>
          </div>
        ))}
      </>
    )
  }
  return (
    <div className={styles.photo}>
      <BlogHeader {...headerData} />
      <div className="warrper-md">
        {isShowPhoto ? <Breadcrumb goBack={handleClick} /> : null}
        {!isShowPhoto ? (
          <div className={styles.layout}>
            <div className={styles.albums}>{renderAlbums()}</div>
          </div>
        ) : (
          <Gallery photos={photos} renderImage={(props) => <PhotoItem {...props} keyIndex={props.index} onClick={openLightbox} />} />
        )}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  source: x.src,
                  // srcset: x.srcSet,
                  // caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  )
}

export default Photo
