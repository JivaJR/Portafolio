import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NavBar } from '../ui/NavBar'

export const AppRouter = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </>
    )
}
