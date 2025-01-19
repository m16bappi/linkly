import { Link } from '@tanstack/react-router'

const Logo = () => (
  <Link to='/' className='font-extrabold text-3xl'>
    <span className='bg-gradient-to-r from-blue-500 to-rose-500 text-transparent bg-clip-text'>
      Linkly
    </span>
  </Link>
)

export default Logo
