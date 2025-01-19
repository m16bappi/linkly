import Footer from '@/components/footer'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { LogInIcon } from 'lucide-react'

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto flex flex-col min-h-screen'>
      {/* Header */}
      <div className='flex justify-between items-center px-3 md:px-0 pt-5'>
        <Logo />
        <div className='flex flex-row items-center gap-2'>
          <Button variant='outline' className='bg-background' size='lg' asChild>
            <Link to='/login'>
              Login <LogInIcon />
            </Link>
          </Button>
          <Button asChild>
            <Link to='/register'>Register Now</Link>
          </Button>
        </div>
      </div>

      {/* Middle - Outlet */}
      <div className='flex-grow w-full flex flex-col'>
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
