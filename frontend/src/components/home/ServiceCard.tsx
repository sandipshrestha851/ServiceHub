import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  providers: number;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  providers,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="w-78.75 h-47 rounded-2xl border border-slate-200 bg-white p-6">
      
      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-base font-semibold text-slate-950">
          {title}
        </h3>

        <p className="mt-2 text-sm text-blue-500">
          {description}
        </p>

        <p className="mt-4 text-xs text-slate-400">
          {providers} providers
        </p>
      </div>
    </div>
  );
}