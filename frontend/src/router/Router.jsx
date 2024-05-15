import React from 'react'
import Pages from '../pages/exports'
import {Routes, Route} from 'react-router-dom';

const Router = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Pages.Home/>}/>
    <Route path='/signup' element={<Pages.Signup/>}/>
    </Routes>
    </>
  )
}

export default Router;
