import { CirclePlus } from 'akar-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { CreatePlanContainer, PlansActionBarContainer } from '../utils/styles'
import { CreatePlanModal } from './modals/CreatePlanModal'

export const PlansActionBar = () => {
  const [showCreatePlanModal, setShowCreatePlanModal] = useState(false)
  return (
    <>
      <PlansActionBarContainer>
        <CreatePlanContainer onClick={() => setShowCreatePlanModal(true)}>
          <CirclePlus />
          <div>Create Plan</div>
        </CreatePlanContainer>
      </PlansActionBarContainer>
      <AnimatePresence>
        {showCreatePlanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CreatePlanModal showModal={showCreatePlanModal} setShowModal={setShowCreatePlanModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
