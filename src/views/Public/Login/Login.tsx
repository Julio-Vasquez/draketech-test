import { useDispatch } from 'react-redux'
import { MetaDescription } from './../../../components/MetaDescription'
import { login } from '../../../services/authSlice'

const Login = () => {
  const dispath = useDispatch()
  const handleClick = () => {
    dispath(
      login({ email: 'darkphurion@fakemail.com', password: 'phurion123' })
    )
  }
  return (
    <div>
      <MetaDescription
        title="Login"
        description="Login Page"
        keywords={['login', 'auth']}
      />

      <div>Login</div>
      <div>Form</div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Login
