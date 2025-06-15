"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const CTASection = () => {
	return (
		<section className="py-24 bg-gradient-to-br from-black-900 via-emerald-800 to-black-900 relative overflow-hidden">
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
						backgroundSize: "40px 40px",
					}}
				></div>
			</div>
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.h2
						className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Ready to Transform
						<span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
							Your School Today?
						</span>
					</motion.h2>
					<motion.p
						className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Join hundreds of schools across Nepal who have already revolutionized their operations with EduSathi. Start
						your free trial today and see the difference in just 24 hours.
					</motion.p>
					<motion.div
						className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								size="lg"
								className="bg-white text-blue-900 hover:bg-gray-100 cursor-pointer px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
							>
								Start Free Trial
								<ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
							</Button>
						</motion.div>
						<Link href="/contactus">
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-white text-black	dark:text-white cursor-pointer hover:bg-white hover:text-blue-900 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
								>
									<Phone className="w-5 h-5 mr-2.5" />
									Schedule Demo
								</Button>
							</motion.div>
						</Link>
					</motion.div>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						{
							[
								{ icon: Phone, title: "Call Us", subtitle: "+977-1-4567890", color: "emerald" },
								{ icon: Mail, title: "Email Us", subtitle: "hello@edusathi.com", color: "blue" },
								{ icon: MessageCircle, title: "Live Chat", subtitle: "Available 24/7", color: "emerald" },
							].map((contact, index) => (
								<motion.div
									key={index}
									className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
									whileHover={{
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.15)",
									}}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.9 + index * 0.1 }}
								>
									<contact.icon className={`w-8 h-8 text-${contact.color}-400 dark:text-white mx-auto mb-3`} />
									<h3 className="text-white font-semibold mb-1">{contact.title}</h3>
									<p className="text-blue-200 text-sm">{contact.subtitle}</p>
								</motion.div>
							))
						}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default CTASection;