"use client"

import { motion } from "framer-motion"
import { Users, CreditCard, BarChart3, MessageCircle, Shield, Zap, Globe, Lock } from "lucide-react"

const features = [
	{
		icon: Users,
		title: "Smart Student Management",
		description:
			"Comprehensive student profiles, automated attendance tracking, and intelligent class management with advanced analytics.",
		color: "from-blue-600 to-blue-700",
		bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-150",
		iconBg: "bg-blue-500",
		stats: "1000+ Students",
	},
	{
		icon: CreditCard,
		title: "Automated Fee Collection",
		description:
			"Streamlined billing system with multiple payment gateways, automatic reminders, and real-time financial reporting.",
		color: "from-emerald-600 to-emerald-700",
		bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-150",
		iconBg: "bg-emerald-500",
		stats: "NPR 50M+ Processed",
	},
	{
		icon: BarChart3,
		title: "Academic Analytics",
		description:
			"Advanced progress tracking, automated report cards, and detailed performance analytics with predictive insights.",
		color: "from-purple-600 to-purple-700",
		bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-150",
		iconBg: "bg-purple-500",
		stats: "98% Accuracy",
	},
	{
		icon: MessageCircle,
		title: "Parent Communication",
		description:
			"Real-time notifications, parent portal access, and seamless communication channels for better engagement.",
		color: "from-orange-600 to-orange-700",
		bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-150",
		iconBg: "bg-orange-500",
		stats: "24/7 Connected",
	},
]

const additionalFeatures = [
	{ icon: Shield, text: "Enterprise Security" },
	{ icon: Zap, text: "Lightning Fast" },
	{ icon: Globe, text: "Cloud Based" },
	{ icon: Lock, text: "Data Privacy" },
]

const FeaturesOverview = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<section className="py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 border border-blue-200 text-blue-800 text-sm font-medium mb-2"
						whileHover={{ scale: 1.05 }}
					>
						<Shield className="w-4 h-4 mr-2" />
						Complete School Management Ecosystem
					</motion.div>
					<motion.h2
						className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Everything Your School
						<span className="block bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
							Needs to Succeed
						</span>
					</motion.h2>
					<motion.p
						className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Transform your educational institution with our comprehensive platform designed specifically for Nepalese
						schools. From student management to financial tracking, we've got you covered.
					</motion.p>
				</motion.div>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{
						features.map((feature, index) => (
							<motion.div
								key={index}
								className="relative group cursor-pointer"
								variants={itemVariants}
								whileHover={{
									scale: 1.05,
									transition: { type: "spring", stiffness: 300 },
								}}
							>
								<div
									className={`relative p-8 rounded-3xl border border-gray-200 ${feature.bgColor} hover:shadow-2xl transition-all duration-500 h-full`}
								>
									<motion.div
										className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 0.1 }}
									/>
									<motion.div
										className={`relative w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
										whileHover={{
											scale: 1.1,
											rotate: [0, -10, 10, 0],
											transition: { duration: 0.3 },
										}}
									>
										<feature.icon className="w-8 h-8 text-white" />
									</motion.div>
									<div className="relative space-y-4">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
												{feature.title}
											</h3>
											<span className="text-xs font-medium text-gray-500 bg-white/60 px-2 py-1 rounded-full">
												{feature.stats}
											</span>
										</div>
										<p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
											{feature.description}
										</p>
									</div>
									<motion.div
										className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
										initial={{ x: 10, opacity: 0 }}
										whileHover={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.3 }}
									>
										<div
											className={`w-10 h-10 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
										>
											<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
										</div>
									</motion.div>
								</div>
							</motion.div>
						))
					}
				</motion.div>
				<motion.div
					className="bg-gradient-to-r from-black via-emerald-900 to-black rounded-3xl p-12 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.h3
						className="text-3xl font-bold text-white mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						Built for the Modern School
					</motion.h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{
							additionalFeatures.map((item, index) => (
								<motion.div
									key={index}
									className="flex flex-col items-center space-y-3 group"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 + index * 0.1 }}
									whileHover={{ scale: 1.1 }}
								>
									<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
										<item.icon className="w-6 h-6 text-white" />
									</div>
									<span className="text-white font-medium">{item.text}</span>
								</motion.div>
							))
						}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default FeaturesOverview;