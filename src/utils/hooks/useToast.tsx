import { toast, ToastOptions } from 'react-toastify'

export function useToast(defaultOptions: ToastOptions<{}> = { theme: 'dark' }) {
  const succes = (data: string) =>
    toast(data, { ...defaultOptions, type: 'success' })

  const error = (data: string, options?: ToastOptions<{}>) =>
    toast(data, { ...defaultOptions, type: 'error' })

  const info = (data: string, options?: ToastOptions<{}>) =>
    toast(data, { ...defaultOptions, type: 'info' })
    return {succes, info , error}
}
