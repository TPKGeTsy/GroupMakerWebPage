"use server"

import { prisma } from "./prisma"
import { inquirySchema } from "./schemas"
import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

// Check if current user is admin
async function isAdmin() {
  const user = await currentUser()
  return user?.publicMetadata?.role === 'admin'
}

export async function submitInquiryAction(data: {
  name: string
  email: string
  company?: string
  message: string
}) {
  const validation = inquirySchema.safeParse(data)
  
  if (!validation.success) {
    return { error: validation.error.issues[0].message }
  }

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
      }
    })
    return { success: true, inquiryId: inquiry.id }
  } catch (error) {
    console.error('Error saving inquiry:', error)
    return { error: 'Failed to submit inquiry' }
  }
}

// PRODUCT ACTIONS
export async function getProductsAction() {
  try {
    return await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function createProductAction(data: {
  name: string
  description: string
  categoryId: string
  specifications?: any
  imageUrl?: string
}) {
  if (!(await isAdmin())) {
    return { error: "Unauthorized: Admin access required" }
  }

  try {
    const product = await prisma.product.create({
      data
    })
    revalidatePath('/products')
    return { success: true, productId: product.id }
  } catch (error) {
    console.error('Error creating product:', error)
    return { error: "Failed to create product" }
  }
}

export async function getCategoriesAction() {
  try {
    return await prisma.category.findMany()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function createCategoryAction(name: string, description?: string) {
  if (!(await isAdmin())) {
    return { error: "Unauthorized" }
  }

  try {
    const category = await prisma.category.create({
      data: { name, description }
    })
    return { success: true, categoryId: category.id }
  } catch (error) {
    return { error: "Failed to create category" }
  }
}
