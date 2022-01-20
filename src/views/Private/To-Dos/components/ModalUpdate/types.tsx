import PropTypes, { InferProps } from 'prop-types'

export const ModalUpdatePropTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  ok: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
}

export type ModalUpdateProps = InferProps<typeof ModalUpdatePropTypes>
