import { z } from 'zod'
import { createFileRoute, Link } from '@tanstack/react-router'
import { AtSign, IdCard, PackagePlus } from 'lucide-react'

import { Form, FormInput } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import useZodForm from '@/hooks/use-form'

export const Route = createFileRoute('/_public/register')({
  component: RouteComponent,
})

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, '6 characters required'),
  confirmPassword: z.string().min(6, '6 characters required'),
})

function RouteComponent() {
  const form = useZodForm({ schema })
  const navigator = Route.useNavigate()

  return (
    <div className='max-w-6xl w-full bg-primary-foreground grid grid-cols-2 gap-2 rounded-sm mt-50 shadow-md self-center'>
      <div className='grid-cols-1 px-12 py-20'>
        <div className='grid gap-10'>
          <div className='grid gap-2 text-center'>
            <div className='font-extrabold text-3xl'>
              <span className='bg-linear-to-r from-blue-500 via-rose-400 to-blue-500 text-transparent bg-clip-text'>
                Register for go boundless!
              </span>
            </div>
            <p>
              Have a account?
              <Link to='/login' className='ml-2 underline underline-offset-4'>
                Login
              </Link>
            </p>
          </div>
          <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-muted-foreground'>
            <span className='relative z-10 bg-primary-foreground px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
          <Form
            onSubmit={() =>
              navigator({ to: '/$userId', params: { userId: 'me' } })
            }
            form={form}
          >
            <div className='grid gap-6'>
              <FormInput
                control={form.control}
                name='name'
                label='Name'
                placeholder='John Doe'
                endIcon={IdCard}
              />
              <FormInput
                control={form.control}
                name='email'
                label='Email'
                placeholder='example@email.com'
                endIcon={AtSign}
                type='email'
              />
              <div className='grid grid-cols-2 gap-2 place-items-start'>
                <FormInput
                  control={form.control}
                  label='Passaword'
                  name='password'
                  type='password'
                  placeholder='Password'
                />
                <FormInput
                  control={form.control}
                  label='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  placeholder='Enter your password'
                />
              </div>
              <Button size='lg' type='submit'>
                Register Now <PackagePlus />
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className='grid-cols-1'>
        <img src='/login-right.png' className='h-full w-full' />
      </div>
    </div>
  )
}
