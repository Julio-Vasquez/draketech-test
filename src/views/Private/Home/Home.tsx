import { useData } from '../../../hooks/useData'
import { AUTH_KEY } from './../../../services/auth/authSlice'
import { MetaDescription } from './../../../components/MetaDescription'

import styles from './Home.module.scss'

const Home = () => {
  const { user } = useData({ reducer: AUTH_KEY })
  return (
    <div className={styles.content_body}>
      <MetaDescription
        title={`Hey - ${user}`}
        description="Pagina de inicio"
        keywords={['Inicio', 'home', 'welcome']}
      />
      <div className={`${styles.content_body_text}`}>
        <h4>
          WELCOME - <span>{user}</span>
        </h4>
        <p className="col-6 offset-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          voluptatem, quia iusto cum hic ipsam eligendi a nostrum necessitatibus
          libero reiciendis amet ullam tenetur ea perferendis itaque, expedita
          distinctio iste.
        </p>
      </div>
    </div>
  )
}

export default Home
