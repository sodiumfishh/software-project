export default function AvatarGroup() {
    return (
        <div className="avatar-group -space-x-6 mt-2">
            <div className="avatar">
                <div className="w-8">
                    <img src="https://i.pravatar.cc/300?img=1" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-8">
                    <img src="https://i.pravatar.cc/300?img=2" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-8">
                    <img src="https://i.pravatar.cc/300?img=3" />
                </div>
            </div>
            <div className="avatar placeholder">
                <div className="w-8 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                </div>
            </div>
        </div>
    )
}
