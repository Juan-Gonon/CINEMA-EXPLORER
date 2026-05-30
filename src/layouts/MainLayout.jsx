import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <section className='min-h-dvh bg-[#0A0A0B]'>
      <Outlet />
    </section>
  )
}
