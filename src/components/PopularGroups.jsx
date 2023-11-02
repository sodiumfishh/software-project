export default function PopularGroups() {
    return (
        <div className="sm:px-20 px-4 py-10">
            <div className="flex justify-between items-center py-5">
                <h3 className="text-3xl">Popular Groups</h3>
                <h3><a href="#" className="text-accent">Explore more groups</a></h3>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
                <div className="px-4 py-2 rounded-lg border border-solid border-slate-300">
                    <div className="flex gap-2 py-4">
                        <img src="/group-1.png" alt="" className="col-span-1 row-span-2" />
                        <div className="">
                            <h5 className="text-accent text-sm">New Group</h5>
                            <h4 className="text-lg">New Dining Out Meetup Group</h4>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p className="uppercase text-slate-500 text-md mt-2">No upcoming events</p>
                    </div>
                </div>
                <div className="px-4 py-2 rounded-lg border border-solid border-slate-300">
                    <div className="flex gap-2 py-4">
                        <img src="/group-2.png" alt="" className="col-span-1 row-span-2" />
                        <div>
                            <h4 className="text-lg">Dashing Whippets Running Team</h4>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p className="uppercase text-slate-500 text-md mt-2">NYRR 5th Ave Mile ✰ Points Race ✰</p>
                    </div>
                </div>
                <div className="px-4 py-2 rounded-lg border border-solid border-slate-300">
                    <div className="flex gap-2 py-4">
                        <img src="/group-3.png" alt="" className="col-span-1 row-span-2" />
                        <div className="">
                            <h5 className="text-accent text-sm">New Group</h5>
                            <h4 className="text-lg">Elevate Your Attractiveness Mens Style Grooming Society</h4>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p className="uppercase text-slate-500 text-md mt-2">The Night Out: Mastering the Art of Flirting at Bars</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
