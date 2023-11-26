"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const form = useForm();
    const { register , handleSubmit , formState } = form;
    const { errors } = formState;
    const router = useRouter()

    const onSubmit = (data) => {


        router.push("/user")
    }

    return (
        <>
            <div className="col-span-12 w-full lg:col-span-8 flex flex-col justify-center items-center p-8">
                <div className="w-[500px] max-w-full">
                    <h1 className="text-[#383838] text-3xl lg:text-4xl font-extrabold text-center lg:text-right">شرکت ایرانیان پرداز جم</h1>
                    <form className="mt-8 rtl-grid" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">شناسه کاربری</label>
                            <input type="text" id="username" {...register("username",{required:'شناسه کاربری الزامی است.'})} className={ errors?.username?.message ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" : "appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" } />
                            <p className="text-red-500 text-xs flex overflow-hidden absolute">{errors.username && <><svg className="fill-current h-3 w-3 text-red-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>{errors.username.message}</>}</p>
                        </div>
                        <div className="mb-10">
                            <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">رمز عبور</label>
                            <input id="password" type="password" {...register("password",{required:'رمز عبور الزامی است.'})} className={ errors?.password?.message ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" : "appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" } />
                            <p className="text-red-500 text-xs flex overflow-hidden absolute">{errors.password && <><svg className="fill-current h-3 w-3 text-red-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>{errors.password.message}</>}</p>
                        </div>
                        <div className="flex items-center justify-center mb-6 lg:justify-start">
                            <button className="bg-black hover:bg-slate-900 transition-colors text-white font-normal py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="submit">ورود</button>
                        </div>
                        <p className="text-gray-700 text-sm font-normal">ورود شما به سامانه به منزله قبول <Link href={"/rule"} className="text-[#bf68df] px-1">قوانین و مقرارت</Link> سامانه است.</p>
                    </form>
                </div>
            </div>
            <div className="col-span-4 hidden overflow-hidden relative lg:block">
                <Image src='/images/Login-Page.png' layout='fill' objectFit='cover' objectPosition='center' alt='Login' />
            </div>
        </>
    )
}

export default LoginForm