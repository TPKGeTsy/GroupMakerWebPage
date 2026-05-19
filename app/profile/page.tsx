import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MessageSquare, Calendar } from "lucide-react"

export default async function ProfilePage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  const user = await currentUser()
  if (!user) {
    redirect("/")
  }

  // We check if this user has any inquiries using their email
  const userEmail = user.primaryEmailAddress?.emailAddress || ""
  
  const inquiryCount = await prisma.inquiry.count({
    where: { email: userEmail }
  })

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black tracking-tighter mb-2">My Profile</h1>
        <p className="text-muted-foreground">Manage your account and view your inquiry history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="md:col-span-1 border-primary/20 bg-primary/5">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <img 
              src={user.imageUrl} 
              alt={user.firstName || 'User'} 
              className="w-32 h-32 rounded-full border-4 border-background shadow-lg mb-4"
            />
            <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
            <p className="text-muted-foreground text-sm">{userEmail}</p>
          </CardContent>
        </Card>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="group hover:border-primary transition-colors cursor-default">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2 font-medium">
                <MessageSquare size={16} /> Total Inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-6xl font-black text-primary group-hover:scale-110 transition-transform origin-left">
                {inquiryCount}
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:border-primary transition-colors cursor-default">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2 font-medium">
                <Calendar size={16} /> Member Since
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mt-2">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
