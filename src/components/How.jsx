export default function How() {
    return (
        <div className="py-20 px-12 flex flex-col justify-center">
            <h3 className="text-center text-3xl font-medium">How WEECONNECT Works</h3>
            <p className="text-center mt-3">Meet new people who share your interests through online and in<br /> person events. It’s free to create an account.</p>
            <div className="flex justify-center gap-40 py-10">
                <div className="flex flex-col items-center w-4/12 text-center">
                    <img src="/join_group.png" alt="" />
                    <h3 className="text-emerald-700 text-xl">Join a group</h3>
                    <p className="mt-3">Do what you love, meet others who love it, find your community. The rest is history!</p>
                </div>
                <div className="flex flex-col items-center w-4/12 text-center">
                    <img src="/find_event.png" alt="" />
                    <h3 className="text-emerald-700 text-xl">Find an event</h3>
                    <p className="mt-3">Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.</p>
                </div>
                <div className="flex flex-col items-center w-4/12 text-center">
                    <img src="/start_group.png" alt="" />
                    <h3 className="text-emerald-700 text-xl">Start a group</h3>
                    <p className="mt-3">You don’t have to be an expert to gather people together and explore shared interests.</p>
                </div>
            </div>
            <a href="#" className="bg-emerald-700 text-slate-50 px-6 py-4 rounded-lg inline-block mx-auto">Join WEECONNECT</a>
        </div>
    )
}
