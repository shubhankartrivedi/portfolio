'use client'


import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import sleep from '@/utils/sleep';


export default function clientRedirect() {
  const router = useRouter();
    async function redirect() {
        await sleep(1000)
        router.replace('https://github.com/shubhankartrivedi');
    }
  useEffect(() => {
    // Always do navigations after the first render
    redirect();
  }, []);

  // Optional: Render a progress bar or some content while redirecting
  return null; // Or replace null with a component, like a loading spinner.
}

