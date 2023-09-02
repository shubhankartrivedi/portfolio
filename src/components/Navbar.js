import Link from "next/link"

export default function Navbar(){
    return (
        <div className="fixed z-30 sm:p-10 p-5 w-full">
            <div className="flex sm:justify-start justify-center">
                <div className="flex justify-center rounded-full dark:bg-gray-800/50 bg-gray-100 backdrop-blur border dark:border-gray-700/40 border-gray-300 shadow-xl">
                <div className="px-3 py-2 pl-5 hover:dark:bg-white/10 hover:bg-gray-200 rounded-l-full duration-100">
                <Link href="/">Home</Link>
                </div>
                <div className="px-3 py-2 hover:dark:bg-white/10 hover:bg-gray-200 duration-100">
                    <Link href="/changelog">Changelog</Link>
                </div>
                <div className="px-3 py-2 pr-5 hover:dark:bg-white/10 hover:bg-gray-200 rounded-r-full duration-100">
                    <Link href="https://github.com/shubhankartrivedi/portfolio" target="blank">Source Code</Link>
                </div>
            </div>
            </div>
        </div>
    )
}