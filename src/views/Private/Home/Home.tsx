import { useData } from '../../../hooks/useData'
import { AUTH_KEY } from './../../../services/auth/authSlice'
import { MetaDescription } from './../../../components/MetaDescription'

import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  const { user } = useData({ reducer: AUTH_KEY })
  return (
    <div className={styles.content_body}>
      <MetaDescription
        title={`Hey - ${user}`}
        description="Pagina de inicio"
        keywords={['Inicio', 'home', 'welcome']}
      />
      <div className={`${styles.content_body_text} text-center`}>
        Bienvenido {user} usuario, espereramos este bien.
        <Link to="/todos">list</Link>
      </div>
    </div>
  )
}

export default Home
