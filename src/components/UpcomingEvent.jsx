import AvatarGroup from "./AvatarGroup";

export default function UpcomingEvent() {
    return (
        <div className="px-16 py-8">
            <div className="flex justify-between items-center">
                <h3 className="my-6 text-3xl">Upcoming online events</h3>
                <h3><a href="#" className="text-accent">Explore more events</a></h3>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                <div className="flex flex-col items-center">
                    <img src="/event_1.jpg" alt="" className="rounded-xl mb-4 w-full" />
                    <h5 className="text-slate-300 text-xs uppercase mb-3">Sun, Sep 10 · 9:00 PM UTC</h5>
                    <h4 className="text-lg">Classic Video and Arcade Games Chat</h4>
                    <p className="text-slate-400 text-sm">New York Classic Video & Arcade Game Group</p>
                    <AvatarGroup />
                </div>
                <div className="flex flex-col items-center">
                    <img src="/event_2.jpg" alt="" className="rounded-xl mb-4 w-full" />
                    <h5 className="text-slate-300 text-xs uppercase mb-3">Sun, Sep 10 · 9:00 PM UTC</h5>
                    <h4 className="text-lg">Classic Video and Arcade Games Chat</h4>
                    <p className="text-slate-400 text-sm">New York Classic Video & Arcade Game Group</p>
                    <AvatarGroup />
                </div>
                <div className="flex flex-col items-center">
                    <img src="/event_3.png" alt="" className="rounded-xl mb-4 w-full" />
                    <h5 className="text-slate-300 text-xs uppercase mb-3">Sun, Sep 10 · 9:00 PM UTC</h5>
                    <h4 className="text-lg">Classic Video and Arcade Games Chat</h4>
                    <p className="text-slate-400 text-sm">New York Classic Video & Arcade Game Group</p>
                    <AvatarGroup />
                </div>
                <div className="flex flex-col items-center">
                    <img src="/event_4.png" alt="" className="rounded-xl mb-4 w-full" />
                    <h5 className="text-slate-300 text-xs uppercase mb-3">Sun, Sep 10 · 9:00 PM UTC</h5>
                    <h4 className="text-lg">Classic Video and Arcade Games Chat</h4>
                    <p className="text-slate-400 text-sm">New York Classic Video & Arcade Game Group</p>
                    <AvatarGroup />
                </div>
            </div>
        </div>
    )
}
