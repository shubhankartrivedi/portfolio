import Main from '@/components/resources/Main'


export const metadata = {




    title: 'Resources',
    description: 'These are some resources that I use.',
    keywords: ['resources', 'raspberry pi', 'rpi', 'raspberry pi 3', 'raspberry pi 4', 'raspberry pi pico', 'rpi 3', 'rpi 4', 'rpi pico'],
    // colorScheme: 'dark',
    // publishedTime: blog.timestamp,
    openGraph: {
        title: 'Resources',
        description: 'These are some resources that I use.',
        url: 'https://shubhankartrivedi.com',
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
        title: 'Resources',
        description: 'These are some resources that I use.',
        url: 'https://shubhankartrivedi.com',
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

export default function Resources() {
    return (
        <div className="pt-24 sm:px-10 px-5 flex flex-col gap-10">
            <h1 className="text-6xl font-bold">Resources</h1>

            <Main />

        </div>
    )
}