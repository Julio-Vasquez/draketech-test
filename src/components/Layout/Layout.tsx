import { ReactNode } from 'react'
import { Layout, Menu, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { logout } from '../../services/auth/authSlice'

export const LayoutPrivate = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch()

  const handleClickLogout = () => dispatch(logout())
  return (
    <Layout>
      <Layout.Header>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key={0}>
            <Link to="/home">Inicio</Link>
          </Menu.Item>
          <Menu.Item key={1}>
            <Link to="/todos">Tareas</Link>
          </Menu.Item>
          <Menu.Item key={2} style={{ marginLeft: '90%' }}>
            <Tooltip title="Cerrar sesión">
              <LogoutOutlined className="photo" onClick={handleClickLogout} />
            </Tooltip>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}
