import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const MainLayout = () => {
  return (
    <div className='min-h-dvh relative w-full bg-amber-200 md:bg-bg-dark text-white flex flex-col'>
      <Navbar />
      <main className='flex-1 w-full unified-container'>
        <Outlet />
      </main>
    </div>
  )
}
