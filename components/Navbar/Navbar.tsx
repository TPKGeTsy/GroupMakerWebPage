import Logo from "./Logo"
import { Darkmode } from "./Darkmode"
import DropdownListMenu1 from "./DropdownListMenu1"
import Link from "next/link"
import { links } from "@/utils/link"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex flex-col justify-between py-4 sm:flex-row sm:items-center gap-4">
        <Logo />
        <div className="hidden md:flex gap-6 items-center flex-1 justify-center">
           {links.map((link) => (
             <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
               {link.label}
             </Link>
           ))}
        </div>
        <div className="flex items-center gap-4">
          <Darkmode />
          <div className="h-8 w-[1px] bg-border hidden sm:block" />
          <DropdownListMenu1 />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
