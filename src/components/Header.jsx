export default function Header() {
    return (
        <header className='flex justify-between items-center container mx-auto sm:px-20 py-4 px-4'>
            <img src="/logo.svg" alt="" className="w-12" />
            
            <nav>
                <ul className='flex justify-between items-center gap-6'>
                    <li className="font-bold">Log in</li>
                    <li className='bg-accent px-4 py-2 rounded-lg text-slate-50'>Sign up</li>
                </ul>
            </nav>
        </header>
    )
}
