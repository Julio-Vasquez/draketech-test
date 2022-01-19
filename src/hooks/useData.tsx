import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

type Props = {
  reducer: string
}

export const useData = ({ reducer }: Props) => {
  const data = useSelector((state: any) => state[reducer])

  return { ...data }
}

useData.propTypes = {
  reducer: PropTypes.string.isRequired,
}
