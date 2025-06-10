import { z } from 'zod'
import { AtSign } from 'lucide-react'
import { createFileRoute, Link } from '@tanstack/react-router'

import useZodForm from '@/hooks/use-form'
import { Button } from '@/components/ui/button'
import { Form, FormInput } from '@/components/ui/form'

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent,
})

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'At least 6 characters long'),
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
                Login and start shortening
              </span>
            </div>
            <p>
              Don't have account?
              <Link
                to='/register'
                className='ml-2 underline underline-offset-4'
              >
                signup
              </Link>
            </p>
          </div>
          <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-muted-foreground'>
            <span className='relative z-10 bg-primary-foreground px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
          <Form
            form={form}
            onSubmit={() =>
              navigator({ to: '/$userId', params: { userId: 'me' } })
            }
            className='grid gap-6'
          >
            <FormInput
              control={form.control}
              name='email'
              label='Email'
              placeholder='example@email.com'
              endIcon={AtSign}
            />
            <FormInput
              control={form.control}
              name='password'
              label='Password'
              placeholder='Enter your password'
              type='password'
            />
            <Link
              to='/login'
              className='underline underline-offset-4 text-right'
            >
              Forgot your password?
            </Link>
            <Button size='lg'>Login</Button>
            <div className='text-xs text-muted-foreground'>
              By logging in with an account, you agree to Bitly's{' '}
              <span className='underline underline-offset-2'>
                Terms of Service, Privacy Policy
              </span>{' '}
              and Acceptable{' '}
              <span className='underline underline-offset-2'>User Policy</span>.
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
