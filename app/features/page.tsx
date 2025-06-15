"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
	Building, Globe, Users, Calculator, BookOpen, FileText, MessageSquare,
	Calendar, GraduationCap, Library, Truck, Package, Shield, Clock,
	CheckCircle, ArrowRight, Star, Zap, Crown, Smartphone, Monitor,
	Camera, Mail, Phone, Bell, TrendingUp, BarChart3, PieChart,
	CreditCard, Receipt, DollarSign, Target, Award, UserCheck
} from "lucide-react"

const portfolioFeatures = [
	{
		category: "Professional Website",
		icon: Building,
		color: "blue",
		features: [
			{
				name: "Modern School Website",
				description: "Beautiful, responsive website representing your school's brand",
				icon: Globe,
				details: [
					"Custom school branding and colors",
					"Mobile-responsive design",
					"Fast loading and SEO optimized",
					"Professional layout templates"
				]
			},
			{
				name: "Student/Parent Portal",
				description: "Secure login area for students and parents",
				icon: Users,
				details: [
					"Individual student dashboards",
					"Parent access to child's information",
					"Secure authentication system",
					"Role-based access control"
				]
			},
			{
				name: "Photo Galleries",
				description: "Showcase school events and activities",
				icon: Camera,
				details: [
					"Event photo galleries",
					"School activity showcases",
					"Achievement celebrations",
					"Automatic image optimization"
				]
			},
			{
				name: "Contact & Forms",
				description: "Easy communication with school administration",
				icon: Mail,
				details: [
					"Contact forms and inquiries",
					"Admission application forms",
					"Event registration",
					"Feedback collection"
				]
			}
		]
	}
]

const managementModules = [
	{
		id: "student",
		name: "Student Information Management",
		description: "Complete student record management system",
		icon: Users,
		color: "emerald",
		features: [
			{
				name: "Student Profiles",
				description: "Comprehensive student information management",
				icon: UserCheck,
				details: [
					"Personal information and contacts",
					"Academic history and records",
					"Photo management",
					"Emergency contact information",
					"Medical information storage",
					"Document attachment system"
				]
			},
			{
				name: "Enrollment Management",
				description: "Streamlined admission and enrollment process",
				icon: Target,
				details: [
					"Online admission applications",
					"Document verification tracking",
					"Class allocation system",
					"Enrollment status tracking",
					"Transfer student management"
				]
			}
		]
	},
	{
		id: "billing",
		name: "Billing & Fee Management",
		description: "Complete financial management for school operations",
		icon: Calculator,
		color: "blue",
		features: [
			{
				name: "Fee Structure Management",
				description: "Flexible fee setup and management",
				icon: DollarSign,
				details: [
					"Multiple fee categories setup",
					"Class-wise fee structures",
					"Scholarship and discount management",
					"Late fee configuration",
					"Installment payment options"
				]
			},
			{
				name: "Bill Generation & Tracking",
				description: "Automated billing and payment tracking",
				icon: Receipt,
				details: [
					"Automated monthly bill generation",
					"Custom receipt templates",
					"Payment tracking and history",
					"Outstanding dues management",
					"Multiple payment method support"
				]
			},
			{
				name: "Financial Reporting",
				description: "Comprehensive financial analytics",
				icon: TrendingUp,
				details: [
					"Revenue tracking and analysis",
					"Fee collection reports",
					"Outstanding payments dashboard",
					"Financial forecasting",
					"Custom financial reports"
				]
			}
		]
	},
	{
		id: "academic",
		name: "Academic Management",
		description: "Complete academic administration system",
		icon: BookOpen,
		color: "purple",
		features: [
			{
				name: "Class & Subject Management",
				description: "Organize classes and academic structure",
				icon: BookOpen,
				details: [
					"Class creation and management",
					"Subject allocation per class",
					"Teacher assignment system",
					"Syllabus management",
					"Academic calendar setup"
				]
			},
			{
				name: "Timetable Management",
				description: "Smart scheduling and timetable creation",
				icon: Calendar,
				details: [
					"Automated timetable generation",
					"Teacher schedule management",
					"Room allocation system",
					"Period and break management",
					"Schedule conflict detection"
				]
			},
			{
				name: "Grade Management",
				description: "Comprehensive grading and assessment",
				icon: Award,
				details: [
					"Flexible grading systems",
					"Continuous assessment tracking",
					"Grade calculation automation",
					"Promotion criteria setup",
					"Academic performance analytics"
				]
			}
		]
	},
	{
		id: "reports",
		name: "Reports & Analytics",
		description: "Powerful reporting and data analytics",
		icon: BarChart3,
		color: "indigo",
		features: [
			{
				name: "Student Progress Reports",
				description: "Detailed academic progress tracking",
				icon: TrendingUp,
				details: [
					"Customizable report card templates",
					"Progress tracking over time",
					"Subject-wise performance analysis",
					"Comparative class analytics",
					"Parent-friendly progress summaries"
				]
			},
			{
				name: "Administrative Reports",
				description: "School-wide operational insights",
				icon: PieChart,
				details: [
					"Attendance analytics and trends",
					"Financial performance reports",
					"Enrollment and demographic analysis",
					"Teacher performance metrics",
					"Custom dashboard creation"
				]
			},
			{
				name: "Export & Sharing",
				description: "Easy report distribution and sharing",
				icon: FileText,
				details: [
					"PDF report generation",
					"Excel data export",
					"Automated email delivery",
					"Print-ready formatting",
					"Bulk report generation"
				]
			}
		]
	},
	{
		id: "communication",
		name: "Communication System",
		description: "Streamlined school-wide communication",
		icon: MessageSquare,
		color: "green",
		features: [
			{
				name: "Multi-Channel Messaging",
				description: "Reach parents and students effectively",
				icon: Phone,
				details: [
					"SMS notification system",
					"Email communication platform",
					"In-app messaging",
					"WhatsApp integration (Premium)",
					"Emergency broadcast system"
				]
			},
			{
				name: "Announcements & Events",
				description: "Keep everyone informed and engaged",
				icon: Bell,
				details: [
					"School-wide announcements",
					"Event notifications",
					"Class-specific messages",
					"Parent meeting reminders",
					"Academic deadline alerts"
				]
			}
		]
	},
	{
		id: "attendance",
		name: "Attendance Management",
		description: "Efficient attendance tracking and monitoring",
		icon: Calendar,
		color: "orange",
		features: [
			{
				name: "Daily Attendance Tracking",
				description: "Quick and accurate attendance recording",
				icon: CheckCircle,
				details: [
					"One-click attendance marking",
					"Bulk attendance entry",
					"Late arrival tracking",
					"Early departure logging",
					"Substitute teacher access"
				]
			},
			{
				name: "Attendance Analytics",
				description: "Insights into attendance patterns",
				icon: BarChart3,
				details: [
					"Student attendance percentages",
					"Class-wise attendance reports",
					"Attendance trend analysis",
					"Absenteeism alerts",
					"Perfect attendance recognition"
				]
			}
		]
	},
	{
		id: "examination",
		name: "Examination Management",
		description: "Complete exam administration and result management",
		icon: GraduationCap,
		color: "red",
		features: [
			{
				name: "Exam Scheduling",
				description: "Organized exam planning and scheduling",
				icon: Calendar,
				details: [
					"Exam timetable creation",
					"Room and seat allocation",
					"Invigilator assignment",
					"Exam instruction management",
					"Resource allocation tracking"
				]
			},
			{
				name: "Result Management",
				description: "Efficient result processing and analysis",
				icon: Award,
				details: [
					"Online result entry system",
					"Automated grade calculations",
					"Rank and merit list generation",
					"Result verification workflows",
					"Performance analytics"
				]
			}
		]
	},
	{
		id: "library",
		name: "Library Management",
		description: "Digital library administration system",
		icon: Library,
		color: "cyan",
		features: [
			{
				name: "Book Inventory",
				description: "Complete library catalog management",
				icon: BookOpen,
				details: [
					"Digital book catalog",
					"ISBN and barcode support",
					"Book categorization system",
					"Inventory tracking",
					"Book condition monitoring"
				]
			},
			{
				name: "Issue & Return System",
				description: "Streamlined book lending process",
				icon: ArrowRight,
				details: [
					"Quick book issue/return",
					"Due date tracking",
					"Fine calculation system",
					"Renewal management",
					"Lost book handling"
				]
			}
		]
	},
	{
		id: "transport",
		name: "Transport Management",
		description: "School transportation coordination system",
		icon: Truck,
		color: "yellow",
		features: [
			{
				name: "Route Management",
				description: "Efficient route planning and management",
				icon: Target,
				details: [
					"Route creation and optimization",
					"Stop management system",
					"Driver assignment",
					"Vehicle maintenance tracking",
					"Route timing schedules"
				]
			},
			{
				name: "Student Transport Tracking",
				description: "Monitor student transportation",
				icon: Users,
				details: [
					"Student-route assignment",
					"Pick-up/drop-off tracking",
					"Parent notification system",
					"Emergency contact procedures",
					"Transport fee management"
				]
			}
		]
	},
	{
		id: "inventory",
		name: "Inventory Management",
		description: "School asset and supply management",
		icon: Package,
		color: "gray",
		features: [
			{
				name: "Asset Tracking",
				description: "Monitor school assets and equipment",
				icon: Monitor,
				details: [
					"Equipment inventory database",
					"Asset condition tracking",
					"Maintenance schedule management",
					"Depreciation calculations",
					"Asset transfer logging"
				]
			},
			{
				name: "Supply Management",
				description: "Track supplies and consumables",
				icon: Package,
				details: [
					"Supply inventory tracking",
					"Automatic reorder alerts",
					"Vendor management system",
					"Purchase order generation",
					"Supply usage analytics"
				]
			}
		]
	}
]

export default function FeaturesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
			{/* Header */}
			<section className="pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white mb-6">
							Complete Feature Overview
						</Badge>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							<span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
								Everything Your School
							</span>
							<br />
							<span className="text-gray-800">Needs to Succeed</span>
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
							From professional website presence to complete school management -
							discover all the features that make WebGurukul the perfect choice for your institution.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Portfolio Website Features */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Professional School Website
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Create a stunning online presence for your school
							</p>
							<div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 border border-blue-200">
								<Building className="w-5 h-5 text-blue-600 mr-2" />
								<span className="text-blue-800 font-semibold">Portfolio Website Features</span>
							</div>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{portfolioFeatures[0].features.map((feature, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.02 }}
							>
								<div className="flex items-center mb-6">
									<div className="bg-blue-100 rounded-xl p-3 mr-4">
										<feature.icon className="w-6 h-6 text-blue-600" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-1">{feature.name}</h3>
										<p className="text-gray-600">{feature.description}</p>
									</div>
								</div>

								<div className="space-y-3">
									{feature.details.map((detail, idx) => (
										<div key={idx} className="flex items-center text-sm text-gray-700">
											<CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
											{detail}
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Management System Features */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								School Management System Modules
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Comprehensive features to manage every aspect of your school
							</p>
							<div className="inline-flex items-center bg-emerald-50 rounded-full px-6 py-3 border border-emerald-200">
								<Zap className="w-5 h-5 text-emerald-600 mr-2" />
								<span className="text-emerald-800 font-semibold">10 Powerful Modules Available</span>
							</div>
						</motion.div>
					</div>

					<div className="space-y-20">
						{managementModules.map((module, moduleIndex) => (
							<motion.div
								key={module.id}
								className="relative"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: moduleIndex * 0.1 }}
							>
								<div className="text-center mb-12">
									<div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${module.color}-100 to-${module.color}-200 mb-4`}>
										<module.icon className={`w-8 h-8 text-${module.color}-600`} />
									</div>
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{module.name}</h3>
									<p className="text-lg text-gray-600 max-w-2xl mx-auto">{module.description}</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{module.features.map((feature, featureIndex) => (
										<motion.div
											key={featureIndex}
											className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
											whileHover={{ scale: 1.02 }}
										>
											<div className="flex items-center mb-4">
												<div className={`bg-${module.color}-100 rounded-lg p-2 mr-3`}>
													<feature.icon className={`w-5 h-5 text-${module.color}-600`} />
												</div>
												<div>
													<h4 className="font-semibold text-gray-900">{feature.name}</h4>
													<p className="text-sm text-gray-600">{feature.description}</p>
												</div>
											</div>

											<div className="space-y-2">
												{feature.details.map((detail, idx) => (
													<div key={idx} className="flex items-start text-xs text-gray-700">
														<div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
														{detail}
													</div>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Feature Highlights */}
			<section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Why Choose WebGurukul?
							</h2>
							<p className="text-lg text-gray-600">
								Built specifically for Nepali schools with modern technology
							</p>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: Smartphone,
								title: "Mobile-First Design",
								description: "Works perfectly on all devices - phones, tablets, and desktops"
							},
							{
								icon: Shield,
								title: "Secure & Reliable",
								description: "Bank-level security with automated backups and data protection"
							},
							{
								icon: Clock,
								title: "24/7 Support",
								description: "Local Nepali support team available whenever you need help"
							},
							{
								icon: Star,
								title: "Proven Results",
								description: "Trusted by 500+ schools across Nepal with 99% satisfaction rate"
							}
						].map((highlight, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
							>
								<div className="bg-teal-100 rounded-xl p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
									<highlight.icon className="w-8 h-8 text-teal-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
								<p className="text-gray-600 text-sm">{highlight.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-12 text-white"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Ready to Transform Your School?
						</h2>
						<p className="text-xl text-teal-100 mb-8">
							Start with a free trial and see how WebGurukul can revolutionize your school management
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Start Free Trial
							</motion.button>
							<motion.button
								className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Schedule Demo
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
} 