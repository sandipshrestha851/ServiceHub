import React from 'react'
import { Star } from 'lucide-react'

interface FeedbackCardProps {
    name: String,
    FeedbackText: String
}

const FeedbackCard = ({ name, FeedbackText }: FeedbackCardProps) => {

    const initials = name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div className="bg-white flex flex-col p-5 border rounded-2xl border-[#E2E8F0] space-y-4 justify-center">
            <div className="profileInfo flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                    {initials}
                </div>
                <div className="text">
                    <p className="name text-xl font-semibold">{name}</p>
                </div>
            </div>
            <div className="ratings flex gap-1.5">
                <Star color="#ffb900" fill="#ffb900" size={16} />
                <Star color="#ffb900" fill="#ffb900" size={16} />
                <Star color="#ffb900" fill="#ffb900" size={16} />
                <Star color="#ffb900" fill="#ffb900" size={16} />
                <Star color="#ffb900" fill="#ffb900" size={16} />
            </div>
            <div className="feedbackText">
                <p className="text text-sm text-[#64748B]">"{FeedbackText}"</p>
            </div>
        </div>
    )
}

export default FeedbackCard
