import DataTable, { Header } from '@/components/data-table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$userId/')({
  component: RouteComponent,
})

type Row = {
  short_url: string
  original_url: string
  clicks: number
  status: 'active' | 'inactive'
  created_at: string | Date
}

const headers: Header<Row>[] = [
  {
    id: 'short_url',
    name: 'Short Url',
  },
  {
    id: 'original_url',
    name: 'Original Url',
    render: (row) => (
      <div className='flex items-center gap-2'>
        <img
          src={`https://www.google.com/s2/favicons?sz=40&domain=${row.original_url}`}
          className='h-6 w-6'
        />
        <div>{row.original_url}</div>
      </div>
    ),
  },
  {
    id: 'clicks',
    name: 'Clicks',
  },
  {
    id: 'status',
    name: 'Status',
    render: (row) => (
      <div
        className={`${row.status === 'active' ? 'text-green-500' : 'text-yellow-500'}`}
      >
        {row.status}
      </div>
    ),
  },
  {
    id: 'created_at',
    name: 'Date',
  },
]

const rows: Row[] = [
  {
    short_url: 'https://short.ly/abc123',
    original_url: 'https://google.com',
    clicks: 150,
    status: 'active',
    created_at: '2024-01-01T10:00:00',
  },
  {
    short_url: 'https://short.ly/def456',
    original_url: 'https://youtube.com',
    clicks: 75,
    status: 'inactive',
    created_at: '2024-01-15T14:30:00',
  },
  {
    short_url: 'https://short.ly/ghi789',
    original_url: 'https://vimeo.com',
    clicks: 200,
    status: 'active',
    created_at: '2024-02-10T09:15:00',
  },
  {
    short_url: 'https://short.ly/jkl012',
    original_url: 'https://tailwindcss.com',
    clicks: 120,
    status: 'inactive',
    created_at: '2024-03-05T17:45:00',
  },
  {
    short_url: 'https://short.ly/jkldddfd',
    original_url: 'https://app.minebase.io',
    clicks: 120,
    status: 'inactive',
    created_at: '2024-03-05T17:45:00',
  },
  {
    short_url: 'https://short.ly/jksgfg',
    original_url: 'https://interactivecares.com',
    clicks: 120,
    status: 'inactive',
    created_at: '2024-03-05T17:45:00',
  },
]

function RouteComponent() {
  return (
    <div className='mt-16 bg-secondary/30 flex-grow'>
      <div className='h-20 bg-background drop-shadow'></div>
      <div className='container mx-auto'>
        <p className='text-muted-foreground text-2xl py-6'>History ({6})</p>
        <DataTable headers={headers} rows={rows} />
      </div>
    </div>
  )
}
