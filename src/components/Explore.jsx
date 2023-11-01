import React from 'react'

export default function Explore() {
    return (
        <div className='py-4 px-20'>
            <div className='flex items-center justify-between gap-10'>
                <div>
                    <img src="https://picsum.photos/id/27/400/200" alt="" className='rounded-xl' />
                    <a className='text-emerald-700 underline text-sm'>Lorem ipsum dolor sit amet consectetur!</a>
                </div>
                <div>
                    <img src="https://picsum.photos/id/635/400/200" alt="" className='rounded-xl' />
                    <a className='text-emerald-700 underline text-sm'>Lorem ipsum dolor sit amet consectetur!</a>
                </div>
                <div>
                    <img src="https://picsum.photos/id/200/400/200" alt="" className='rounded-xl' />
                    <a className='text-emerald-700 underline text-sm'>Lorem ipsum dolor sit amet consectetur!</a>
                </div>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-10 my-10'>
                    <li className='bg-emerald-700 text-slate-50 rounded-3xl px-2 py-1'>Make New Friends.</li>
                    <li className='bg-emerald-700 text-slate-50 rounded-3xl px-2 py-1'>Get moving</li>
                    <li className='bg-emerald-700 text-slate-50 rounded-3xl px-2 py-1'>Find your zen</li>
                    <li className='bg-emerald-700 text-slate-50 rounded-3xl px-2 py-1'>Lorem, ipsum.</li>
                    <li className='bg-emerald-700 text-slate-50 rounded-3xl px-2 py-1'>Read with friends</li>
                    <li className='bg-emerald-700 text-slate-50 rounded-3xl px-2 py-1'>Lorem, ipsum.</li>
                </ul>
            </div>
        </div>
    )
}
