import { ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FieldValues,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'

export type ZodFormProps<TData extends FieldValues = FieldValues> = {
  schema: ZodSchema<TData>
} & UseFormProps<TData>

const useZodForm = <TFieldValues extends FieldValues = FieldValues>({
  schema,
  mode = 'onChange',
  ...rest
}: ZodFormProps<TFieldValues>): UseFormReturn<TFieldValues> => {
  const form = useForm({
    mode,
    resolver: zodResolver(schema),
    ...rest,
  })

  return form
}

export default useZodForm
