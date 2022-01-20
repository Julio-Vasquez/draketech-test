import { ReactNode } from 'react'
import { Layout, Menu, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'

export const LayoutPrivate = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <Layout.Header>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item>
            <Link to="/home">Inicio</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/home">Tareas</Link>
          </Menu.Item>
          <Menu.Item style={{ right: 0 }}>
            <Tooltip title="Cerrar sesión">
              <LogoutOutlined className="photo" />
            </Tooltip>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}
