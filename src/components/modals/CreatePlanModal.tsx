import { Cross } from 'akar-icons'
import { motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction } from 'react'
import { ModalContent, ModalHeader, ModalOverlay } from '../../utils/styles'
import { CreatePlanForm } from '../forms/CreatePlanForm'
import { ModalContainer } from './ModalsContainer'

type Props = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const CreatePlanModal: FC<Props> = ({ showModal, setShowModal }) => {
  return (
    <ModalOverlay>
        {showModal && (
          <motion.div initial={{opacity: 0, scale: 0.3}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.5}} exit={{ opacity:0 , scale: 0}}>
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
        )}
    </ModalOverlay>
  )
}
