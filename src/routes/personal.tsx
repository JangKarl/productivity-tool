import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personal')({
  component: Personal,
})

function Personal() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Personal</h1>
      <p>Coming Soon</p>
    </div>
  )
}
