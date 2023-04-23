/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-22 21:05:16
 * @Description: Do not edit
 */

import BlogHeader from '@/components/BlogHeader'
import cards from '@/views/Diary/card'
import styles from '@/views/Diary/index.module.scss'
import { useState } from 'react'
import { animated, useSprings } from 'react-spring'
const Diary = () => {
  const headerData = {
    title: '日记',
    desc: '记录日常 ~',
    isCenter: true,
    customStyle: {
      fontSize: '24px',
    },
  }
  const [index, setIndex] = useState<number>()
  const [isDelayed, setIsDelayed] = useState(true)

  const springs = useSprings(
    cards.length,
    cards.map((item: any, i: any) => ({
      delay: isDelayed ? 250 * i : 0,
      opacity: 1,
      transform: 'translateY(0px)',
      overlayOpacity: i === index ? 0 : 1,
      textOpacity: i === index ? 1 : 0,
      textHeight: i === index ? '100%' : '0%',
      from: {
        opacity: 0,
        transform: 'translateY(100px)',
        overlayOpacity: 1,
        textOpacity: 0,
        textHeight: '0%',
      },
    }))
  )
  return (
    <div className={styles.diary}>
      <BlogHeader {...headerData} />
      <div className={`warrper-md ${styles.panel}`}>
        <div className={styles.grid}>
          {springs.map(({ opacity, transform, overlayOpacity, textOpacity, textHeight }, i) => (
            <animated.div
              onMouseEnter={() => {
                setIndex(i)
                setIsDelayed(false)
              }}
              className={styles['grid-item']}
              key={i}
            >
              <animated.div className={styles['grid-item']} style={{ opacity, transform, background: `url(${cards[i].url}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)` }}>
                <animated.div className={styles['title-warrper']} style={{ opacity: overlayOpacity }}>
                  {cards[i].title}
                </animated.div>
              </animated.div>
              <animated.div className={styles['text-warrper']} style={{ height: textHeight }}>
                <animated.div className={styles['box']} style={{ opacity: textOpacity }}>
                  <animated.div className={styles.title}>{cards[i].title}</animated.div>
                  <animated.div className={styles.text}>{cards[i].text}</animated.div>
                </animated.div>
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Diary
