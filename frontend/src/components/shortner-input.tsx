import { Link } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const ShortnerInput = () => (
  <div className='w-full p-0.5 border-[3px] rounded-full flex items-center px-0.5 bg-background'>
    <Link className='text-muted-foreground ml-3' />
    <Input
      placeholder='Enter your link here'
      className='h-full border-none focus-visible:ring-0'
    />
    <Button size='lg' className='px-4'>
      Shorten Now!
    </Button>
  </div>
)

export default ShortnerInput
