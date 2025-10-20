"use client"

  import React from "react"
  import Image from "next/image"
  import Link from "next/link"
  import { usePathname } from "next/navigation"
  import { cn } from "@/lib/utils"
 import { sidebarLinks } from "../../constants"
  import {
    Home,
    LayoutDashboard,
    Landmark,
    Wallet,
    CreditCard,
    Building2,
    BarChart3,
    PieChart,
    Receipt,
    Repeat,
    Send,
    ArrowDownUp,
    Settings,
    User as UserIcon,
    HelpCircle,
    Bookmark,
    Bell,
    Calendar,
    MessageSquare,
    FolderClosed,
    FileText,
    Circle,
  } from "lucide-react"

  interface SidebarProps {
    user: {
      firstName: string
      lastName: string
      email: string
    }
  }

  // Heuristic default icon picker for common banking/finance labels/routes
  const getDefaultIconForRoute = (label: string, route: string) => {
    const key = `${label} ${route}`.toLowerCase()
    if (/(home|start|overview)/.test(key)) return Home
    if (/(dashboard|main)/.test(key)) return LayoutDashboard
    if (/(bank|institution|accounts)/.test(key)) return Landmark
    if (/(wallet|cash|funds)/.test(key)) return Wallet
    if (/(card|credit|debit)/.test(key)) return CreditCard
    if (/(business|company|org)/.test(key)) return Building2
    if (/(analytics|reports|insights|chart)/.test(key)) return BarChart3
    if (/(budget|spend|pie)/.test(key)) return PieChart
    if (/(transactions|activity|history|receipt)/.test(key)) return Receipt
    if (/(transfer|repeat|recurring|schedule)/.test(key)) return Repeat
    if (/(send|pay|outgoing)/.test(key)) return Send
    if (/(move|exchange|swap)/.test(key)) return ArrowDownUp
    if (/(settings|preferences)/.test(key)) return Settings
    if (/(profile|account|user)/.test(key)) return UserIcon
    if (/(help|support|docs|faq)/.test(key)) return HelpCircle
    if (/(saved|favorites|bookmarks)/.test(key)) return Bookmark
    if (/(alerts|notifications)/.test(key)) return Bell
    if (/(calendar|schedule)/.test(key)) return Calendar
    if (/(messages|inbox|chat)/.test(key)) return MessageSquare
    if (/(files|documents|folders)/.test(key)) return FolderClosed
    if (/(statements|docs|pdf)/.test(key)) return FileText
    return Circle
  }

  const Footer = ({ user }: { user: SidebarProps["user"] }) => {
    const handleLogout = async () => {
      // TODO: Replace with real logout
      console.log("User logged out")
    }

    return (
      <footer
        className={cn(
          "flex items-center gap-3 rounded-xl p-3 relative overflow-hidden",
          // glass tile
          "bg-white/12 dark:bg-white/5 supports-[backdrop-filter]:backdrop-blur-md backdrop-saturate-150",
          "ring-1 ring-blue-200/40 dark:ring-blue-300/15",
          "shadow-[0_8px_26px_-10px_rgba(30,58,138,0.45)]"
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(120deg,transparent,rgba(191,219,254,0.20)_20%,transparent_60%)]"
        />
        <div className="flex flex-1 items-center gap-3 overflow-hidden">
          <div className="relative flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 font-semibold text-white shadow-sm shadow-blue-900/30">
            {user.firstName?.[0]}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent" />
          </div>
          <div className="flex min-w-0 flex-col">
            <p className="truncate font-semibold text-neutral-900 dark:text-neutral-100">
              {user.firstName} {user.lastName}
            </p>
            <p className="truncate text-sm text-neutral-600 dark:text-neutral-400">
              {user.email}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="group rounded-full p-2 transition-all hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400/30 dark:focus-visible:ring-blue-300/25"
          aria-label="Log out"
          type="button"
        >
          <Image
            src="/icons/logout.svg"
            width={22}
            height={22}
            alt="" // decorative
            className="opacity-80 transition-all duration-200 group-hover:opacity-100 group-active:scale-95"
          />
          <span className="sr-only">Log out</span>
        </button>
      </footer>
    )
  }

  const Sidebar: React.FC<{ user: SidebarProps["user"] }> = ({ user }) => {
    const pathname = usePathname()

    return (
      <section
        className={cn(
          "sidebar relative isolate overflow-hidden",
          // Blue glass panel
          "bg-white/55 dark:bg-slate-900/45 supports-[backdrop-filter]:backdrop-blur-2xl backdrop-saturate-150",
          // Edge and depth
          "border-r border-blue-200/40 dark:border-blue-300/15",
          "shadow-[0_20px_60px_-20px_rgba(30,58,138,0.55)]",
          // Blue aurora layers
          "before:pointer-events-none before:absolute before:inset-0 before:opacity-90 before:mix-blend-overlay",
          "before:bg-[radial-gradient(1200px_500px_at_-10%_-20%,rgba(59,130,246,0.10),transparent_45%),radial-gradient(900px_500px_at_110%_120%,rgba(56,189,248,0.10),transparent_45%)]",
          // Subtle inner sheen border sweep
          "after:pointer-events-none after:absolute after:-inset-px after:[mask-image:linear-gradient(to_right,transparent,black,transparent)]",
          "after:bg-[linear-gradient(90deg,rgba(191,219,254,0.22),rgba(191,219,254,0.08),rgba(191,219,254,0.22))]"
        )}
      >
        {/* Top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent dark:via-blue-300/15" />

        <nav aria-label="Primary" className="flex h-full flex-col p-4">
          {/* Brand tile */}
          <Link
            href="/"
            className={cn(
              "mb-6 flex items-center gap-3 rounded-xl px-3 py-2 relative overflow-hidden motion-reduce:transition-none",
              "bg-white/12 dark:bg-white/5 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150",
              "ring-1 ring-blue-200/40 dark:ring-blue-300/15",
              "shadow-[0_12px_30px_-16px_rgba(30,58,138,0.55)]",
              "transition-all duration-300 hover:ring-blue-300/50 dark:hover:ring-blue-300/25 hover:bg-white/15 dark:hover:bg-white/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400/30 dark:focus-visible:ring-blue-300/25"
            )}
            aria-label="Go to dashboard"
          >
            <span className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(120deg,transparent,rgba(191,219,254,0.20)_20%,transparent_60%)]" />
            <span className="relative flex size-9 items-center justify-center rounded-lg bg-white/60 dark:bg-white/10 ring-1 ring-blue-200/40 dark:ring-blue-300/15">
              <Image
                src="/icons/logo.svg"
                width={24}
                height={24}
                alt="" // decorative
                priority
                className="opacity-90"
              />
              <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-white/40 to-transparent dark:from-white/10" />
            </span>
            <span className="text-xl font-semibold tracking-tight uppercase bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Horizon
            </span>
          </Link>

          {/* Separator */}
          <div className="mb-2 mt-1 h-px w-full bg-gradient-to-r from-transparent via-blue-200/40 to-transparent dark:via-blue-300/10" role="separator" />

          {/* Nav list */}
          <ul
            className={cn(
              "flex flex-1 flex-col gap-1 overflow-y-auto pr-1",
              // hide scrollbar (keeps scroll functional)
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            )}
          >
            {sidebarLinks.map((item: any) => {
              const isActive =
                pathname === item.route || pathname.startsWith(`${item.route}/`)

              const AutoIcon = getDefaultIconForRoute(item.label, item.route)
              const Icon = item.icon || AutoIcon

              return (
                <li key={item.route}>
                  <Link
                    href={item.route}
                    title={item.label}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2",
                      "transition-all duration-300 ease-out motion-reduce:transition-none",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400/30 dark:focus-visible:ring-blue-300/25",
                      "ring-1 ring-blue-200/40 dark:ring-blue-300/15",
                      "hover:translate-y-[-1px] hover:ring-blue-300/50",
                      // Inactive glass
                      !isActive &&
                        "bg-white/[0.08] dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300",
                      // Active: luminous blue glass
                      isActive && [
                        "bg-white/30 dark:bg-white/[0.12]",
                        "text-neutral-900 dark:text-neutral-50",
                        "shadow-[0_16px_40px_-18px_rgba(30,58,138,0.65)]",
                        "ring-1 ring-blue-500/35 dark:ring-blue-400/25",
                      ],
                      // Left glow indicator
                      'before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1.5 before:-translate-y-1/2 before:rounded-r-full before:content-[""] before:transition-all before:duration-300',
                      isActive
                        ? "before:bg-gradient-to-b before:from-blue-500 before:to-cyan-400 before:opacity-100"
                        : "before:bg-current before:opacity-0 group-hover:before:opacity-30",
                      // Soft gloss sweep
                      "after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-opacity after:duration-300",
                      "after:bg-[linear-gradient(120deg,transparent,rgba(191,219,254,0.22)_20%,transparent_60%)]",
                      "group-hover:after:opacity-100"
                    )}
                  >
                    <span
                      className={cn(
                        "relative flex size-9 items-center justify-center rounded-lg",
                        "ring-1 ring-blue-200/40 dark:ring-blue-300/15 transition-all duration-300",
                        isActive
                          ? "bg-white/60 dark:bg-white/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]"
                          : "bg-white/40 dark:bg-white/5 group-hover:bg-white/60 dark:group-hover:bg-white/10"
                      )}
                      aria-hidden="true"
                    >
                      {item.imgURL ? (
                        <Image
                          src={item.imgURL}
                          alt="" // decorative
                          width={20}
                          height={20}
                          className={cn(
                            "object-contain transition-all duration-300",
                            isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                          )}
                        />
                      ) : (
                        <Icon className={cn("h-5 w-5", isActive ? "opacity-100" : "opacity-90")} />
                      )}
                      {/* Icon gloss */}
                      <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-white/35 to-transparent dark:from-white/10" />
                    </span>

                    <span
                      className={cn(
                        "truncate transition-colors duration-300",
                        isActive ? "font-semibold" : "font-medium"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-4">
            <Footer user={user} />
          </div>
        </nav>

        {/* Bottom vignette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-blue-900/10 to-transparent dark:from-blue-900/25" />
      </section>
    )
  }

  export default Sidebar