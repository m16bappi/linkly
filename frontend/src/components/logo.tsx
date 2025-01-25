import { Link } from '@tanstack/react-router'

const Logo = () => (
  <Link to='/' className='font-extrabold text-4xl'>
    <span className='bg-linear-to-r from-blue-500 to-rose-500 text-transparent bg-clip-text'>
      Linkly
    </span>
  </Link>
)

export default Logo
