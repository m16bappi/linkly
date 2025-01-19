import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-1/3 self-center mt-24'>
      <Card className='py-5'>
        <CardHeader className='text-center mb-4'>
          <CardTitle className='text-xl'>Welcome Back</CardTitle>
          <CardDescription>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='underline underline-offset-4'>
              Sign up
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  className='p-5 bg-muted'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  className='p-5 bg-muted'
                  required
                />
              </div>
              <Button type='submit' className='w-full' size='lg'>
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
