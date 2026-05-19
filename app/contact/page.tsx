"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit via a Server Action
    alert("Thank you for your inquiry. Our sales team will contact you shortly.")
  }

  return (
    <div className="container py-12">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-black tracking-tight mb-4">Contact Sales</h1>
        <p className="text-xl text-muted-foreground">
          Ready to automate your facility? Get in touch with our experts to discuss your specific requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Acme Logistics Inc." required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <textarea 
                  id="message" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                  placeholder="Tell us about your facility size, use cases, and timeline..." 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full h-12 text-lg">Submit Inquiry</Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Global Headquarters</h3>
              <p className="text-muted-foreground">
                100 Innovation Drive<br />
                Robotics Park, Tech City<br />
                TC 90210
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Phone</h3>
              <p className="text-muted-foreground">
                Sales: +1 (800) 123-4567<br />
                Support: +1 (800) 987-6543
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Email</h3>
              <p className="text-muted-foreground">
                sales@automach.example.com<br />
                support@automach.example.com
              </p>
            </div>
          </div>
          
          <div className="bg-accent/30 rounded-2xl p-6 mt-8">
            <h4 className="font-bold mb-2">Partner with us</h4>
            <p className="text-sm text-muted-foreground">
              Interested in becoming a distributor or integration partner? Email us at partners@automach.example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
