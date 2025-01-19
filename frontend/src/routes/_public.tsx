import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { LogInIcon } from 'lucide-react'

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-3 md:px-0 pt-5'>
      <div className='flex justify-between items-center'>
        <Logo />
        <div className='flex flex-row items-center gap-2'>
          <Button variant='outline' className='bg-background' size='lg' asChild>
            <Link to='/login'>
              Login <LogInIcon />
            </Link>
          </Button>
          <Button>Register Now</Button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
