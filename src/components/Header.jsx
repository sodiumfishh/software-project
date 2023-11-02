export default function Header() {
    return (
        <header className='flex justify-between items-center container mx-auto sm:px-20 py-4 pr-4'>
            <img src="/logo.png" alt="" />
            <nav>
                <ul className='flex justify-between items-center gap-6'>
                    <li className="font-bold">Log in</li>
                    <li className='bg-accent px-4 py-2 rounded-lg text-slate-50'>Sign up</li>
                </ul>
            </nav>
        </header>
    )
}
