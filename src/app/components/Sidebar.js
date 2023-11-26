"use client";
import { ChevronLast, ChevronFirst, LogOut } from "lucide-react"
import Link from "next/link";
import { useContext, createContext } from "react"

const SidebarContext = createContext()

export default function Sidebar({ children, setExpanded, expanded }) {

    return (
        <aside className={`h-screen fixed z-20 -right-72 transition-all ${expanded ? "w-72" : "w-16"} md:right-0`}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="h-16 px-4 flex justify-between items-center">
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronLast size={18} /> : <ChevronFirst size={18} />}
                    </button>
                    <img src="/images/fullicon.png" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="" />
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 mt-0">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t">
                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3 py-1">
                            <li className={`relative flex items-center my-2 font-medium rounded-md cursor-pointer transition-colors group hover:bg-[#fbfbfb]`}>
                                <Link href="/logout" className="flex items-center py-3 px-3 h-12">
                                    <span className={`text-right overflow-hidden text-sm font-semibold transition-all ${expanded ? "w-52 mr-3" : "w-0 h-0"}`}>خروج</span>
                                    <LogOut size={20} />
                                    {!expanded && (<div className={`absolute right-full rounded-md px-4 py-2 mr-6 whitespace-nowrap bg-white text-gray-600 text-xs invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 hover:bg-[#fbfbfb]`}>خروج</div>)}
                                </Link>
                            </li>
                        </ul>
                    </SidebarContext.Provider>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, href, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative my-2 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-[#f8f8f8] text-[#bf68df]" : "hover:bg-[#fbfbfb] text-gray-600"}`}>
            <Link href={href} className="flex items-center py-3 px-3 h-12">
                <span className={`text-right overflow-hidden text-sm font-semibold transition-all ${expanded ? "w-52 mr-3" : "w-0 h-0"}`}>
                    {text}
                </span>
                {icon}
                {alert && (<div className={`absolute left-2 w-2 h-2 rounded bg-[#bf68df] ${expanded ? "" : "top-2"}`} />)}
                {!expanded && (
                    <div className={`absolute right-full rounded-md px-4 py-2 mr-6 whitespace-nowrap bg-white text-gray-600 text-xs invisible opacity-20 -translate-x-3 transition-all drop-shadow-md group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        {text}
                    </div>
                )}
            </Link>
        </li>
    )
}