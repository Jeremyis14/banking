"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
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
  User,
  HelpCircle,
  Bookmark,
  Bell,
  Calendar,
  MessageSquare,
  FolderClosed,
  FileText,
  Circle,
} from "lucide-react"

// Types
type MaybeString = string | null | undefined

type UserType = {
  name?: MaybeString
  email?: MaybeString
  image?: MaybeString
}

type MobileNavProps = {
  user?: UserType | null
  onSignOut?: () => void
}

type SidebarLink = {
  label: string
  route: string
  icon?: React.ComponentType<{ className?: string }>
  imgUrl?: string
}

const getInitials = (name?: MaybeString) => {
  if (!name) return "?"
  const parts = name.trim().split(" ").filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase()
  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase()
}

// Tries to provide a tasteful default icon for common banking routes/labels
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
  if (/(profile|account|user)/.test(key)) return User
  if (/(help|support|docs|faq)/.test(key)) return HelpCircle
  if (/(saved|favorites|bookmarks)/.test(key)) return Bookmark
  if (/(alerts|notifications)/.test(key)) return Bell
  if (/(calendar|schedule)/.test(key)) return Calendar
  if (/(messages|inbox|chat)/.test(key)) return MessageSquare
  if (/(files|documents|folders)/.test(key)) return FolderClosed
  if (/(statements|docs|pdf)/.test(key)) return FileText

  return Circle
}

const MobileNav: React.FC<MobileNavProps> = ({ user, onSignOut }) => {
  const pathname = usePathname()

  const links: SidebarLink[] = Array.isArray(sidebarLinks)
    ? (sidebarLinks as SidebarLink[])
    : []

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm",
            "hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "transition-colors"
          )}
        >
          <span className="sr-only">Open navigation</span>
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span className="block h-0.5 w-6 rounded bg-current" />
            <span className="block h-0.5 w-6 rounded bg-current" />
            <span className="block h-0.5 w-6 rounded bg-current" />
          </span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className={cn(
          "p-0 sm:max-w-xs w-[86vw] max-w-[22rem]",
          "border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
          "motion-reduce:transition-none"
        )}
      >
        <div className="flex h-full flex-col">
          <SheetHeader className="p-0">
            {/* Header with blue bankGradient overlay (uses a dedicated class if present, with fallbacks) */}
            <div
              className={cn(
                "relative overflow-hidden",
                "bankGradient", // if your CSS defines this, it will take effect
                "bg-gradient-to-br from-sky-600/25 via-blue-600/20 to-indigo-600/15"
              )}
              style={{
                paddingTop: "calc(env(safe-area-inset-top, 0px) + 16px)",
              }}
            >
              {/* Decorative glow accents */}
              <div className="pointer-events-none absolute -left-10 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl" />
              <div className="pointer-events-none absolute -right-6 top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="px-4 pb-6 pt-4">
                <div className="flex items-end gap-3">
                  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-muted ring-2 ring-background shadow-sm">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt={user?.name ? `${user.name} avatar` : "User avatar"}
                        fill
                        sizes="56px"
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <span className="text-sm font-semibold text-foreground">
                        {getInitials(user?.name || user?.email || undefined)}
                      </span>
                    )}
                  </div>

                  <div className="mb-1 min-w-0">
                    <p className="truncate text-base font-semibold text-foreground">
                      {user?.name || "Welcome"}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {user?.email || "Browse the app"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-2 pt-3">
              <SheetTitle className="text-left text-[13px] font-medium tracking-wide text-muted-foreground">
                Navigation
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* NAV */}
          <nav aria-label="Primary" className="flex-1 overflow-y-auto px-2 pb-4 pt-1">
            {links.length === 0 ? (
              <div className="px-2 py-3 text-sm text-muted-foreground">
                No navigation links configured.
              </div>
            ) : (
              <ul className="flex flex-col gap-1.5">
                {links.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    (link.route !== "/" && pathname?.startsWith(link.route))

                  const ProvidedIcon = link.icon
                  const AutoIcon = getDefaultIconForRoute(link.label, link.route)
                  const Icon = ProvidedIcon || AutoIcon

                  return (
                    <li key={link.route}>
                      <SheetClose asChild>
                        <Link
                          href={link.route}
                          prefetch={false}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "group relative flex items-center gap-3 rounded-md px-3 py-3 text-[15px] font-medium transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            isActive
                              ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_theme(colors.primary/20)]"
                              : "text-foreground/90 hover:bg-accent/60 hover:text-accent-foreground"
                          )}
                        >
                          {/* Active indicator bar */}
                          <span
                            className={cn(
                              "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r bg-primary transition-opacity",
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                            )}
                            aria-hidden="true"
                          />

                          <span
                            className={cn(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors",
                              isActive
                                ? "bg-primary/15 text-primary"
                                : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                            )}
                            aria-hidden="true"
                          >
                            {link.imgUrl ? (
                              <Image
                                src={link.imgUrl}
                                alt=""
                                width={20}
                                height={20}
                                className="object-contain"
                                aria-hidden="true"
                              />
                            ) : (
                              <Icon className="h-5 w-5" />
                            )}
                          </span>

                          <span className="truncate">{link.label}</span>
                        </Link>
                      </SheetClose>
                    </li>
                  )
                })}
              </ul>
            )}
          </nav>

          {/* FOOTER */}
          <div
            className="border-t border-border/80 bg-background/80 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            style={{
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)",
            }}
          >
            {user ? (
              <div className="flex items-center justify-between gap-2">
                <SheetClose asChild>
                  <Link
                    href="/settings"
                    className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Settings
                  </Link>
                </SheetClose>
                <button
                  type="button"
                  onClick={onSignOut}
                  className="inline-flex items-center rounded-md bg-destructive/90 px-3 py-2 text-sm font-medium text-destructive-foreground shadow-sm hover:bg-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-2">
                <SheetClose asChild>
                  <Link
                    href="/sign-in"
                    className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Sign in
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/sign-up"
                    className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Create account
                  </Link>
                </SheetClose>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav