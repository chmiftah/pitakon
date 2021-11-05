import React from 'react'
import img from '../view/img.svg'
import { Link } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
// import { answerState } from '../store/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function Home() {

    // const [question, setQuestion] = useState('');
    // const history = useNavigate()
    // const setData = useSetRecoilState(answerState)

    return (
        <div>
            <div className="bg-gray-100">
                <Navbar />
                <div className="">
                    <div className=" bg-gradient-to-br from-gray-900 via-blue-800 to-blue-500">
                        <section className="  text-white body-font max-w-screen-2xl mx-auto ">
                            <div className="container mx-auto flex py-20 md:flex-row flex-col-reverse items-center">
                                <div className="md:w-1/2  md:pr-16 flex flex-col mb-16 md:mb-0 items-center leading-relaxed">
                                    <div className="px-8">
                                        <h1 className=" text-5xl lg:text-8xl font-bold mb-4 text-white font-mono">
                                            TEMUKAN JAWABANMU
                                        </h1>
                                        <p className="mb-8 leading-relaxed text-xl md:px-0 lg:px-0">Temukan jawaban dari berbagai soal mata pelajaran disini. Ajukan Pertanyaanmu Sekarang! </p>
                                    </div>
                                    <div className="flex w-full px-8">

                                        <div className="relative items-center w-full  lg:w-3/4">

                                            <Link to='/q' className="bg-white rounded-xl   px-4 py-2 text-xl font-semibold text-blue-700">Tanya Sekarang </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 w-5/6 lg:pl-16  flex justify-center">
                                    <div>
                                        <img src={img} alt="" className="object-cover object-center rounded" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                <div className="py-20">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="flex md:flex-row flex-col">
                            <div className="lg:w-1/2 justify-center flex p-8">
                                <div className="text-center lg:text-left">
                                    <p className="text-4xl lg:text-8xl font-semibold font-mono">AJUKAN PERTANYAAN</p>
                                    <p className="text-4xl lg:text-8xl text-gray-500 font-semibold font-mono">DAPATKAN BANTUAN MENEMBUS BATAS</p>
                                </div>


                            </div>
                            <div className="lg:w-1/2 px-12 py-8 lg:py-24  items-center">
                                <div>
                                    <div className="border border-blue-300 shadow rounded-md mb-6 p-4  w-full mx-auto">
                                        <div className="animate-pulse flex space-x-4">
                                            <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                                            <div className="flex-1 space-y-4 py-1">
                                                <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                                                <div className="space-y-2">
                                                    <div className="h-4 bg-blue-400 rounded"></div>
                                                    <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-blue-300 shadow rounded-md mb-6 p-4 w-full mx-auto">
                                        <div className="animate-pulse flex space-x-4">
                                            <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                                            <div className="flex-1 space-y-4 py-1">
                                                <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                                                <div className="space-y-2">
                                                    <div className="h-4 bg-blue-400 rounded"></div>
                                                    <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
                                        <div className="animate-pulse flex space-x-4">
                                            <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                                            <div className="flex-1 space-y-4 py-1">
                                                <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                                                <div className="space-y-2">
                                                    <div className="h-4 bg-blue-400 rounded"></div>
                                                    <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </div>
    )
}
