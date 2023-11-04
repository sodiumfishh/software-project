import Link from "next/link";
import Image from "next/image"

import { SignInButton as SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <header>
            <div className='flex justify-between items-center container mx-auto sm:px-20 py-4 px-4'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40} />
                </Link>
                <nav>
                    <ul className='flex justify-between items-center gap-6'>
                        <SignedOut>
                            <SignIn redirectUrl="/dashboard">
                                <button className="bg-accent text-slate-50 px-4 py-2 rounded-lg">Sign In</button>
                            </SignIn>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </ul>
                </nav>
            </div>
            <hr />
        </header>
    )
}
