import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$userId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()
  console.log(userId)
  return <div>Hello "/$userId/"!</div>
}
