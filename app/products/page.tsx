import { getProductsAction } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Cpu, Zap, BadgeCheck, Plus, Settings } from "lucide-react"
import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"

export default async function ProductsPage() {
  const products = await getProductsAction()
  const user = await currentUser()
  const isAdmin = user?.publicMetadata?.role === 'admin'

  // Default icons mapping
  const getIcon = (name: string) => {
    const lowerName = name.toLowerCase()
    if (lowerName.includes('amr')) return <Zap size={40} className="text-primary" />
    if (lowerName.includes('lift') || lowerName.includes('forklift')) return <Cpu size={40} className="text-primary" />
    return <Truck size={40} className="text-primary" />
  }

  // Fallback products if DB is empty
  const displayProducts = products.length > 0 ? products : [
    {
      id: "agv-heavy",
      name: "Titan AGV-5000 (Sample)",
      description: "Heavy-duty Automated Guided Vehicle designed for transporting large pallets and machinery components up to 5,000 kg.",
      specifications: ["Max Load: 5000kg", "Speed: 1.5m/s", "Nav: Magnetic/Laser"],
    }
  ]

  return (
    <div className="container py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover our range of advanced automated machinery. Built for reliability, efficiency, and seamless integration.
          </p>
        </div>
        {isAdmin && (
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/admin/products/new"><Plus className="mr-2 h-4 w-4" /> Add Product</Link>
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProducts.map((product) => (
          <Card key={product.id} className="flex flex-col group hover:border-primary transition-colors border-2">
            <CardHeader>
              <div className="mb-4 bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(product.name)}
              </div>
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <CardDescription className="text-base mt-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {Array.isArray(product.specifications) && (product.specifications as string[]).map((spec: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BadgeCheck size={16} className="text-primary" />
                    {spec}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Request Quote</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {products.length === 0 && (
         <div className="mt-12 p-8 border-2 border-dashed rounded-3xl text-center bg-accent/10">
            <p className="text-muted-foreground italic">Connect your database to see real-time products here.</p>
         </div>
      )}
    </div>
  )
}
