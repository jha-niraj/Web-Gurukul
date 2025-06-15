"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "@/actions/contact.action"
import SmoothScroll from "@/components/smoothscroll"

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		school: "",
		message: "",
	})
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isPending, startTransition] = useTransition()
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)
		startTransition(async () => {
			const res = await submitContactForm(formData)
			if (res.success) {
				setIsSubmitted(true)
				setFormData({
					name: "",
					email: "",
					phone: "",
					school: "",
					message: "",
				})
				setTimeout(() => setIsSubmitted(false), 3000)
			} else {
				setError(res.error || "Something went wrong.")
			}
		})
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<SmoothScroll>
			<div className="min-h-screen">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<motion.div
							className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 border border-blue-200 text-blue-800 text-sm font-medium mb-2"
							whileHover={{ scale: 1.05 }}
						>
							<Phone className="w-4 h-4 mr-2" />
							Get in Touch
						</motion.div>
						<h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
							Let's Transform Your
							<span className="block bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
								School Together
							</span>
						</h1>
						<p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
							Ready to revolutionize your school management? Our team is here to help you get started with EduSathi and
							answer all your questions.
						</p>
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
								<h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
								{
									isSubmitted ? (
										<motion.div
											className="text-center py-12"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5 }}
										>
											<CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
											<h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
											<p className="text-gray-600">We'll get back to you within 24 hours.</p>
										</motion.div>
									) : (
										<form onSubmit={handleSubmit} className="space-y-6">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
													<Input
														type="text"
														name="name"
														value={formData.name}
														onChange={handleChange}
														required
														className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
														placeholder="Your full name"
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
													<Input
														type="email"
														name="email"
														value={formData.email}
														onChange={handleChange}
														required
														className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
														placeholder="your@email.com"
													/>
												</div>
											</div>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
													<Input
														type="tel"
														name="phone"
														value={formData.phone}
														onChange={handleChange}
														className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
														placeholder="+977-XXX-XXXXXXX"
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
													<Input
														type="text"
														name="school"
														value={formData.school}
														onChange={handleChange}
														className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
														placeholder="Your school name"
													/>
												</div>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
												<Textarea
													name="message"
													value={formData.message}
													onChange={handleChange}
													required
													rows={6}
													className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
													placeholder="Tell us about your school and how we can help..."
												/>
											</div>
											{
												error && (
													<div className="text-red-600 text-sm mb-2">{error}</div>
												)
											}
											<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
												<Button
													type="submit"
													className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
													disabled={isPending}
												>
													<Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
													{isPending ? "Sending..." : "Send Message"}
												</Button>
											</motion.div>
										</form>
									)
								}
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="space-y-8"
						>
							<div className="space-y-6">
								{
									[
										{
											icon: Phone,
											title: "Phone",
											details: ["+977-1-4567890", "+977-1-4567891"],
											color: "blue",
										},
										{
											icon: Mail,
											title: "Email",
											details: ["hello@edusathi.com", "support@edusathi.com"],
											color: "emerald",
										},
										{
											icon: MapPin,
											title: "Office",
											details: ["Kathmandu, Nepal", "Thamel, Ward No. 26"],
											color: "blue",
										},
										{
											icon: Clock,
											title: "Business Hours",
											details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
											color: "emerald",
										},
									].map((contact, index) => (
										<motion.div
											key={index}
											className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
											whileHover={{ scale: 1.02 }}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.6 + index * 0.1 }}
										>
											<div className="flex items-start space-x-4">
												<div
													className={`w-12 h-12 bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 rounded-xl flex items-center justify-center shadow-lg`}
												>
													<contact.icon className="w-6 h-6 text-white" />
												</div>
												<div>
													<h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
													{
														contact.details.map((detail, detailIndex) => (
															<p key={detailIndex} className="text-gray-600">
																{detail}
															</p>
														))
													}
												</div>
											</div>
										</motion.div>
									))
								}
							</div>
							<motion.div
								className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
							>
								<h3 className="text-2xl font-bold mb-4">Quick Response Guarantee</h3>
								<p className="text-blue-100 mb-4">We understand that your time is valuable. That's why we guarantee:</p>
								<ul className="space-y-2 text-blue-100">
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 mr-2 text-emerald-300" />
										Response within 2 hours during business hours
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 mr-2 text-emerald-300" />
										Free consultation call within 24 hours
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 mr-2 text-emerald-300" />
										Personalized demo scheduled at your convenience
									</li>
								</ul>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</SmoothScroll>
	)
}

export default ContactPage
