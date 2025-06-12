"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, Building } from "lucide-react"

const pricingPlans = [
	{
		name: "Starter",
		price: "NPR 5,000",
		period: "/month",
		description: "Perfect for small schools getting started",
		icon: Zap,
		color: "blue",
		popular: false,
		features: [
			"Up to 100 students",
			"Basic student management",
			"Fee collection system",
			"Parent communication",
			"Email support",
			"Basic reports",
		],
	},
	{
		name: "Professional",
		price: "NPR 12,000",
		period: "/month",
		description: "Most popular choice for growing schools",
		icon: Star,
		color: "emerald",
		popular: true,
		features: [
			"Up to 500 students",
			"Advanced student management",
			"Automated billing system",
			"Parent portal & mobile app",
			"Academic report cards",
			"Attendance tracking",
			"Priority support",
			"Custom reports",
		],
	},
	{
		name: "Enterprise",
		price: "NPR 25,000",
		period: "/month",
		description: "For large institutions with advanced needs",
		icon: Crown,
		color: "purple",
		popular: false,
		features: [
			"Unlimited students",
			"Multi-campus management",
			"Advanced analytics",
			"Custom integrations",
			"Dedicated account manager",
			"24/7 phone support",
			"Custom training",
			"API access",
		],
	},
]

const PricingSection = () => {
	return (
		<section className="py-24 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 border border-blue-200 text-blue-800 text-sm font-medium mb-8"
						whileHover={{ scale: 1.05 }}
					>
						<Building className="w-4 h-4 mr-2" />
						Simple, Transparent Pricing
					</motion.div>
					<motion.h2
						className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Choose the Perfect Plan
						<span className="block bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
							for Your School
						</span>
					</motion.h2>
					<motion.p
						className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Start with a free trial and scale as you grow. All plans include our core features with no hidden fees or
						setup costs.
					</motion.p>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{
						pricingPlans.map((plan, index) => (
							<motion.div
								key={index}
								className={`relative rounded-3xl border-2 p-8 ${plan.popular
									? "border-emerald-500 bg-gradient-to-b from-emerald-50 to-white shadow-2xl scale-105"
									: "border-gray-200 bg-white shadow-lg hover:shadow-xl"
									} transition-all duration-300`}
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
											<div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
												Most Popular
											</div>
										</motion.div>
									)
								}
								<div className="text-center mb-8">
									<motion.div
										className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-600 flex items-center justify-center shadow-lg`}
										whileHover={{
											rotate: [0, -10, 10, 0],
											transition: { duration: 0.3 },
										}}
									>
										<plan.icon className="w-8 h-8 text-white" />
									</motion.div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
									<p className="text-gray-600 mb-4">{plan.description}</p>
									<div className="flex items-baseline justify-center">
										<span className="text-4xl font-bold text-gray-900">{plan.price}</span>
										<span className="text-gray-600 ml-1">{plan.period}</span>
									</div>
								</div>
								<div className="space-y-4 mb-8">
									{
										plan.features.map((feature, featureIndex) => (
											<motion.div
												key={featureIndex}
												className="flex items-center space-x-3"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
											>
												<Check className={`w-5 h-5 text-${plan.color}-500 flex-shrink-0`} />
												<span className="text-gray-700">{feature}</span>
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
										{plan.popular ? "Start Free Trial" : "Get Started"}
									</Button>
								</motion.div>
							</motion.div>
						))
					}
				</div>
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="inline-flex items-center space-x-2 text-gray-600">
						<Check className="w-5 h-5 text-emerald-500" />
						<span>30-day money-back guarantee</span>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default PricingSection;
