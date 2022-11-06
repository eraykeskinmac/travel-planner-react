import { Cross } from 'akar-icons'
import { motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction } from 'react'
import { ModalContent, ModalHeader, ModalOverlay } from '../../utils/styles'
import { CreatePlanForm } from '../forms/CreatePlanForm'
import { ModalContainer } from './ModalsContainer'

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const CreatePlanModal: FC<Props> = ({ setShowModal }) => {
  return (
    <ModalOverlay>
      <motion.div initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1}} transition={{duration: 0.5}}>
      <ModalContainer>
        <ModalHeader>
          <div>Create Plan</div>
          <Cross
            size={16}
            strokeWidth={4}
            cursor="pointer"
            onClick={() => setShowModal(false)}
          />
        </ModalHeader>
        <ModalContent>
          <CreatePlanForm />
        </ModalContent>
      </ModalContainer>
      </motion.div>
    </ModalOverlay>
  )
}
