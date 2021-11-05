import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div className=" py-5 px-6 max-w-screen-2xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className=" py-2 rounded-md">
                        <Link to="/" className="text-3xl text-blue-600 font-bold bg-blue font-mono">PITAKON</Link>
                    </div>
                    <div>
                        <Link to="/q"
                            className="w-full bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 rounded-full text-center text-white px-4 py-2 font-semibold">
                            Ajukan Pertanyaan
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
