export interface IProps {
  visible: boolean
  title?: string
  width?: string
  top?: string | number
  showClose?: boolean
}

export interface IEmits {
  (e: 'close'): void
}
