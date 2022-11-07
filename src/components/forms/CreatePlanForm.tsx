import { useMutation } from '@tanstack/react-query'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import { createPlanAPI } from '../../utils/api'
import { useToast } from '../../utils/hooks/useToast'
import {
  Button,
  Input,
  InputContainer,
  InputContainerHeader,
  InputLabel
} from '../../utils/styles'
import { CreatePlanFormFields } from '../../utils/types'

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const CreatePlanForm: FC<Props> = ({ setShowModal }) => {
  const toast = useToast({ theme: 'dark' })
  const [startDate, setStartDate] = useState(new Date())
  const { register, handleSubmit } = useForm<CreatePlanFormFields>()
  const mutation = useMutation(createPlanAPI, {
    onSuccess: () => {
      setShowModal(false)
      toast.succes('Created Plan!')
    },
    onError: () => {},
  })

  const onSubmit = async (data: CreatePlanFormFields) => {
    const date = startDate.toLocaleDateString()
    try {
      await mutation.mutateAsync({ ...data, date })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <InputContainer>
          <InputContainerHeader>
            <InputLabel>Title</InputLabel>
          </InputContainerHeader>
          <Input
            {...register('title', {
              required: 'Required',
              min: {
                value: 10,
                message: 'Must be at least 10 characters',
              },
              max: {
                value: 100,
                message: 'Must be less than 100 characters',
              },
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputContainerHeader>
            <InputLabel>Description</InputLabel>
          </InputContainerHeader>
          <Input
            {...register('description', {
              required: 'Required',
              min: {
                value: 10,
                message: 'Must be at least 10 characters',
              },
              max: {
                value: 200,
                message: 'Must be less than 200 characters',
              },
            })}
          />
        </InputContainer>
        <Button>Create Plan</Button>
      </form>
    </>
  )
}
