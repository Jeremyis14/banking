
import HeaderBox from '@/components/HeaderBox';
import RighSidebar from '@/components/RighSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Jeremy', lastName : 'Shay', email:'akinlorinjeremiah@gmail.com'};

  return (
    <section className="home relative isolate min-h-[100dvh] overflow-hidden">
      {/* Blue background beams */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -left-40 h-[54rem] w-[54rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.24),transparent)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-40 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(96,165,250,0.12),transparent)] blur-[110px]"
      />

      {/* Top highlight with blue tint */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent dark:via-blue-300/15" />

      <div className="home-content relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <header className="home-header grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12">
          {/* Welcome glass card (blue theme) */}
          <div
            className="
              group relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-8
              bg-white/12 dark:bg-slate-900/40 supports-[backdrop-filter]:backdrop-blur-2xl
              ring-1 ring-blue-200/40 dark:ring-blue-300/15
              shadow-[0_18px_50px_-12px_rgba(30,58,138,0.45)]
            "
          >
            {/* Blue aurora accent layers */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0 rounded-3xl opacity-90 mix-blend-overlay
                bg-[radial-gradient(900px_320px_at_0%_0%,rgba(59,130,246,0.16),transparent_42%),radial-gradient(820px_300px_at_110%_120%,rgba(56,189,248,0.14),transparent_44%)]
              "
            />
            {/* Soft blue gloss */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(120deg,transparent,rgba(191,219,254,0.18)_22%,transparent_60%)]"
            />
            {/* Inner blue highlight border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-100/30 dark:ring-blue-200/10"
            />

            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your accounts and transactions efficiently."
            />

            {/* Bottom vignette for depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 rounded-b-3xl bg-gradient-to-t from-blue-900/10 to-transparent dark:from-blue-900/25"
            />
          </div>

          {/* Balance glass card (blue theme) */}
          <div
            className="
              relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 lg:col-span-4
              bg-white/12 dark:bg-slate-900/40 supports-[backdrop-filter]:backdrop-blur-2xl
              ring-1 ring-blue-200/40 dark:ring-blue-300/15
              shadow-[0_18px_50px_-12px_rgba(30,58,138,0.45)]
            "
          >
            {/* Accent blue glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                bg-[radial-gradient(620px_240px_at_100%_0%,rgba(59,130,246,0.18),transparent_52%)]
              "
            />
            {/* Soft gloss */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(120deg,transparent,rgba(191,219,254,0.16)_18%,transparent_56%)]"
            />
            {/* Inner blue highlight border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-100/30 dark:ring-blue-200/10"
            />

            <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />

            {/* Bottom vignette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-8 rounded-b-3xl bg-gradient-to-t from-blue-900/10 to-transparent dark:from-blue-900/25"
            />
          </div>
        </header>
                RECENT TRANSACTIONS
      </div>
            <RighSidebar user={loggedIn} 
        transactions={[]}
                        banks={[{currentBalance: 30000}, {currentBalance : 45000}]}
      />
      {/* Soft bottom page vignette with blue tint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-blue-900/10 to-transparent dark:from-blue-900/25" />
    </section>
  );
};

export default Home;