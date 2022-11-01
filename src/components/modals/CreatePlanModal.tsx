import { Cross } from 'akar-icons'
import { ModalContent, ModalHeader, ModalOverlay } from '../../utils/styles'
import { CreatePlanForm } from '../forms/CreatePlanForm'
import { ModalContainer } from './ModalsContainer'

export const CreatePlanModal = () => {
  return (
    <ModalOverlay>
    <ModalContainer>
      <ModalHeader>
        <div>Create Plan</div>
        <Cross size={16} strokeWidth={4} cursor='pointer' />
      </ModalHeader>
      <ModalContent>
        <CreatePlanForm/>
      </ModalContent>
        </ModalContainer>
    </ModalOverlay>
  )
}
