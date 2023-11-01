export default function Header() {
    return (
        <header className='flex justify-between items-center container mx-auto sm:px-20 py-6'>
            <img src="/logo.png" alt="" />
            <nav>
                <ul className='flex justify-between items-center gap-6'>
                    <li>Log in</li>
                    <li className='bg-emerald-700 px-4 py-2 rounded-lg text-slate-50'>Sign up</li>
                </ul>
            </nav>
        </header>
    )
}
