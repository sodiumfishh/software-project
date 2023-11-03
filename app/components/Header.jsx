import Image from "next/image"

export default function Header() {
    return (
        <header className='flex justify-between items-center container mx-auto sm:px-20 py-4 px-4'>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={50}
                height={50} />

            <nav>
                <ul className='flex justify-between items-center gap-6'>
                    <li className="font-bold">Log in</li>
                    <li className='bg-accent px-4 py-2 rounded-lg text-slate-50'>Sign up</li>
                </ul>
            </nav>
        </header>
    )
}
