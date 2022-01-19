import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export const useData = ({ reducer }: { reducer: string }) => {
  const data = useSelector((state: any) => state[reducer])

  return { ...data }
}

useData.propTypes = {
  reducer: PropTypes.string.isRequired,
}
