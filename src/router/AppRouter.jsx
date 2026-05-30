import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../page/HomePage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/movies' element={<HomePage />} />
          <Route path='/favorites' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
