import { Route, Routes } from 'react-router-dom'

import IndexPage from '@/pages/index'
import AboutPage from '@/pages/about'

function Router() {
  return (
    <Routes>
      <Route element={<IndexPage />} path='/' />
      <Route element={<AboutPage />} path='/about' />
      <Route element={<AboutPage />} path='/projects' />
      <Route element={<AboutPage />} path='*' />
    </Routes>
  )
}

export default Router
