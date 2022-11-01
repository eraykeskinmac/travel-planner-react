import { CirclePlus } from 'akar-icons'
import { CreatePlanContainer, PlansActionBarContainer } from '../utils/styles'
import { CreatePlanModal } from './modals/CreatePlanModal'

export const PlansActionBar = (props: any) => {
  return (
    <>
      <PlansActionBarContainer>
        <CreatePlanContainer>
          <CirclePlus />
          <div>Create Plan</div>
        </CreatePlanContainer>
      </PlansActionBarContainer>
      <CreatePlanModal/>
    </>
  )
}
