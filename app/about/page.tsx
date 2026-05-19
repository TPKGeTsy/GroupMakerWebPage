import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-black tracking-tight mb-4">About AutoMach</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Pioneering the future of industrial automation. We engineer intelligent robots that transform how the world moves materials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <Card className="text-center p-6 border-none bg-accent/20">
          <CardContent className="pt-6">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">To accelerate global supply chains through accessible, reliable, and intelligent automation solutions.</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6 border-none bg-accent/20">
          <CardContent className="pt-6">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-muted-foreground">Founded by robotics engineers and logistics experts dedicated to solving real-world operational challenges.</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6 border-none bg-accent/20">
          <CardContent className="pt-6">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality First</h3>
            <p className="text-muted-foreground">Every AGV and AMR is rigorously tested in our simulated factory environment before deployment.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/5 rounded-3xl p-10 md:p-16">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-6">Our Story</h2>
           <p className="text-lg text-muted-foreground mb-4">
             Started in 2018, AutoMach grew from a small university robotics project into a leading provider of enterprise automation hardware. 
             We realized that traditional conveyors and manual forklifts were bottlenecking modern e-commerce and manufacturing demands.
           </p>
           <p className="text-lg text-muted-foreground">
             Today, our fleet of AMRs and AGVs operate in over 500 facilities worldwide, moving millions of tons of goods safely and efficiently every single day.
           </p>
        </div>
      </div>
    </div>
  )
}
