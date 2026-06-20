import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../page/HomePage'
import { MoviesPage } from '../page/MoviesPage'
import { FavoritePage } from '../page/FavoritePage'
import { MovieDetailsPage } from '../page/MovieDetailsPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/favorites' element={<FavoritePage />} />
          <Route path='/movie/:movieId' element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
