"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Building, ArrowRight, Calculator, Users, BookOpen } from "lucide-react"
import Link from "next/link"

const quickPackages = [
	{
		name: "Starter Package",
		subtitle: "Perfect for Small Schools",
		price: "NPR 700",
		period: "/month",
		description: "Essential features for basic school management",
		icon: Zap,
		popular: true,
		features: [
			"Student Information Management",
			"Billing & Fee Management", 
			"Reports & Analytics",
			"24/7 Support"
		],
		moduleCount: 3
	},
	{
		name: "Standard Package",
		subtitle: "Recommended for Medium Schools", 
		price: "NPR 1,100",
		period: "/month",
		description: "Complete school management solution",
		icon: Star,
		popular: false,
		features: [
			"All Starter features",
			"Academic Management",
			"Communication System",
			"Advanced Analytics"
		],
		moduleCount: 5
	},
	{
		name: "Professional Package",
		subtitle: "For Large Schools",
		price: "NPR 1,550",
		period: "/month", 
		description: "Full-featured with exam & attendance",
		icon: Crown,
		popular: false,
		features: [
			"All Standard features",
			"Attendance Management",
			"Examination Management",
			"Priority Support"
		],
		moduleCount: 7
	}
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
						Modular Pricing - Pay Only for What You Need
					</motion.div>
					<motion.h2
						className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Start from
						<span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
							NPR 700/month
						</span>
					</motion.h2>
					<motion.p
						className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Choose from our pre-configured packages or build your custom solution. 
						<span className="text-teal-600 font-semibold"> Save up to 52% compared to competitors.</span>
					</motion.p>
				</motion.div>

				{/* Quick Package Overview */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					{quickPackages.map((pkg, index) => (
						<motion.div
							key={index}
							className={`relative rounded-3xl border-2 p-8 ${
								pkg.popular
									? "border-emerald-500 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 shadow-2xl scale-105 z-10"
									: "border-gray-200 bg-white shadow-lg hover:shadow-xl"
							} transition-all duration-300 group`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{
								scale: pkg.popular ? 1.05 : 1.02,
								transition: { type: "spring", stiffness: 300 },
							}}
						>
							{pkg.popular && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 text-sm font-semibold">
										Most Popular
									</Badge>
								</div>
							)}

							<div className="text-center mb-8">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-200 mb-4">
									<pkg.icon className="w-8 h-8 text-teal-600" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
								<p className="text-gray-600 mb-4">{pkg.subtitle}</p>
								<div className="mb-4">
									<span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
									<span className="text-lg text-gray-600">{pkg.period}</span>
								</div>
								<p className="text-sm text-gray-600 mb-6">{pkg.description}</p>
								<Badge variant="secondary" className="mb-4">
									{pkg.moduleCount} Modules Included
								</Badge>
							</div>

							<div className="space-y-4 mb-8">
								{pkg.features.map((feature, idx) => (
									<div key={idx} className="flex items-center text-sm text-gray-700">
										<Check className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
										{feature}
									</div>
								))}
							</div>

							<Link href="/pricing">
								<Button
									className={`w-full ${
										pkg.popular
											? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
											: "bg-gray-900 hover:bg-gray-800 text-white"
									}`}
								>
									View Details
								</Button>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Custom Solution CTA */}
				<motion.div
					className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-12 text-center text-white"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="max-w-4xl mx-auto">
						<div className="flex items-center justify-center mb-6">
							<Calculator className="w-8 h-8 mr-3" />
							<h3 className="text-3xl md:text-4xl font-bold">Build Your Custom Solution</h3>
						</div>
						<p className="text-xl text-emerald-100 mb-8 leading-relaxed">
							Need specific features? Choose exactly what your school needs with our modular pricing system.
							<span className="block mt-2 font-semibold">Pick from 10 different modules and pay only for what you use.</span>
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							{[
								{ icon: Users, title: "Student Management", desc: "Complete student records" },
								{ icon: Calculator, title: "Billing System", desc: "Automated fee management" },
								{ icon: BookOpen, title: "Academic Management", desc: "Classes, subjects & grades" }
							].map((feature, idx) => (
								<div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
									<feature.icon className="w-8 h-8 mx-auto mb-2 text-emerald-200" />
									<h4 className="font-semibold text-white mb-1">{feature.title}</h4>
									<p className="text-sm text-emerald-100">{feature.desc}</p>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/pricing">
								<Button
									size="lg"
									className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group"
								>
									Explore All Features
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Button>
							</Link>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold"
							>
								Schedule Demo
							</Button>
						</div>
					</div>
				</motion.div>

				{/* Value Proposition */}
				<motion.div
					className="mt-20 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
						Why Schools Choose WebGurukul
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								value: "52%",
								label: "Cost Savings",
								description: "Compared to competitors"
							},
							{
								value: "500+",
								label: "Schools Trust Us",
								description: "Across Nepal"
							},
							{
								value: "3 Months",
								label: "Free Development",
								description: "No charges during setup"
							}
						].map((stat, idx) => (
							<motion.div
								key={idx}
								className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
								whileHover={{ scale: 1.05 }}
							>
								<div className="text-3xl font-bold text-teal-600 mb-2">{stat.value}</div>
								<div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
								<div className="text-sm text-gray-600">{stat.description}</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default PricingSection