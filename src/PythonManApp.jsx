import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/homePage/HomePage'
import { BlogPage } from './pages/blogPage/BlogPage'
import { BookingPage } from './pages/bookingPage/BookingPage'
import { AboutPage } from './pages/about/AboutPage'
import { ContactPage } from './pages/contact/ContactPage'
import { StorePage } from './pages/storepage/StorePage'
import { LoginPage } from './pages/Login/LoginPage'
import { RegisterPage } from './pages/register/RegisterPage'
import { NavBarComponent } from './components/NavBarComponent'
import { PrivacyPoliciesPage } from './pages/privacyPolicies/PrivacyPoliciesPage'

import './index.css'
import { TermsAndConditionsPage } from './pages/TermsAndConditions/TermsAndConditionsPage'


export const PythonManApp = () => {
  return (
    <>
        <NavBarComponent />
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/blog' element={ <BlogPage /> } />
            <Route path='/booking' element={ <BookingPage /> } />
            <Route path='/store' element={ <StorePage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/register' element={ <RegisterPage /> } />
            <Route path='/privacy-policies' element={ <PrivacyPoliciesPage /> } />
            <Route path='/terms-conditions' element={ <TermsAndConditionsPage /> } />
            <Route path='/*' element= { <Navigate to='/' /> } />
        </Routes>
    </>
    
  )
}
