import React from 'react'

export default function Header() {
    return (
        <header className='flex justify-between items-center px-20 py-4'>
            <h3 className='text-3xl'>WeeConnect</h3>
            <nav>
                <ul className='flex justify-between items-center gap-6'>
                    <li>English</li>
                    <li>Log in</li>
                    <li className='bg-emerald-700 px-8 py-4 rounded-lg text-slate-50'>Sign up</li>
                </ul>
            </nav>
        </header>
    )
}
