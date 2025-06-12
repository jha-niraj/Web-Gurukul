"use server"

import { prisma } from "@/lib/prisma"

export async function submitContactForm(formData: {
    name: string
    email: string
    phone?: string
    school?: string
    message: string
}) {
    try {
        await prisma.contact.create({
            data: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                school: formData.school,
                message: formData.message,
            },
        })
        return { success: true }
    } catch (error) {
        return { success: false, error: "Failed to submit contact form." }
    }
}