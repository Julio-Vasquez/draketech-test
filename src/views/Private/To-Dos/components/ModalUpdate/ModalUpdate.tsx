import { Modal, Space } from 'antd'
import { ModalUpdateProps, ModalUpdatePropTypes } from './types'

export const ModalUpdate = ({
  title,
  close,
  ok,
  open,
  visible,
  data,
}: ModalUpdateProps) => {
  return (
    <div>
      <Space>
        <Modal
          centered={true}
          title={title}
          onCancel={close}
          onOk={ok}
          visible={open}
        >
          aqui va el form de actualizacion
        </Modal>
      </Space>
    </div>
  )
}

ModalUpdate.propTypes = ModalUpdatePropTypes
