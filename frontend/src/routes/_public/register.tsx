import { createFileRoute, Link } from '@tanstack/react-router'
import { EyeClosed, AtSign, IdCard, PackagePlus } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_public/register')({
  component: RouteComponent,
})

function RouteComponent() {
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
              Have account?
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
          <div className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='name' className='ml-5'>
                Name
              </Label>
              <Input
                type='name'
                placeholder='Enter your name'
                className='border-[3px] h-14 rounded-full'
                endIcon={IdCard}
              />
            </div>
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
            <div className='grid grid-cols-2 gap-2'>
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
              <div className='grid gap-2'>
                <Label htmlFor='confirm-password' className='ml-5'>
                  Confirm Password
                </Label>
                <Input
                  type='confirm-password'
                  placeholder='Confirm password'
                  className='border-[3px] h-14 rounded-full'
                  endIcon={EyeClosed}
                />
              </div>
            </div>
            <Button
              size='lg'
              onClick={() =>
                navigator({ to: '/$userId', params: { userId: 'me' } })
              }
            >
              Register Now <PackagePlus />
            </Button>
          </div>
        </div>
      </div>
      <div className='grid-cols-1'>
        <img src='/login-right.png' className='h-full w-full' />
      </div>
    </div>
  )
}
