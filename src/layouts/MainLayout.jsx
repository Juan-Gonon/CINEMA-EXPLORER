import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <section className='min-h-dvh bg-bg-dark text-white flex flex-col'>
      <Outlet />
    </section>
  )
}
