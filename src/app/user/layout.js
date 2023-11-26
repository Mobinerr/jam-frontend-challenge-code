'use client'
import { Briefcase , CircleUserRound , FileTextIcon } from "lucide-react"
import Sidebar, { SidebarItem } from "../components/Sidebar"
import { usePathname } from "next/navigation";
import { useState } from "react"

export default function UserLayout({ children }) {
    const pathname = usePathname()
    const [expanded, setExpanded] = useState(true)
    return (
        <div className="flex min-h-screen">
            <div className={`rtl-grid w-full pt-16 bg-[#f3f3f3] transition-all ${expanded ? "md:pr-72" : "md:pr-16"}`}>
                <header className={`fixed z-10 top-0 left-0 border-b w-full bg-white transition-all ${expanded ? "md:pr-72" : "md:pr-16"}`}>
                    <div className="h-16 px-6 flex justify-between items-center">
                        <p className="text-gray-600 font-semibold text-sm">
                            {pathname == "/user" ? "حساب کاربری" : ""}
                            {pathname == "/user/management" ? "مدیریت کابران" : ""}
                            {pathname == "/user/about" ? "درباره ما" : ""}
                        </p>
                        <div className="h-full flex justify-between items-center gap-4">
                            <div className="h-10 flex flex-col justify-between items-end">
                                <h4 className="font-semibold text-xs">مبین شکری</h4>
                                <span className="text-xs text-gray-600">mobinerr@gmail.com</span>
                            </div>
                            <img src="https://ui-avatars.com/api/?background=f1f1f1&color=3730a3&bold=true" alt="" className="w-10 h-10 rounded-md" />
                        </div>
                    </div>
                </header>
                <main className="h-full p-6">
                    {children}
                </main>
            </div>
            <Sidebar setExpanded={setExpanded} expanded={expanded} >
                <SidebarItem href={"/user"} icon={<CircleUserRound size={20} />} text="حساب کاربری" active={pathname == "/user" ? true : false} alert />
                <SidebarItem href={"/user/management"} icon={<Briefcase size={20} />} text="مدیریت کارمندان" active={pathname == "/user/management" ? true : false} />
                <SidebarItem href={"/user/about"} icon={<FileTextIcon size={20} />} text="درباره ما" active={pathname == "/user/about" ? true : false} />
            </Sidebar>
        </div>
    )
}