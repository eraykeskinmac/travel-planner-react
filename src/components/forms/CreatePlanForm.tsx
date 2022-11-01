import { useState } from 'react'
import DatePicker from 'react-datepicker'
import {
  Button,
  Input,
  InputContainer,
  InputContainerHeader,
  InputLabel
} from '../../utils/styles'

export const CreatePlanForm = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <>
      <form className="modal-form">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <InputContainer>
          <InputContainerHeader>
            <InputLabel>Title</InputLabel>
          </InputContainerHeader>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputContainerHeader>
            <InputLabel>Description</InputLabel>
          </InputContainerHeader>
          <Input />
        </InputContainer>
        <Button>Create Plan</Button>
      </form>
    </>
  )
}
