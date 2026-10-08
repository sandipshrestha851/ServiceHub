"use client";

import { useState } from "react";
import Link from "next/link";
import {
Heart,
MapPin,
Star,
ArrowRight,
BadgeCheck,
} from "lucide-react";

interface ServiceProviderCardProps {
name: string;
profession: string;
location: string;
rating: number;
jobs: number;
price: number;
availableToday: boolean;
profileHref: string;
}

export default function ServiceProviderCard({
name,
profession,
location,
rating,
jobs,
price,
availableToday,
profileHref,
}: ServiceProviderCardProps) {
const [isFavorite, setIsFavorite] = useState(false);

const initials = name
.split(" ")
.map((part) => part[0])
.slice(0, 2)
.join("")
.toUpperCase();

return ( <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
  {/* Avatar and favorite button */}
  <div className="mb-4 flex items-center justify-between">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 font-semibold text-blue-700">
      {initials}
    </div>

    <button
      type="button"
      onClick={() => setIsFavorite(!isFavorite)}
      aria-label={
        isFavorite ? "Remove from favorites" : "Add to favorites"
      }
      aria-pressed={isFavorite}
      className="rounded-full p-2 transition-colors hover:bg-gray-100"
    >
      <Heart
        size={19}
        className={
          isFavorite
            ? "fill-rose-500 text-rose-500"
            : "text-gray-300"
        }
      />
    </button>
  </div>

  {/* Provider information */}
  <div className="mb-3">
    <div className="flex items-center gap-1.5">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <BadgeCheck
        size={16}
        className="shrink-0 text-teal-500"
      />
    </div>

    <p className="mt-1 text-sm text-gray-500">{profession}</p>

    <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
      <MapPin size={14} />
      <span>{location}</span>
    </div>
  </div>

  <div className="my-4 border-t border-gray-100" />

  {/* Rating and completed jobs */}
  <div className="flex items-center gap-2 text-sm">
    <Star size={15} className="fill-amber-400 text-amber-400" />
    <span className="font-semibold text-gray-800">{rating}</span>
    <span className="text-gray-400">{jobs} jobs</span>
  </div>

  {/* Price and availability */}
  <div className="mt-5 flex items-center justify-between gap-2">
    <p className="text-sm font-semibold text-gray-900">
      From ${price}
    </p>

    <span
      className={`flex items-center gap-1.5 text-xs font-medium ${
        availableToday ? "text-teal-600" : "text-gray-400"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          availableToday ? "bg-teal-500" : "bg-gray-400"
        }`}
      />
      {availableToday ? "Available today" : "Unavailable"}
    </span>
  </div>

  {/* Profile link */}
  <Link
    href={profileHref}
    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:border-blue-300 hover:text-blue-600"
  >
    View profile
    <ArrowRight size={16} />
  </Link>
</div>


);
}
