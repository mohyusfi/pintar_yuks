import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AdminShell } from '~/components/dashboard/AdminShell'
import { createRouteGuard } from '~/lib/route-guard'

export const Route = createFileRoute('/admin')({
  ssr: false,
  beforeLoad: createRouteGuard('admin'),
  head: () => ({
    meta: [
      { name: 'robots', content: 'noindex, nofollow' },
      { title: 'Dashboard Admin — Pintar Yuk' },
    ],
  }),
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <AdminShell>
      <Outlet />
    </AdminShell>
  )
}
