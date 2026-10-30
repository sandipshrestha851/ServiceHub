"use client";
import {useRouter} from "next/navigation"
import { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  UserRound,
  BriefcaseBusiness,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  Check,
  ArrowRight,
  MapPin,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";

type AuthScreenProps = {
  mode: "login" | "signup";
};

type Role = "customer" | "provider";

export default function AuthScreen({ mode }: AuthScreenProps) {
  const [role, setRole] = useState<Role>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isSignup = mode === "signup";
  const isProvider = role === "provider";
  const router = useRouter()

  const theme = isProvider
    ? {
        primary: "#DC2626",
        dark: "#B91C1C",
        light: "#FEF2F2",
        border: "#FECACA",
        muted: "#FEE2E2",
      }
    : {
        primary: "#2563EB",
        dark: "#1D4ED8",
        light: "#EFF6FF",
        border: "#BFDBFE",
        muted: "#DBEAFE",
      };

  const benefits = isProvider
    ? [
        { icon: TrendingUp, text: "Get more bookings" },
        { icon: CalendarCheck, text: "Manage your schedule" },
        { icon: ShieldCheck, text: "Build your reputation" },
      ]
    : [
        { icon: ShieldCheck, text: "Verified professionals" },
        { icon: LockKeyhole, text: "Secure and reliable service" },
        { icon: CalendarCheck, text: "Fast and easy booking" },
      ];

    // To navigate after submission of form
    function handleSubmit(){
        if(isSignup && !isProvider){
          router.push("/auth/signup");
        }else if(!isSignup && !isProvider){
          router.push("/auth/login")
        }else{
          // some code
        }
    }

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-4 sm:p-8"
      style={{ "--auth-primary": theme.primary } as React.CSSProperties}
    >
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-xl shadow-slate-200/60 lg:min-h-172.5 lg:grid-cols-[0.85fr_1.15fr]">

        {/* Left branding panel */}
        <aside
          className="relative hidden overflow-hidden p-10 lg:flex lg:flex-col"
          style={{ backgroundColor: theme.light }}
        >
          <div
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-[150%] rounded-[50%]"
            style={{ backgroundColor: theme.muted }}
          />

          <Link href="/signup" className="relative flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: theme.primary }}
            >
              <Wrench size={25} />
            </span>
            <span>
              <span className="block text-xl font-bold tracking-tight text-[#0F172A]">
                ServiceHub
              </span>
              <span className="text-xs text-[#64748B]">
                Find the right help. Get things done.
              </span>
            </span>
          </Link>

          <div className="relative my-auto py-14">
            <div
              className="mx-auto flex h-48 w-48 items-center justify-center rounded-full"
              style={{ backgroundColor: theme.muted }}
            >
              {isProvider ? (
                <div className="relative">
                  <BriefcaseBusiness
                    size={94}
                    strokeWidth={1.2}
                    color={theme.primary}
                  />
                  <Wrench
                    size={37}
                    color={theme.primary}
                    className="absolute -right-5 -top-3 rotate-12"
                  />
                </div>
              ) : (
                <div className="relative">
                  <UserRound
                    size={92}
                    strokeWidth={1.3}
                    color={theme.primary}
                  />
                  <MapPin
                    size={38}
                    color="#0D9488"
                    className="absolute -right-5 -top-3"
                  />
                </div>
              )}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-[#0F172A]">
              {isSignup
                ? isProvider
                  ? "Grow your service business"
                  : "Find help you can trust"
                : isProvider
                  ? "Welcome back, professional!"
                  : "Welcome back!"}
            </h2>

            <p className="mt-3 max-w-sm leading-6 text-[#64748B]">
              {isProvider
                ? "Connect with customers, manage your bookings, and build your professional reputation."
                : "Discover trusted professionals for your home, work, and everyday needs."}
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-sm text-[#334155]"
                >
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    color={theme.primary}
                  />
                  <Icon size={17} color={theme.primary} />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <p className="relative text-xs text-[#64748B]">
            © 2026 ServiceHub. Services made simple.
          </p>
        </aside>

        {/* Right form panel */}
        <section className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          {/* Mobile branding */}
          <Link
            href="/signup"
            className="mb-8 flex items-center gap-3 lg:hidden"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <Wrench size={23} />
            </span>
            <span className="text-xl font-bold text-[#0F172A]">
              ServiceHub
            </span>
          </Link>

          {/* Tabs */}
          <div className="mb-8 grid grid-cols-2 border-b border-[#E2E8F0]">
            {(["signup", "login"] as const).map((tab) => (
              <Link
                key={tab}
                href={`/${tab}`}
                className="border-b-2 px-4 py-3 text-center text-sm font-semibold capitalize transition-colors"
                style={{
                  borderBottomColor:
                    mode === tab ? theme.primary : "transparent",
                  color: mode === tab ? theme.primary : "#64748B",
                }}
              >
                {tab === "signup" ? "Sign Up" : "Login"}
              </Link>
            ))}
          </div>

          <div className="mb-7">
            <h1 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              {isSignup ? "Create your account" : "Login to your account"}
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              {isSignup
                ? "Join ServiceHub and get started in minutes."
                : "Enter your credentials to continue."}
            </p>
          </div>

          {/* Role selector */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-[#334155]">
              {isSignup ? "I want to join as" : "Sign in as"}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  {
                    id: "customer",
                    title: "Customer",
                    description: "Book services",
                    Icon: UserRound,
                  },
                  {
                    id: "provider",
                    title: "Provider",
                    description: "Offer services",
                    Icon: BriefcaseBusiness,
                  },
                ] as const
              ).map(({ id, title, description, Icon }) => {
                const active = role === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setRole(id)}
                    aria-pressed={active}
                    className="flex items-center gap-3 rounded-xl border p-3 text-left transition-all hover:-translate-y-0.5"
                    style={{
                      borderColor: active ? theme.primary : "#E2E8F0",
                      backgroundColor: active ? theme.light : "#FFFFFF",
                    }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: active ? theme.muted : "#F1F5F9",
                        color: active ? theme.primary : "#64748B",
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span
                        className="block text-sm font-semibold"
                        style={{
                          color: active ? theme.primary : "#334155",
                        }}
                      >
                        {title}
                      </span>
                      <span className="mt-1 block text-xs text-[#64748B]">
                        {description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/*form to register and login */}
          <form
            onSubmit={handleSubmit} className="space-y-4"
          >
            {isSignup && (
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#334155]"
                >
                  Full name
                </label>
                <div className="relative">
                  <UserRound
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-[#E2E8F0] py-3 pl-11 pr-4 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-(--auth-primary) focus:ring-4 focus:ring-blue-100/60"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#334155]"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#E2E8F0] py-3 pl-11 pr-4 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-(--auth-primary) focus:ring-4 focus:ring-blue-100/60"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#334155]"
              >
                Password
              </label>
              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={
                    isSignup ? "new-password" : "current-password"
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-[#E2E8F0] py-3 pl-11 pr-12 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-(--auth-primary) focus:ring-4 focus:ring-blue-100/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#334155]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {isSignup && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-[#334155]"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <ShieldCheck
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                  />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    className="w-full rounded-xl border border-[#E2E8F0] py-3 pl-11 pr-12 text-sm text-[#0F172A] outline-none transition placeholder:text-[#94A3B8] focus:border-(--auth-primary) focus:ring-4 focus:ring-blue-100/60"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#334155]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {!isSignup && (
              <div className="flex items-center justify-between gap-3 py-1">
                <label className="flex items-center gap-2 text-sm text-[#64748B]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-blue-600"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm font-semibold"
                  style={{ color: theme.primary }}
                >
                  Forgot password?
                </button>
              </div>
            )}

            {isSignup && (
              <p className="flex items-center gap-2 pt-1 text-xs text-[#0D9488]">
                <ShieldCheck size={16} />
                Your information stays protected.
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
              style={{
                backgroundColor: theme.primary,
                boxShadow: `0 8px 18px -8px ${theme.primary}80`,
              }}
            >
              {isSignup ? "Create Account" : "Sign In"}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#64748B]">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link
              href={isSignup ? "/auth/login" : "/auth/signup"}
              className="font-semibold hover:underline"
              style={{ color: theme.primary }}
            >
              {isSignup ? "Login" : "Sign up"}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
