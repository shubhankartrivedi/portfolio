"use client"

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { useState, useEffect } from "react"
import sleep from '@/utils/sleep';

export default function Stability(props) {
    const [value, setStability] = useState(0)
    const [color, setColor] = useState('#198754')
    async function getStability() {
        await sleep(100)

        return props.value;
    }
    useEffect(() => {
        getStability().then((value) => {
            if(value < 5) setColor('#dc3545')
            else if(value < 8) setColor('#ffc107')
            else setColor('#198754')
            setStability(value)
        })
    }, [])
    return (
        <div className='w-24'>
            <CircularProgressbar value={value} maxValue={10} text={`${value}/10`} 
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 1,
            
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                strokeWidth: 10, 
            
                // Text size
                textSize: '16px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 3,
            
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
            
                // Colors
                pathColor: color,
                textColor: color,
                trailColor: '#212121',
                backgroundColor: '#3e98c7',
              })}
            
            />
        </div>
    )
}