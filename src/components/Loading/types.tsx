import PropTypes, { InferProps } from 'prop-types'

export const LoadingPropTypes = {
  message: PropTypes.string.isRequired,
}

export const DefaultLoadingPropTypes = {
  message: 'Cargando',
}

export type LoadingProps = InferProps<typeof LoadingPropTypes>
