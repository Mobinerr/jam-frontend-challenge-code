import Link from "next/link"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-radial from-white to-sky-100">
            <Link href={"/login"} className="bg-sky-600 hover:bg-sky-700 transition-colors px-8 py-2 rounded-md text-white">ورود / ثبت نام</Link>
        </main>
    )
}
