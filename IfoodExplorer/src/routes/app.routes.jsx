import { Routes, Route } from 'react-router-dom'
// import { Home } from '../pages/UserAdminPages/Home'
// import { Details } from '../pages/UserAdminPages/Details'
import { New } from '../pages/UserAdminPages/New'
import { Edit } from '../pages/UserAdminPages/Edit/'

import { Home } from '../pages/UserPages/Home'
import { Details } from '../pages/UserPages/Details/index'
export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/' element={<Details />} />
      {/* <Route path='/details/:id' element={<Details />} /> */}
      <Route path='/new' element={<New />} />
      <Route path='/edit/' element={<Edit />} />
      {/* <Route path='/edit/:id' element={<Edit />} /> */}
    </Routes>
  )
}