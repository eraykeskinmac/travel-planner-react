import { FC, PropsWithChildren } from "react"
import { ModalContainerStyle } from "../../utils/styles"

export const ModalContainer: FC<PropsWithChildren> = ({children}) => {
  return <ModalContainerStyle>{children}</ModalContainerStyle>
}
