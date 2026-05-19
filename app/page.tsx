import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Settings, Truck, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary/5">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              <Zap size={16} />
              <span>Next Generation Factory Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
              REVOLUTIONIZE <br />
              YOUR LOGISTICS WITH <br />
              <span className="text-primary">AGV & AMR</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Automate your warehouse and manufacturing floors with our state-of-the-art Autonomous Mobile Robots (AMR) and Automated Guided Vehicles (AGV). Maximize efficiency, safety, and productivity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="h-14 px-8 text-lg font-bold rounded-2xl">
                <Link href="/products">View Products →</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg font-bold rounded-2xl">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-8 bg-card rounded-3xl border hover:border-primary/50 transition-all hover:shadow-xl group">
          <div className="bg-primary/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Truck size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Automated Material Handling</h3>
          <p className="text-muted-foreground">Seamlessly transport goods across your facility without human intervention, reducing labor costs and errors.</p>
        </div>

        <div className="p-8 bg-card rounded-3xl border hover:border-primary/50 transition-all hover:shadow-xl group">
          <div className="bg-primary/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Cpu size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Smart Navigation (SLAM)</h3>
          <p className="text-muted-foreground">Our AMRs use advanced LiDAR and vision systems to navigate dynamically around obstacles.</p>
        </div>

        <div className="p-8 bg-card rounded-3xl border hover:border-primary/50 transition-all hover:shadow-xl group">
          <div className="bg-primary/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Settings size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Fleet Management System</h3>
          <p className="text-muted-foreground">Centralized software to orchestrate hundreds of robots, optimize routes, and monitor battery levels.</p>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="container">
        <div className="bg-primary text-primary-foreground rounded-[3rem] p-12 text-center flex flex-col md:flex-row justify-around gap-8">
           <div>
             <h4 className="text-5xl font-black mb-2">99.9%</h4>
             <p className="text-primary-foreground/80 font-medium">Uptime Guarantee</p>
           </div>
           <div>
             <h4 className="text-5xl font-black mb-2">500+</h4>
             <p className="text-primary-foreground/80 font-medium">Deployments Worldwide</p>
           </div>
           <div>
             <h4 className="text-5xl font-black mb-2">24/7</h4>
             <p className="text-primary-foreground/80 font-medium">Support & Maintenance</p>
           </div>
        </div>
      </section>
    </div>
  )
}
