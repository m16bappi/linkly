import { EyeClosed, AtSign } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigator = Route.useNavigate()

  return (
    <div className='max-w-6xl w-full p-14 bg-primary-foreground grid grid-cols-2 gap-2 rounded-sm mt-52 shadow-md self-center'>
      <div className='grid-cols-1'>
        <div className='grid gap-10'>
          <div className='grid gap-2 text-center'>
            <div className='font-extrabold text-3xl'>
              <span className='bg-gradient-to-r from-blue-500 via-rose-400 to-blue-500 text-transparent bg-clip-text'>
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
          <div className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email' className='ml-5'>
                Email
              </Label>
              <Input
                type='email'
                placeholder='Enter your email'
                className='border-[3px] h-14 rounded-full'
                endIcon={AtSign}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password' className='ml-5'>
                Password
              </Label>
              <Input
                type='password'
                placeholder='Enter your password'
                className='border-[3px] h-14 rounded-full'
                endIcon={EyeClosed}
              />
            </div>
            <Link
              to='/login'
              className='underline underline-offset-4 text-right'
            >
              Forgot your password?
            </Link>
            <Button
              size='lg'
              onClick={() =>
                navigator({ to: '/$userId', params: { userId: 'me' } })
              }
            >
              Login
            </Button>
            <div className='text-sm text-muted-foreground'>
              By logging in with an account, you agree to Bitly's{' '}
              <span className='underline underline-offset-2'>
                Terms of Service, Privacy Policy
              </span>{' '}
              and Acceptable{' '}
              <span className='underline underline-offset-2'>User Policy</span>.
            </div>
          </div>
        </div>
      </div>
      <div className='grid-cols-1 bg-red-100'>right</div>
    </div>
  )
}
