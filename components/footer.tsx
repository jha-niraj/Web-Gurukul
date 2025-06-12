"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
    const footerLinks = {
        product: [
            { name: "Features", href: "/features" },
            { name: "Pricing", href: "/pricing" },
            { name: "Demo", href: "/demo" },
            { name: "API", href: "/api" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Blog", href: "/blog" },
            { name: "Press", href: "/press" },
        ],
        support: [
            { name: "Help Center", href: "/help" },
            { name: "Contact", href: "/contact" },
            { name: "Documentation", href: "/docs" },
            { name: "Status", href: "/status" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
            { name: "GDPR", href: "/gdpr" },
        ],
    }

    const socialLinks = [
        { name: "Facebook", href: "#", icon: Facebook },
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "LinkedIn", href: "#", icon: Linkedin },
        { name: "Instagram", href: "#", icon: Instagram },
    ]

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Stay Updated with{" "}
                            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                WebGurukul
                            </span>
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Get the latest updates on new features, educational insights, and platform improvements delivered to your
                            inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-teal-400"
                            />
                            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6">
                                Subscribe
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <BookOpen className="h-7 w-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                    WebGurukul
                                </h2>
                                <p className="text-sm text-gray-400">Smart School Management</p>
                            </div>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Empowering educational institutions across Nepal with cutting-edge technology to streamline operations,
                            enhance communication, and improve student outcomes.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-teal-400" />
                                <span>Kathmandu, Nepal</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-5 w-5 text-teal-400" />
                                <span>+977-1-4567890</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-5 w-5 text-teal-400" />
                                <span>hello@webgurukul.com</span>
                            </div>
                        </div>
                    </motion.div>
                    {
                        Object.entries(footerLinks).map(([category, links], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <h3 className="text-lg font-semibold mb-4 capitalize text-white">{category}</h3>
                                <ul className="space-y-3">
                                    {
                                        links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.div
                            className="text-center md:text-left"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-gray-400 text-sm">© 2024 WebGurukul. All rights reserved. Made with ❤️ in Nepal.</p>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {
                                socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                                    </Link>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    )
}