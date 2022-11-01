import { CirclePlus } from 'akar-icons'
import { useState } from 'react'
import { CreatePlanContainer, PlansActionBarContainer } from '../utils/styles'
import { CreatePlanModal } from './modals/CreatePlanModal'

export const PlansActionBar = () => {
  const [showCreatePlanModal, setShowCreatePlanModal] = useState(false)
  return (
    <>
      <PlansActionBarContainer>
        <CreatePlanContainer onClick={()=> setShowCreatePlanModal(true)}>
          <CirclePlus />
          <div>Create Plan</div>
        </CreatePlanContainer>
      </PlansActionBarContainer>
      {showCreatePlanModal && (
        <CreatePlanModal setShowModal={setShowCreatePlanModal} />
      )}
    </>
  )
}
