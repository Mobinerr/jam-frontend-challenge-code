"use client"
import { useForm } from 'react-hook-form'

export default function Me() {
    const form = useForm();
    const { register , handleSubmit , formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
    }

    return (
        <div className="bg-white w-full p-6 shadow-sm rounded-md">
            <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">شناسه کاربری</label>
                        <input type="text" id="username" {...register("username", { required: 'شناسه کاربری الزامی است.' })} className={errors?.username?.message ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" : "appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"} />
                        <p className="text-red-500 text-xs flex overflow-hidden absolute">{errors.username && <><svg className="fill-current h-3 w-3 text-red-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>{errors.username.message}</>}</p>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="name">نام و نام خانوادگی</label>
                        <input type="text" id="name" {...register("name", { required: 'نام و نام خانوادگی الزامی است.' })} className={errors?.name?.message ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" : "appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"} />
                        <p className="text-red-500 text-xs flex overflow-hidden absolute">{errors.name && <><svg className="fill-current h-3 w-3 text-red-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>{errors.name.message}</>}</p>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="email">ایمیل</label>
                        <input type="email" id="email" {...register("email", { required: 'ایمیل الزامی است.' })} className={errors?.email?.message ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" : "appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"} />
                        <p className="text-red-500 text-xs flex overflow-hidden absolute">{errors.email && <><svg className="fill-current h-3 w-3 text-red-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>{errors.email.message}</>}</p>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="address">آدرس</label>
                        <input type="text" id="address" {...register("address", { required: 'آدرس الزامی است.' })} className={errors?.address?.message ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" : "appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"} />
                        <p className="text-red-500 text-xs flex overflow-hidden absolute">{errors.address && <><svg className="fill-current h-3 w-3 text-red-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>{errors.address.message}</>}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10 lg:justify-start">
                    <button className="bg-black hover:bg-slate-900 transition-colors text-white font-normal py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="submit">ثبت اطلاعات</button>
                </div>
            </form>
        </div>
    )
}