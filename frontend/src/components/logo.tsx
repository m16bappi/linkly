import { Link } from '@tanstack/react-router'

const Logo = () => (
  <Link
    to='/'
    className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-blue-500 to-rose-500 text-transparent bg-clip-text'
  >
    Linkly
  </Link>
)

export default Logo
