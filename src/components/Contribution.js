"use client"

import React, { useState, useRef, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';



export default function contribution() {


    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        function checkScroll() {
            if (scrollContainerRef.current) {
                const el = scrollContainerRef.current;
                setCanScrollLeft(el.scrollLeft > 0);
                setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
            }
        }

        checkScroll();

        // Attach an event listener to handle scroll updates
        scrollContainerRef.current.addEventListener('scroll', checkScroll);

        // Cleanup the event listener on component unmount
        return () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

   

    return (
        <div className='relative'>

            { 
            canScrollRight &&
            <div style={{animationDuration: '300ms'}} className='h-full w-10 absolute right-0 bg-gradient-to-l dark:from-black from-[#D6DBDC] to-transparent z-20 animate-fade-in'></div> }

{ 
            canScrollLeft &&
            <div style={{animationDuration: '300ms'}} className='h-full w-10 absolute left-0 bg-gradient-to-l dark:to-black to-[#D6DBDC] from-transparent z-20 animate-fade-in'></div> }


        <div ref={scrollContainerRef} style={{animationDuration: '4s'}} className='animate-fade-in overflow-x-auto'>
<GitHubCalendar username="shubhankartrivedi" style={{width: '300%'}}/>
</div>


</div>
)

}