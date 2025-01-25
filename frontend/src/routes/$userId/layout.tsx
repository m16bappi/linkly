import { createFileRoute, Outlet } from '@tanstack/react-router'

import Logo from '@/components/logo'
import ShortnerInput from '@/components/shortner-input'
import { ProfileDropdown } from '@/components/profile-dropdown'

export const Route = createFileRoute('/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='container mx-auto flex justify-between items-center px-3 md:px-0 pt-5 gap-3'>
        <Logo />
        <ShortnerInput />
        <ProfileDropdown />
      </div>

      <div className='grow w-full flex flex-col'>
        <Outlet />
      </div>
    </div>
  )
}
