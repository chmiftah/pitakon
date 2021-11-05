import React, { useState, useEffect } from 'react'

import { Disclosure } from '@headlessui/react'
import brainly from 'brainly-scraper';
// import { useRecoilState } from 'recoil';
// import { answerState } from '../store';
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SearchIcon } from '@heroicons/react/solid';
import spinner from './spinner.gif'






export default function Question() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState([]);
    // const getData = useRecoilState(answerState)
    const [loading, setLoading] = useState(false)
    // console.log(getData[0]);
    const [mounted, setMounted] = useState(false);

    const answerHandler = async (e) => {
        e.preventDefault();
        setMounted(true)
        await brainly(question).then(res => {
console.log(res.data);

            if (res.success === true) {
                setLoading(true)
                setMounted(false)
                setAnswer(res.data)
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    timer: 2000,
                })
            } else {
                setLoading(false)
                setAnswer(res.data)
                Swal.fire({
                    title: 'Masalah Pada Jaringan Anda!',
                    icon: 'error',
                    timer: 2000,
                })
            }



        });


    }



    useEffect(() => {

    }, [answer])



    return (
        <div className="relative">
            {
                mounted ?
                    <div className="">
                        <div className="bg-black z-50 bg-opacity-60 flex min-h-screen w-full absolute justify-center items-center">

                            <div>
                                <div>
                                    <img src={spinner} alt="" className="w-24 h-24" />
                                </div>
                                <div>
                                    <p className="animate-ping text-xs pl-6 ">Loading...</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    
                       :
                       <div>

                       </div>
            }
            <div>
                <Navbar />
                <div className=" bg-gray-50">
                    <section className=" bg-gradient-to-br from-gray-900 via-blue-600 to-blue-500 px-10 pt-16 pb-32 ">
                        <div className="max-w-screen-xl mx-auto">
                            <div className="flex items-center gap-6">
                                <div className="bg-gray-400 p-2  rounded-full">
                                    <SearchIcon className="h-16 w-16 text-gray-200" />
                                </div>
                                <div>
                                    <div className="font-semibold text-3xl text-white lg:text-4xl">Ajukan Pertanyaan</div>
                                    <div className="text-gray-200">Temukan Jawaban dari pertanyaanmu disini.</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-8 -mt-28 ">
                        <div className=" max-w-screen-xl mx-auto flex py-8 md:flex-row flex-col gap-8 ">
                            <div className="w-full md:w-1/2 lg:w-2/5  ">

                                <div className="bg-white  rounded-lg shadow-md sticky top-0">
                                    <div className="text-2xl py-4 font-bold px-10">Ajukan Pertanyaan</div>
                                    <hr />
                                    <div className="flex justify-center px-8 py-6 ">

                                        <div className="w-full">

                                            <form onSubmit={answerHandler}>
                                                <div className="mb-4">

                                                    <textarea type="text" name="description" placeholder="tulis pertanyaan.."
                                                        className="w-full shadow-lg p-6 mt-1 rounded-lg focus:ring-2 border-2 outline-none overflow-hidden"
                                                        value={question}
                                                        onChange={(e) => setQuestion(e.target.value)}
                                                        required></textarea>

                                                </div>

                                                <button
                                                    className="w-full bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 rounded-lg text-center text-white p-4">
                                                    Tanyakan Pertanyaanmu
                                                </button>

                                            </form>


                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full md:w-1/2 lg:w-3/5 rounded-lg mb-14 ">

                                <form method="post">




                                    <div className="bg-white rounded-lg shadow-md  pb-12">
                                        <div className="text-2xl font-bold py-4 px-10">Jawaban</div>
                                        <hr />
                                        <div className="px-10 py-4 ">
                                            <div className="mb-4 mt-6 ">

                                                {
                                                    !loading ? (
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
                                                    )
                                                        : (


                                                            answer.map((data, index) => (
                                                                <div className="p-6 border my-4 border-blue-300 shadow- rounded-md  w-full mx-auto outline-none" >

                                                                    <Disclosure key={index}>
                                                                        <Disclosure.Button className="hover:text-blue-500 py-2 text-gray-600 font-normal  text-xl" >
                                                                            <p className="text-left " style={{whiteSpace: "pre-line"}} dangerouslySetInnerHTML={{__html:`${data.pertanyaan}`}}></p>
                                                                        </Disclosure.Button>
                                                                        <Disclosure.Panel className="text-gray-500 text-justify leading-relaxed font-medium"  >
                                                                            <p style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{__html:`${data.jawaban[0].text}`}}></p>
                                                                            <img src= {data.jawaban[0].media} alt="" />
                                                                        </Disclosure.Panel>
                                                                    </Disclosure>

                                                                </div>
                                                            ))
                                                        )


                                                }
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                            </div>
                        </div>
                    </section>
                </div>



                <Footer />


            </div>













        </div>
    )
}
