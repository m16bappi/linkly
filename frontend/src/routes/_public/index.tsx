import { createFileRoute } from '@tanstack/react-router'

import ShortnerInput from '@/components/shortner-input'
import { ShortenTable } from '@/components/shorten-table'

export const Route = createFileRoute('/_public/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='text-center mt-20'>
        <div className='text-7xl font-extrabold'>
          <span className='bg-clip-text text-transparent bg-linear-to-r from-blue-700 via-rose-400 to-blue-700'>
            Shorten Your Loooong Links :)
          </span>
        </div>
        <div className='w-1/2 mx-auto mt-8'>
          <p className='text-muted-foreground text-md mb-10'>
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </p>
          <ShortnerInput />
          <div className='mt-5'>
            <p className='text-muted-foreground'>
              You can create <span className='text-rose-400'>05 </span>shorten
              links in public mode. Register Now to enjoy Unlimited.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <ShortenTable />
      </div>
    </>
  )
}
