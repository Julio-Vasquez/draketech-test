import PropTypes, { InferProps } from 'prop-types'

export const MetaDescriptionPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export type MetaDescriptionProps = InferProps<typeof MetaDescriptionPropTypes>
