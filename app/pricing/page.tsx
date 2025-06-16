"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
	Check, CheckCircle, X,
	Users, Calculator, BookOpen, FileText, MessageSquare,
	Calendar, GraduationCap, Library, Truck, Package,
	Star, Crown, Zap, Building, Phone, Mail, ChevronDown, ChevronUp
} from "lucide-react"
import SmoothScroll from "@/components/smoothscroll"
import { useRouter } from "next/navigation"

const baseSystem = {
	setupCost: 5000,
	monthlyBase: 0,
	features: [
		"Shared cloud infrastructure",
		"Multi-tenant architecture",
		"Basic admin panel",
		"Initial training & support"
	]
}

const modules = [
	{
		"id": "student",
		"name": "Student Information Management",
		"setup": 1000,
		"monthly": 800,
		"icon": Users,
		"essential": true,
		"features": [
			"Student profiles & enrollment",
			"Photo management",
			"Basic student records",
			"Contact information",
			"Emergency contacts"
		]
	},
	{
		"id": "billing",
		"name": "Billing & Fee Management",
		"setup": 1500,
		"monthly": 1000,
		"icon": Calculator,
		"essential": true,
		"features": [
			"Fee structure management",
			"Automated bill generation",
			"Payment tracking",
			"Receipt generation",
			"Late fee calculations",
			"Multiple payment methods"
		]
	},
	{
		"id": "academic",
		"name": "Academic Management",
		"setup": 1200,
		"monthly": 900,
		"icon": BookOpen,
		"essential": true,
		"features": [
			"Class management",
			"Subject allocation",
			"Timetable creation",
			"Grade management",
			"Teacher assignment"
		]
	},
	{
		"id": "reports",
		"name": "Reports & Analytics",
		"setup": 800,
		"monthly": 700,
		"icon": FileText,
		"essential": true,
		"features": [
			"Student progress reports",
			"Financial reports",
			"Attendance analytics",
			"Custom report generation",
			"Export to PDF/Excel"
		]
	},
	{
		"id": "communication",
		"name": "Communication System",
		"setup": 500,
		"monthly": 500,
		"icon": MessageSquare,
		"essential": true,
		"features": [
			"SMS notifications",
			"Email notifications",
			"Parent communication",
			"Announcements",
			"Event notifications"
		]
	},
	{
		"id": "attendance",
		"name": "Attendance Management",
		"setup": 800,
		"monthly": 600,
		"icon": Calendar,
		"essential": false,
		"features": [
			"Daily attendance tracking",
			"Attendance reports",
			"Parent notifications",
			"Leave management",
			"Attendance analytics"
		]
	},
	{
		"id": "examination",
		"name": "Examination Management",
		"setup": 1000,
		"monthly": 750,
		"icon": GraduationCap,
		"essential": false,
		"features": [
			"Exam scheduling",
			"Result entry system",
			"Mark sheet generation",
			"Grade calculations",
			"Rank calculations"
		]
	},
	{
		"id": "library",
		"name": "Library Management",
		"setup": 600,
		"monthly": 450,
		"icon": Library,
		"essential": false,
		"features": [
			"Book inventory",
			"Issue/return tracking",
			"Fine management",
			"Digital catalog",
			"Member management"
		]
	},
	{
		"id": "transport",
		"name": "Transport Management",
		"setup": 800,
		"monthly": 600,
		"icon": Truck,
		"essential": false,
		"features": [
			"Route management",
			"Vehicle tracking",
			"Driver management",
			"Transport fees",
			"Route optimization"
		]
	},
	{
		"id": "inventory",
		"name": "Inventory Management",
		"setup": 600,
		"monthly": 450,
		"icon": Package,
		"essential": false,
		"features": [
			"Asset tracking",
			"Supplies management",
			"Maintenance records",
			"Purchase orders",
			"Stock alerts"
		]
	}
]

const preConfiguredPackages = [
	{
		name: 'Starter Package',
		subtitle: 'Perfect for Small Schools',
		moduleIds: ['student', 'billing', 'reports'],
		setupTotal: 8000,    // 5000 + 1000 + 1500 + 800
		monthlyTotal: 2800,  // 800 + 1000 + 700
		popular: true,
		icon: Zap,
		color: 'emerald',
		annualDiscount: 0.15
	},
	{
		name: 'Standard Package',
		subtitle: 'Recommended for Medium Schools',
		moduleIds: ['student', 'billing', 'academic', 'reports', 'communication'],
		setupTotal: 12000,   // 5000 + 1000 + 1500 + 1200 + 800 + 500
		monthlyTotal: 3500,  // 800 + 1000 + 900 + 700 + 500
		popular: false,
		icon: Star,
		color: 'blue',
		annualDiscount: 0.15
	},
	{
		name: 'Professional Package',
		subtitle: 'For Large Schools',
		moduleIds: ['student', 'billing', 'academic', 'reports', 'communication', 'attendance', 'examination'],
		setupTotal: 18000,
		monthlyTotal: 4500,
		popular: false,
		icon: Crown,
		color: 'purple',
		annualDiscount: 0.15
	}
]

export default function PricingPage() {
	const router = useRouter();
	const [selectedModules, setSelectedModules] = useState<string[]>(['student', 'billing', 'reports'])
	const [isAnnual, setIsAnnual] = useState(false)
	const [expandedPackage, setExpandedPackage] = useState<string | null>(null)

	const toggleModule = (moduleId: string) => {
		setSelectedModules(prev =>
			prev.includes(moduleId)
				? prev.filter(id => id !== moduleId)
				: [...prev, moduleId]
		)
	}

	const calculateCosts = () => {
		const selectedModuleData = modules.filter(m => selectedModules.includes(m.id))
		const totalSetup = baseSystem.setupCost + selectedModuleData.reduce((sum, m) => sum + m.setup, 0)
		const totalMonthly = selectedModuleData.reduce((sum, m) => sum + m.monthly, 0)
		const annualCost = totalMonthly * 12 * (isAnnual ? 0.83 : 1) // 17% discount for annual

		return { totalSetup, totalMonthly, annualCost }
	}

	const selectPackage = (packageData: typeof preConfiguredPackages[0]) => {
		setSelectedModules(packageData.moduleIds)
	}

	const { totalSetup, totalMonthly, annualCost } = calculateCosts()

	return (
		<SmoothScroll>
			<div className="min-h-screen">
				<section className="pt-40">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white mb-2">
								Modular Pricing System
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								<span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
									Build Your Perfect
								</span>
								<br />
								<span className="text-black dark:text-white">School Management System</span>
							</h1>
							<p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
								Choose only the features you need. Start with essentials and add more modules as your school grows.
								<span className="text-teal-600 font-semibold"> No forced features, no wasted money.</span>
							</p>
						</motion.div>
					</div>
				</section>
				<section className="py-10">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-6">
							<h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
								Popular Package Combinations
							</h2>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Quick-start packages for common school requirements
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
							{
								preConfiguredPackages.map((pkg, index) => {
									const packageModules = modules.filter(m => pkg.moduleIds.includes(m.id))
									const packageSetup = baseSystem.setupCost + packageModules.reduce((sum, m) => sum + m.setup, 0)
									const packageMonthly = packageModules.reduce((sum, m) => sum + m.monthly, 0)
									const packageAnnual = packageMonthly * 12 * (1 - pkg.annualDiscount)

									return (
										<motion.div
											key={index}
											className={`relative rounded-3xl border-2 p-8 ${pkg.popular
												? "border-emerald-500 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 shadow-2xl scale-105"
												: "border-gray-200 bg-white shadow-lg hover:shadow-xl"
												} transition-all duration-300`}
											initial={{ opacity: 0, y: 30 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, delay: index * 0.1 }}
											whileHover={{ scale: pkg.popular ? 1.05 : 1.02 }}
										>
											{
												pkg.popular && (
													<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
														<Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 text-sm font-semibold">
															Most Popular
														</Badge>
													</div>
												)
											}
											<div className="text-center mb-8">
												<div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${pkg.color}-100 to-${pkg.color}-200 mb-4`}>
													<pkg.icon className={`w-8 h-8 text-${pkg.color}-600`} />
												</div>
												<h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
												<p className="text-gray-600 mb-6">{pkg.subtitle}</p>
												<div className="space-y-2">
													<div className="text-3xl font-bold text-gray-900">
														NPR {packageMonthly.toLocaleString()}<span className="text-lg text-gray-600">/month</span>
													</div>
													<div className="text-sm text-gray-500">
														Setup: NPR {packageSetup.toLocaleString()}
													</div>
													<div className="text-sm text-emerald-600 font-semibold">
														Annual: NPR {Math.round(packageAnnual).toLocaleString()} (Save NPR {Math.round(packageMonthly * 12 - packageAnnual).toLocaleString()})
													</div>
												</div>
											</div>
											<Button
												onClick={() => selectPackage(pkg)}
												className={`w-full mb-6 ${pkg.popular
													? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
													: "bg-gray-900 hover:bg-gray-800 text-white"
													}`}
											>
												Select This Package
											</Button>
											<div className="space-y-3">
												<button
													onClick={() => setExpandedPackage(expandedPackage === pkg.name ? null : pkg.name)}
													className="flex items-center cursor-pointer justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
												>
													<span>View included features ({packageModules.length} modules)</span>
													{expandedPackage === pkg.name ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
												</button>
												{
													expandedPackage === pkg.name && (
														<motion.div
															initial={{ opacity: 0, height: 0 }}
															animate={{ opacity: 1, height: "auto" }}
															exit={{ opacity: 0, height: 0 }}
															className="space-y-2"
														>
															{
																packageModules.map((module) => (
																	<div key={module.id} className="flex items-center text-sm text-gray-600">
																		<CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
																		{module.name}
																	</div>
																))
															}
														</motion.div>
													)
												}
											</div>
										</motion.div>
									)
								})
							}
						</div>
					</div>
				</section>
				<section className="py-10">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-6">
							<h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
								Build Your Custom Solution
							</h2>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								Pick and choose exactly what your school needs
							</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<div className="lg:col-span-2 space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{
										modules.map((module) => {
											const isSelected = selectedModules.includes(module.id)
											return (
												<motion.div
													key={module.id}
													className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${isSelected
														? "border-teal-500 bg-teal-50"
														: "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
														}`}
													onClick={() => toggleModule(module.id)}
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
												>
													<div className="flex items-start justify-between mb-4">
														<div className="flex items-center space-x-3">
															<div className={`p-2 rounded-lg ${isSelected ? 'bg-teal-100' : 'bg-gray-100'}`}>
																<module.icon className={`w-5 h-5 ${isSelected ? 'text-teal-600' : 'text-gray-600'}`} />
															</div>
															<div>
																<h3 className={`font-semibold ${isSelected ? 'text-teal-900' : 'text-gray-900'}`}>
																	{module.name}
																</h3>
																{
																	module.essential && (
																		<Badge variant="secondary" className="text-xs mt-1">Essential</Badge>
																	)
																}
															</div>
														</div>
														<div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected
															? 'border-teal-500 bg-teal-500'
															: 'border-gray-300'
															}`}>
															{isSelected && <Check className="w-4 h-4 text-white" />}
														</div>
													</div>
													<div className="space-y-2 mb-4">
														<div className="flex justify-between text-sm">
															<span className="text-gray-600">Setup:</span>
															<span className="font-semibold">NPR {module.setup.toLocaleString()}</span>
														</div>
														<div className="flex justify-between text-sm">
															<span className="text-gray-600">Monthly:</span>
															<span className="font-semibold">NPR {module.monthly.toLocaleString()}</span>
														</div>
													</div>
													<div className="space-y-1">
														{
															module.features.slice(0, 3).map((feature, idx) => (
																<div key={idx} className="flex items-center text-xs text-gray-600">
																	<div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
																	{feature}
																</div>
															))
														}
														{
															module.features.length > 3 && (
																<div className="text-xs text-gray-500">
																	+{module.features.length - 3} more features
																</div>
															)
														}
													</div>
												</motion.div>
											)
										})
									}
								</div>
							</div>
							<div className="lg:col-span-1">
								<div className="sticky top-32">
									<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
										<h3 className="text-xl font-bold text-gray-900 mb-6">Cost Calculator</h3>
										<div className="space-y-4 mb-6">
											<div className="flex justify-between items-center pb-2 border-b border-gray-200">
												<span className="text-gray-600">Base System Setup</span>
												<span className="font-semibold">NPR {baseSystem.setupCost.toLocaleString()}</span>
											</div>
											{
												modules.filter(m => selectedModules.includes(m.id)).map((module) => (
													<div key={module.id} className="space-y-1">
														<div className="flex justify-between items-center text-sm">
															<span className="text-gray-600">{module.name}</span>
															<button
																onClick={() => toggleModule(module.id)}
																className="cursor-pointer text-red-500 hover:text-red-700"
															>
																<X className="w-4 h-4" />
															</button>
														</div>
														<div className="flex justify-between items-center text-xs text-gray-500 ml-4">
															<span>Setup: NPR {module.setup.toLocaleString()}</span>
															<span>Monthly: NPR {module.monthly.toLocaleString()}</span>
														</div>
													</div>
												))
											}
										</div>
										<div className="space-y-4 pt-4 border-t border-gray-300">
											<div className="flex justify-between items-center">
												<span className="font-semibold text-gray-900">Total Setup Cost</span>
												<span className="font-bold text-xl text-gray-900">NPR {totalSetup.toLocaleString()}</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="font-semibold text-gray-900">Monthly Cost</span>
												<span className="font-bold text-xl text-gray-900">NPR {totalMonthly.toLocaleString()}</span>
											</div>
											<div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
												<div className="flex items-center justify-between mb-2">
													<span className="text-emerald-800 font-semibold">Annual Plan (17% OFF)</span>
													<Badge className="bg-emerald-500 text-white">Save NPR {Math.round(totalMonthly * 12 - annualCost).toLocaleString()}</Badge>
												</div>
												<div className="text-2xl font-bold text-emerald-900">
													NPR {Math.round(annualCost).toLocaleString()}/year
												</div>
												<div className="text-sm text-emerald-700">
													(NPR {Math.round(annualCost / 12).toLocaleString()}/month equivalent)
												</div>
											</div>
										</div>
										<div className="space-y-3 mt-8">
											<Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white">
												Start Free Trial
											</Button>
											<Button variant="outline" className="w-full">
												<Phone className="w-4 h-4 mr-2" />
												Schedule Demo Call
											</Button>
										</div>
										<div className="mt-6 pt-6 border-t border-gray-200 text-center">
											<div className="flex items-center justify-center text-sm text-gray-600 mb-2">
												<Mail className="w-4 h-4 mr-1" />
												Need help choosing?
											</div>
											<p className="text-xs text-gray-500">
												Contact our team for personalized recommendations
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
								Complete Package with Portfolio Website
							</h2>
							<p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
								Get both a professional school website (schoolname.com) AND your management system
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
								<div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
									<div className="text-center mb-6">
										<Building className="w-12 h-12 text-teal-600 mx-auto mb-4" />
										<h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio Website</h3>
										<p className="text-gray-600">Professional school website with public information</p>
									</div>
									<div className="space-y-3 mb-6">
										{
											[
												'Professional school website',
												'Student/parent login portal',
												'Contact forms & announcements',
												'Photo galleries & events',
												'Mobile responsive design'
											].map((feature, idx) => (
												<div key={idx} className="flex items-center text-sm text-gray-700">
													<CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
													{feature}
												</div>
											))
										}
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-gray-900 mb-1">NPR 8,000 - 12,000</div>
										<div className="text-sm text-gray-600">One-time setup</div>
										<div className="text-sm text-gray-600">+ NPR 3,000-5,000/year maintenance</div>
									</div>
								</div>
								<div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 shadow-xl text-white">
									<div className="text-center mb-6">
										<Crown className="w-12 h-12 text-white mx-auto mb-4" />
										<h3 className="text-xl font-bold mb-2">Complete Package Deal</h3>
										<p className="text-teal-100">Portfolio Website + Management System</p>
									</div>
									<div className="space-y-3 mb-6">
										{
											[
												'Everything from both systems',
												'Integrated user experience',
												'Single login for all features',
												'Consistent branding',
												'Priority support included'
											].map((feature, idx) => (
												<div key={idx} className="flex items-center text-sm text-white">
													<CheckCircle className="w-4 h-4 text-emerald-200 mr-3 flex-shrink-0" />
													{feature}
												</div>
											))
										}
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold mb-1">Save NPR 5,000+</div>
										<div className="text-sm text-emerald-200">When purchased together</div>
										<div className="text-sm text-emerald-200">Setup: NPR {(totalSetup + 8000 - 5000).toLocaleString()}</div>
									</div>
								</div>
							</div>
							<div className="mt-12">
								<Button
									size="lg"
									onClick={() => router.push("/contactus")}
									className="cursor-pointer bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold"
								>
									Get Complete Package Quote
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</SmoothScroll>
	)
}