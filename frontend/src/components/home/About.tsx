import React from 'react'

const about = () => {
    return (

        <section id="about" className="bg-slate-900 text-white mt-20 px-40">
            <div
                className="mx-auto grid gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]"
            >
                 {/* About Section */}
                <div>
                    <p
                        className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-400"
                    >
                        Why ServiceHub
                    </p>

                    <h2
                        className="max-w-md text-3xl font-bold tracking-[-0.04em] sm:text-4xl"
                    >
                        A better way to get things done.
                    </h2>

                    <p className="mt-5 max-w-md leading-7 text-slate-400">
                        We make it easier to find dependable help, understand your options,
                        and feel confident from booking to completion.
                    </p>

                    <button
                        className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_5px_14px_rgba(37,99,235,0.18)] transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    >
                        Learn more

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right size-4"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                {/* Features Grid*/}
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                    {/* Feature 1 */}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-badge-check size-6 text-teal-400"
                            aria-hidden="true"
                        >
                            <path
                                d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                            ></path>
                            <path d="m9 12 2 2 4-4"></path>
                        </svg>

                        <h3 className="mt-4 text-sm font-bold">Verified professionals</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Every provider is reviewed and verified.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shield-check size-6 text-teal-400"
                            aria-hidden="true"
                        >
                            <path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            ></path>
                            <path d="m9 12 2 2 4-4"></path>
                        </svg>

                        <h3 className="mt-4 text-sm font-bold">Transparent pricing</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Know what to expect before you book.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-calendar-days size-6 text-teal-400"
                            aria-hidden="true"
                        >
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                            <path d="M8 14h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 18h.01"></path>
                            <path d="M12 18h.01"></path>
                            <path d="M16 18h.01"></path>
                        </svg>

                        <h3 className="mt-4 text-sm font-bold">Easy booking</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Schedule help around your life.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star size-6 text-teal-400"
                            aria-hidden="true"
                        >
                            <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                            ></path>
                        </svg>

                        <h3 className="mt-4 text-sm font-bold">Customer reviews</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Real experiences from real customers.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bell size-6 text-teal-400"
                            aria-hidden="true"
                        >
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path
                                d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                            ></path>
                        </svg>

                        <h3 className="mt-4 text-sm font-bold">Service tracking</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Stay informed at every step.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-users size-6 text-teal-400"
                            aria-hidden="true"
                        >
                            <path
                                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                            ></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>

                        <h3 className="mt-4 text-sm font-bold">Secure communication</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Connect without the hassle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about
