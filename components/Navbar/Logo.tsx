import Link from "next/link"
import { Factory } from "lucide-react"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group transition-all">
      <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
        <Factory className="text-primary-foreground h-6 w-6" />
      </div>
      <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        AutoMach
      </span>
    </Link>
  )
}
export default Logo
