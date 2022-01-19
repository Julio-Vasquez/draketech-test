import {
  DefaultLoadingPropTypes,
  LoadingProps,
  LoadingPropTypes,
} from './types'

import styles from './Loading.module.scss'

export const Loading = ({ message }: LoadingProps) => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__content}>
        <div className={`${styles.shape} ${styles.shape_1}`}></div>
        <div className={`${styles.shape} ${styles.shape_2}`}></div>
        <div className={`${styles.shape} ${styles.shape_3}`}></div>
        <div className={`${styles.shape} ${styles.shape_4}`}></div>
      </div>
      <p>{message}...</p>
    </div>
  )
}

Loading.propTypes = LoadingPropTypes

Loading.defaultProps = DefaultLoadingPropTypes
