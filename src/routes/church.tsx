import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/church')({
  component: Church,
})

function Church() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Church</h1>
      <p>Coming Soon</p>
    </div>
  )
}
