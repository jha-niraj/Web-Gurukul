"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Building, Users, Shield, Smartphone, TrendingUp, Clock, Sparkles } from "lucide-react"

const pricingPlans = [
	{
		name: "Basic",
		subtitle: "Perfect for Small Rural Schools",
		price: "NPR 4,500",
		originalPrice: "NPR 6,000",
		period: "/month",
		description: "Complete school management for 300-500 students",
		icon: Zap,
		color: "blue",
		popular: false,
		studentRange: "300-500 students",
		setupFee: "NPR 15,000",
		savings: "25% OFF",
		features: [
			"Complete billing system with all payment methods",
			"Basic progress card generation (standard templates)",
			"Student management (up to 500 students)",
			"2 admin users included",
			"Email support",
			"Basic financial reports",
			"Mobile-responsive web interface",
			"Monthly data backup",
		],
		highlights: ["Cash, Bank, Online Payments", "Automated Bill Generation", "Standard Report Cards"],
	},
	{
		name: "Standard",
		subtitle: "Ideal for Medium Rural Schools",
		price: "NPR 7,500",
		originalPrice: "NPR 10,000",
		period: "/month",
		description: "Advanced features for growing institutions",
		icon: Star,
		color: "emerald",
		popular: true,
		studentRange: "500-700 students",
		setupFee: "NPR 25,000",
		savings: "25% OFF",
		features: [
			"All Basic features included",
			"Advanced progress card templates with customization",
			"Parent communication (Email + SMS)",
			"Advanced reporting and analytics",
			"5 admin users included",
			"Class ranking and grade analytics",
			"Attendance integration",
			"Phone + Email support",
			"Weekly data backup",
			"Staff training sessions",
		],
		highlights: ["SMS Integration", "Custom Templates", "Advanced Analytics"],
	},
	{
		name: "Premium",
		subtitle: "Comprehensive Solution for Large Institutions",
		price: "NPR 12,000",
		originalPrice: "NPR 16,000",
		period: "/month",
		description: "Enterprise-grade features for 600+ students",
		icon: Crown,
		color: "purple",
		popular: false,
		studentRange: "600+ students",
		setupFee: "NPR 35,000",
		savings: "25% OFF",
		features: [
			"All Standard features included",
			"WhatsApp integration for parent communication",
			"Custom report card designs",
			"Advanced financial analytics",
			"Unlimited admin users",
			"Priority support (Phone + WhatsApp)",
			"Daily data backup",
			"Monthly training sessions",
			"Custom feature requests (2 per year)",
			"Dedicated account manager",
		],
		highlights: ["WhatsApp Integration", "Custom Designs", "Priority Support"],
	},
]

const annualDiscounts = [
	{ period: "6 months", discount: "5%", badge: "Save NPR 1,350-3,600" },
	{ period: "12 months", discount: "15%", badge: "Save NPR 8,100-21,600" },
	{ period: "24 months", discount: "25%", badge: "Save NPR 27,000-72,000" },
]

const valueProps = [
	{
		icon: Smartphone,
		title: "Modern Technology",
		description: "React/Next.js based system vs older PHP solutions",
	},
	{
		icon: Shield,
		title: "Secure & Reliable",
		description: "Bank-level security with automated backups",
	},
	{
		icon: Users,
		title: "Local Support",
		description: "Nepali language support with on-site training",
	},
	{
		icon: TrendingUp,
		title: "Real-time Updates",
		description: "Modern real-time interface with live notifications",
	},
]

const PricingSection = () => {
	return (
		<section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
			<div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200 text-teal-800 text-sm font-medium mb-8"
						whileHover={{ scale: 1.05 }}
					>
						<Building className="w-4 h-4 mr-2" />
						Transparent Pricing for Nepal's Schools
					</motion.div>
					<motion.h2
						className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Choose Your Perfect
						<span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
							School Management Plan
						</span>
					</motion.h2>
					<motion.p
						className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Designed specifically for rural schools in Nepal. Start with a 3-month free trial and scale as you grow.
					</motion.p>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						{
							annualDiscounts.map((discount, index) => (
								<div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
									<div className="text-center">
										<Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white mb-2">
											{discount.discount} OFF
										</Badge>
										<p className="font-semibold text-gray-900">{discount.period} advance</p>
										<p className="text-sm text-gray-600">{discount.badge}</p>
									</div>
								</div>
							))
						}
					</motion.div>
				</motion.div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
					{
						pricingPlans.map((plan, index) => (
							<motion.div
								key={index}
								className={`relative rounded-3xl border-2 p-8 ${plan.popular
										? "border-emerald-500 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 shadow-2xl scale-105 z-10"
										: "border-gray-200 bg-white shadow-lg hover:shadow-xl"
									} transition-all duration-300 group`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{
									scale: plan.popular ? 1.05 : 1.02,
									transition: { type: "spring", stiffness: 300 },
								}}
							>
								{
									plan.popular && (
										<motion.div
											className="absolute -top-4 left-1/2 transform -translate-x-1/2"
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
										>
											<div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
												<Star className="w-4 h-4 mr-1 fill-current" />
												Most Popular
											</div>
										</motion.div>
									)
								}
								<div className="absolute top-6 right-6">
									<Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">{plan.savings}</Badge>
								</div>
								<div className="text-center mb-8">
									<motion.div
										className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
										whileHover={{
											rotate: [0, -10, 10, 0],
											transition: { duration: 0.3 },
										}}
									>
										<plan.icon className="w-10 h-10 text-white" />
									</motion.div>
									<h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
									<p className="text-teal-600 font-semibold mb-2">{plan.subtitle}</p>
									<p className="text-gray-600 mb-4">{plan.description}</p>
									<div className="flex items-center justify-center mb-4">
										<span className="text-gray-400 line-through text-lg mr-2">{plan.originalPrice}</span>
										<span className="text-5xl font-bold text-gray-900">{plan.price}</span>
										<span className="text-gray-600 ml-1">{plan.period}</span>
									</div>
									<div className="space-y-2">
										<Badge variant="outline" className="text-xs">
											{plan.studentRange}
										</Badge>
										<p className="text-sm text-gray-500">Setup: {plan.setupFee} (one-time)</p>
									</div>
								</div>
								<div className="mb-6">
									<h4 className="font-semibold text-gray-900 mb-3 text-center">Key Features</h4>
									<div className="flex flex-wrap gap-2 justify-center">
										{
											plan.highlights.map((highlight, i) => (
												<Badge key={i} className={`bg-${plan.color}-100 text-${plan.color}-800 text-xs`}>
													{highlight}
												</Badge>
											))
										}
									</div>
								</div>
								<div className="space-y-4 mb-8">
									{
										plan.features.map((feature, featureIndex) => (
											<motion.div
												key={featureIndex}
												className="flex items-start space-x-3"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
											>
												<Check className={`w-5 h-5 text-${plan.color}-500 flex-shrink-0 mt-0.5`} />
												<span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
											</motion.div>
										))
									}
								</div>
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button
										className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${plan.popular
												? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl"
												: `bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 hover:from-${plan.color}-600 hover:to-${plan.color}-700 text-white shadow-lg hover:shadow-xl`
											}`}
									>
										{plan.popular ? "Start 3-Month Free Trial" : "Get Started"}
									</Button>
								</motion.div>
								<div className="mt-6 text-center">
									<p className="text-xs text-gray-500">
										Includes {plan.popular ? "priority" : "standard"} support & training
									</p>
								</div>
							</motion.div>
						))
					}
				</div>
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose WebGurukul?</h3>
						<p className="text-xl text-gray-600">Built specifically for Nepal's educational landscape</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{
							valueProps.map((prop, index) => (
								<motion.div
									key={index}
									className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.05 }}
								>
									<div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
										<prop.icon className="w-8 h-8 text-white" />
									</div>
									<h4 className="text-lg font-bold text-gray-900 mb-2">{prop.title}</h4>
									<p className="text-gray-600 text-sm leading-relaxed">{prop.description}</p>
								</motion.div>
							))
						}
					</div>
				</motion.div>
				<motion.div
					className="bg-gradient-to-r from-gray-900 to-teal-900 rounded-3xl p-12 text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="text-3xl font-bold text-white mb-8">Compare with Other Solutions</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<h4 className="text-white font-semibold mb-2">e-School Nepal</h4>
							<p className="text-teal-200 text-2xl font-bold mb-2">NPR 260-780</p>
							<p className="text-teal-100 text-sm">per student/month</p>
						</div>
						<div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-6 border-2 border-white transform scale-105">
							<div className="flex items-center justify-center mb-2">
								<Crown className="w-5 h-5 text-white mr-2" />
								<h4 className="text-white font-semibold">WebGurukul</h4>
							</div>
							<p className="text-white text-2xl font-bold mb-2">NPR 9-20</p>
							<p className="text-teal-100 text-sm">per student/month</p>
							<Badge className="bg-white text-teal-600 mt-2">Best Value</Badge>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<h4 className="text-white font-semibold mb-2">Traditional Systems</h4>
							<p className="text-teal-200 text-2xl font-bold mb-2">NPR 30K-60K</p>
							<p className="text-teal-100 text-sm">one-time (limited features)</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
						<div className="flex items-center space-x-2 text-emerald-600">
							<Shield className="w-6 h-6" />
							<span className="font-semibold">3-Month Free Trial</span>
						</div>
						<div className="w-px h-8 bg-gray-200"></div>
						<div className="flex items-center space-x-2 text-teal-600">
							<Clock className="w-6 h-6" />
							<span className="font-semibold">No Setup Cost During Trial</span>
						</div>
						<div className="w-px h-8 bg-gray-200"></div>
						<div className="flex items-center space-x-2 text-cyan-600">
							<Sparkles className="w-6 h-6" />
							<span className="font-semibold">Cancel Anytime</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default PricingSection;