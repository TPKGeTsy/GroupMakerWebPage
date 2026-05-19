import { Card, CardContent } from "@/components/ui/card"
import { Factory, Warehouse, ShoppingCart, Cpu, CheckCircle2 } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Smart Warehousing",
      description: "Optimize space and speed up order fulfillment with our high-speed AMR fleet and intelligent rack management.",
      icon: <Warehouse size={40} />,
      benefits: ["30% increase in storage density", "2x faster picking speed", "Zero human-forklift collisions"]
    },
    {
      title: "Automotive Manufacturing",
      description: "Seamlessly integrate heavy-duty AGVs into your assembly line for just-in-time material delivery and chassis transport.",
      icon: <Factory size={40} />,
      benefits: ["Sync with production schedule", "Handles up to 5,000kg", "Flexible line reconfiguration"]
    },
    {
      title: "Retail Logistics",
      description: "Scale your e-commerce operations during peak seasons with robots that handle sorting and micro-fulfillment center logistics.",
      icon: <ShoppingCart size={40} />,
      benefits: ["Rapid deployment (under 4 weeks)", "Scalable fleet size", "Integrates with existing WMS"]
    }
  ]

  return (
    <div className="container py-12 pb-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-black tracking-tight mb-6">Industrial Solutions</h1>
        <p className="text-xl text-muted-foreground">
          We don't just sell robots. We provide end-to-end automation strategies tailored to your specific industrial challenges.
        </p>
      </div>

      <div className="space-y-24">
        {solutions.map((solution, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="flex-1 space-y-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                {solution.icon}
              </div>
              <h2 className="text-4xl font-bold">{solution.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
              <div className="grid grid-cols-1 gap-3">
                 {solution.benefits.map((benefit, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-primary shrink-0" />
                     <span className="font-medium">{benefit}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="flex-1 w-full aspect-video bg-accent/20 rounded-[2rem] border-2 border-dashed border-primary/20 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
               <div className="text-primary/40 text-center space-y-2 group-hover:scale-110 transition-transform">
                 <Cpu size={64} className="mx-auto" />
                 <p className="font-bold">Solution Visualization</p>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-primary text-primary-foreground rounded-[3rem] p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Contact our solution architects today for a free facility assessment and ROI projection.
        </p>
        <button className="bg-background text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
          Schedule Free Assessment
        </button>
      </div>
    </div>
  )
}
