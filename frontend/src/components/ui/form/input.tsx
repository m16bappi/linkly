import React from 'react'
import { EyeIcon, EyeClosed } from 'lucide-react'
import {
  Controller,
  PathValue,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form'

import { Label } from '../label'
import { Button } from '../button'
import { Input, InputProps } from '../input'

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = InputProps & {
  label: string
} & WithRequired<UseControllerProps<TFieldValues, TName>, 'control'>

export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  defaultValue,
  label,
  control,
  type = 'text',
  endIcon,
  ...rest
}: FormInputProps<TFieldValues, TName>) => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ('' as PathValue<TFieldValues, TName>)}
      control={control}
      render={({ field, fieldState }) => (
        <div className='grid gap-2 w-full'>
          <Label className='capitalize ml-5'>{label}</Label>
          <div className='relative'>
            <Input
              type={
                type === 'password'
                  ? showPassword
                    ? 'text'
                    : 'password'
                  : type
              }
              {...rest}
              {...field}
              endIcon={type === 'password' ? undefined : endIcon}
            />

            {type === 'password' && (
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='absolute right-3 top-1/2 transform -translate-y-1/2'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeIcon className='h-4 w-4' aria-hidden='true' />
                ) : (
                  <EyeClosed className='h-4 w-4' aria-hidden='true' />
                )}
                <span className='sr-only'>
                  {showPassword ? 'Hide password' : 'Show password'}
                </span>
              </Button>
            )}
          </div>
          {fieldState.error && (
            <p className='text-destructive text-sm ml-5 mt-1'>
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  )
}
