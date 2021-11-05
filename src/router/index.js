import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import Question from '../view/Question'

export default function ReactRouter() {
    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
                <Route path="/q" element={<Question />} />
            </Routes>
        </BrowserRouter>
    )
}
