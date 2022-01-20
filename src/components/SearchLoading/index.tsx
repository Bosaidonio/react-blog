import styles from '@/components/SearchLoading/index.module.scss'
const Loading = () => {
  return (
    <div className={styles['search-loading']}>
      <div className={styles['loadingio-spinner-magnify']}>
        <div className={styles.ldio}>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Loading
