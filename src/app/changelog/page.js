

import Stability from "@/components/changelog/StabilityScore"

export const metadata = {




    title: 'Changelog',
    description: 'Change Logs for my portfolio',
    //keywords: blog.keywords,
    // colorScheme: 'dark',
    // publishedTime: blog.timestamp,
    openGraph: {
        title: 'ChangeLog',
        description: 'Change Logs for my portfolio',
        url: 'https://shubhankartrivedi.com/changelog',
        siteName: 'Shubhankar Trivedi',
        images: [
            {
                url: 'https://cdn.discordapp.com/attachments/1061377727363567707/1147218173540716574/image.png',
                width: 800,
                height: 800,
            },
        ],
        // locale: 'en_US',
        type: 'website',
        // publishedTime: blog.timestamp,
    },
    twitter: {
        title: 'ChangeLog',
        description: 'Change Logs for my portfolio',
        url: 'https://shubhankartrivedi.com/changelog',
        siteName: 'Shubhankar Trivedi',
        images: [
            {
                url: 'https://cdn.discordapp.com/attachments/1061377727363567707/1147218173540716574/image.png',
                width: 800,
                height: 800,
            },
        ],
        // locale: 'en_US',
        type: 'website',
        // publishedTime: blog.timestamp,
    },
}

export default function Changelog() {
    return (
        <div className="py-28 sm:px-10 px-3 flex flex-col gap-10 divide-y divide-gray-800">
            <h1 className="text-6xl font-bold">Changelog</h1>
            <div className="flex flex-col gap-5 dark:bg-gray-900 bg-gray-100 drop-shadow-xl border-none p-5 rounded-3xl">





                <div className="flex flex-row flex-wrap gap-20 rounded-2xl dark:bg-black bg-gray-300 p-5 dark:border border-gray-800">

                    <div className="flex flex-col gap-5">
                        <div className="">
                            <h2 className="text-4xl font-semibold">v0.2</h2>
                            <p className="text-2xl">Alpha Release</p>
                        </div>
                        <p className="text-gray-600">5 September 2023</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">What's new?</h3>
                        <ul className="list-disc list-inside dark:text-gray-400 text-gray-600 max-w-sm">
                            <li>Improved Error 404 page</li>
                            <li>Improved Github button redirect</li>
                            <li>/github page</li>
                            <li>/github page with realtime metadata from github</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Fixed Issues</h3>
                        <ul className="list-disc list-inside dark:text-gray-400 text-gray-600 max-w-sm">
                            <li>none</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Known Issues</h3>
                        <ul className="list-disc list-inside dark:text-gray-400 text-gray-600 max-w-sm">
                            <li>Cat image not shown in 404 page metaImage</li>
                            <li>Homepage Github Contribution Calender's right side gradient wont become invisible when scroll to right most in mobile devices</li>
                        </ul>
                    </div>


                    <div className="flex flex-col justify-center gap-5">
                        <h3 className="text-4xl font-semibold">Stability Score</h3>
                        <Stability value={10} />
                    </div>

                </div>








                <div className="flex flex-row flex-wrap gap-20 rounded-2xl dark:bg-black bg-gray-300 p-5 dark:border border-gray-800">

                    <div className="flex flex-col gap-5">
                        <div className="">
                            <h2 className="text-4xl font-semibold">v0.1</h2>
                            <p className="text-2xl">Alpha Release</p>
                        </div>
                        <p className="text-gray-600">2 September 2023</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">What's new?</h3>
                        <ul className="list-disc list-inside dark:text-gray-400 text-gray-600 max-w-sm">
                            <li>Changelog page</li>
                            <li>Onboard Animations</li>
                            <li>Improved Github Contribution Chart on Mobile</li>
                            <li>Responsiveness in current pages</li>
                            <li>Navbar</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Fixed Issues</h3>
                        <ul className="list-disc list-inside dark:text-gray-400 text-gray-600 max-w-sm">
                            <li>Homepage Responsiveness</li>
                            <li>Overall Stability</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Known Issues</h3>
                        <ul className="list-disc list-inside dark:text-gray-400 text-gray-600 max-w-sm">
                            <li>none</li>
                        </ul>
                    </div>


                    <div className="flex flex-col justify-center gap-5">
                        <h3 className="text-4xl font-semibold">Stability Score</h3>
                        <Stability value={9} />
                    </div>

                </div>



            </div>
        </div>
    )
}