/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { HomeOutlined, GithubOutlined, HeartOutlined, PictureOutlined, CoffeeOutlined, LockOutlined, UserOutlined, MessageOutlined, AppstoreOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { MenuList } from '@/types'
import styles from '@/layout/Navbar/index.module.scss'
const { SubMenu } = Menu
const menuList = [
  {
    title: '导航',
    list: [
      {
        label: '首页',
        icon: <HomeOutlined />,
        path: '/',
      },
      {
        label: '仓库',
        icon: <GithubOutlined />,
        path: '/respositories',
      },
      {
        label: '相册',
        icon: <PictureOutlined />,
        path: '/photo',
      },
      {
        label: '日记',
        icon: <LockOutlined />,
        path: '/diary',
      },
      {
        label: '关于',
        icon: <CoffeeOutlined />,
        children: [
          {
            label: '关于我',
            icon: <UserOutlined />,
            path: '/about',
          },
          {
            label: '留言本',
            icon: <MessageOutlined />,
            path: '/about/message',
          },
        ],
      },
    ],
  },
  {
    title: '组成',
    list: [
      {
        label: '分类',
        icon: <AppstoreOutlined />,
        children: [
          {
            label: '设计作品',
            path: '/projects',
          },
          {
            label: '技巧杂烩',
            path: '/skill',
          },
          {
            label: '生活随笔',
            path: '/lifeEssay',
          },
          {
            label: '兴趣爱好',
            path: '/hobby'
          },
        ],
      },
    ],
  },
]

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState(['首页'])
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const navigate = useNavigate()
  const renderMenuList = (menuList: MenuList[]) => {
    return menuList.map((item, index) => {
      return item.children ? (
        <SubMenu key={item.label} icon={item.icon} title={item.label}>
          {item.children.map((subItem) => (
            <Menu.Item key={subItem.path} icon={subItem.icon}>
              {subItem.label}
            </Menu.Item>
          ))}
        </SubMenu>
      ) : (
        <Menu.Item key={item.path} icon={item.icon}>
          {item.label}
        </Menu.Item>
      )
    })
  }

  const onClickMenu = ({ key }: { key: string }) => {
    navigate(key)
    setSelectedKeys([key])
  }
  return (
    <div style={{ width: '100%' }}>
      {menuList.map((menu) => {
        return (
          <span key={menu.title}>
            <div className={styles.label}>
              <span>{menu.title}</span>
            </div>
            <Menu selectedKeys={selectedKeys} mode="inline" theme="dark" inlineCollapsed={collapsed} onClick={onClickMenu}>
              {renderMenuList(menu.list)}
            </Menu>
          </span>
        )
      })}
    </div>
  )
}
export default Navbar
