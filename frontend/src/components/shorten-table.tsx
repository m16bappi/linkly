import { Copy, Link, Unlink } from 'lucide-react'

import DataTable, { Header } from '@/components/ui/data-table'

export type Row = {
  short_url: string
  original_url: string
  clicks: number
  status: 'active' | 'inactive'
  created_at: string | Date
}

export const rows: Row[] = [
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
    short_url: 'https://short.ly/jklddd',
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

export const headers: Header<Row>[] = [
  {
    id: 'short_url',
    name: 'Short Url',
    render: (row) => (
      <div className='flex items-center gap-2'>
        <p className='w-45'>{row.short_url}</p>
        <div className='p-3 rounded-full bg-current/10 flex items-center justify-center hover:cursor-pointer'>
          <Copy className='h-4 w-4' />
        </div>
      </div>
    ),
  },
  {
    id: 'original_url',
    name: 'Original Url',
    render: (row) => (
      <div className='flex items-center gap-2'>
        <img
          src={`https://www.google.com/s2/favicons?sz=40&domain=${row.original_url}`}
          className='h-6 w-6'
          alt='favicon'
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
    render: (row) => {
      const isActive = row.status === 'active'
      const color = isActive ? 'text-green-400' : 'text-yellow-400'
      const Icon = isActive ? Link : Unlink
      return (
        <div className={`${color} flex items-center gap-2`}>
          <p className='capitalize w-16'>{row.status}</p>
          <div className='p-3 rounded-full bg-current/10 flex items-center justify-center'>
            {<Icon className='h-4 w-4' />}
          </div>
        </div>
      )
    },
  },
  {
    id: 'created_at',
    name: 'Date',
    render: (row) => (
      <div>
        {new Date(row.created_at).toLocaleString('en-US', {
          hour12: true,
        })}
      </div>
    ),
  },
]

export const ShortenTable = () => <DataTable rows={rows} headers={headers} />
