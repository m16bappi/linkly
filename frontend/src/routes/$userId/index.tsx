import { createFileRoute } from '@tanstack/react-router'
import { ShortenTable } from '@/components/shorten-table'

export const Route = createFileRoute('/$userId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='mt-16 bg-secondary/30 grow'>
      <div className='h-20 bg-background drop-shadow-sm'></div>
      <div className='container mx-auto'>
        <p className='text-muted-foreground text-2xl py-6'>History ({6})</p>
        <ShortenTable />
      </div>
    </div>
  )
}
