import { PropsWithChildren } from 'react'
import {
  FieldValues,
  FormProvider,
  UseFormReturn,
  SubmitHandler,
} from 'react-hook-form'

type FormProps<TFieldValues extends FieldValues = FieldValues> = {
  onSubmit?: SubmitHandler<TFieldValues>
  form: UseFormReturn<TFieldValues>
} & React.HTMLAttributes<HTMLFormElement>

const Form = <TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  form,
  ...rest
}: PropsWithChildren<FormProps<TFieldValues>>) => (
  <FormProvider {...form}>
    <form
      onSubmit={onSubmit && form.handleSubmit(onSubmit)}
      noValidate
      {...rest}
    >
      {children}
    </form>
  </FormProvider>
)

export { Form }
