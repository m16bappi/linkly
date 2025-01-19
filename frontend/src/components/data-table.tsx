import { Table, TableHeader, TableRow, TableBody, TableCell } from './ui/table'

export type Header<TData> = {
  id: keyof TData
  name: string
  render?: (row: TData) => JSX.Element
}

type DataTableProps<TData> = {
  rows: TData[]
  headers: Header<TData>[]
}

function DataTable<TData>({ rows, headers }: DataTableProps<TData>) {
  return (
    <div className='border rounded-xl'>
      <Table>
        <TableHeader className='bg-border'>
          <TableRow>
            {headers.map(({ id, name }) => (
              <TableCell key={String(id)} className='py-5 font-bold text-lg'>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx} className='bg-background'>
              {headers.map((cell) => (
                <TableCell
                  key={String(cell.id)}
                  className='py-4 text-muted-foreground text-base'
                >
                  {(cell.render && cell.render(row)) || String(row[cell.id])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable
