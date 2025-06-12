"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
	ArrowRight, BookOpen, Users, TrendingUp,
	Star, CheckCircle, Zap, Shield, Clock, Sparkles
} from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
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

	const floatingVariants = {
		animate: {
			y: [-10, 10, -10],
			transition: {
				duration: 3,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut",
			},
		},
	}

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden pt-24">
			<div className="absolute inset-0">
				<div className="absolute inset-0 opacity-30">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle, #14b8a6 1px, transparent 1px)`,
							backgroundSize: "30px 30px",
							backgroundPosition: "0 0, 15px 15px",
						}}
					></div>
				</div>
			</div>
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-cyan-500/5"
				animate={{
					background: [
						"linear-gradient(45deg, rgba(20, 184, 166, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
						"linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%, rgba(20, 184, 166, 0.05) 100%)",
						"linear-gradient(45deg, rgba(20, 184, 166, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
					],
				}}
				transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
				<motion.div className="space-y-16" variants={containerVariants} initial="hidden" animate="visible">
					<motion.div variants={itemVariants}>
						<motion.div
							className="inline-flex items-center px-5 py-2.5 rounded-full bg-teal-50/80 border border-teal-200/60 text-teal-700 text-sm font-medium backdrop-blur-sm"
							whileHover={{ scale: 1.05, backgroundColor: "rgba(240, 253, 250, 0.9)" }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<Star className="w-4 h-4 mr-2.5 fill-teal-500 text-teal-500" />
							Trusted by 500+ Schools Across Nepal
							<Sparkles className="w-4 h-4 ml-2.5 text-teal-500" />
						</motion.div>
					</motion.div>
					<motion.div className="space-y-8" variants={itemVariants}>
						<motion.h1
							className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
						>
							Transform Your
							<motion.span
								className="block mt-2 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 bg-clip-text text-transparent"
								animate={{
									backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
								}}
								transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
								style={{ backgroundSize: "200% 200%" }}
							>
								School Management
							</motion.span>
						</motion.h1>
						<motion.p
							className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
							variants={itemVariants}
						>
							Streamline operations, boost efficiency, and enhance communication with Nepal's most trusted school
							management platform.
						</motion.p>
					</motion.div>
					<motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto" variants={itemVariants}>
						{
							[
								{ icon: Zap, text: "Quick Setup", color: "teal" },
								{ icon: Shield, text: "100% Secure", color: "cyan" },
								{ icon: Clock, text: "24/7 Support", color: "teal" },
							].map((feature, index) => (
								<motion.div
									key={index}
									className={`flex items-center justify-center space-x-3 text-${feature.color}-700 bg-white/80 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-4 border border-gray-200/60 shadow-sm`}
									whileHover={{
										scale: 1.05,
										boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
										backgroundColor: "rgba(255, 255, 255, 0.95)",
									}}
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.8 + index * 0.1 }}
								>
									<feature.icon className={`w-5 h-5 text-${feature.color}-600`} />
									<span className="text-sm font-medium">{feature.text}</span>
								</motion.div>
							))
						}
					</motion.div>
					<motion.div className="flex flex-col sm:flex-row gap-5 justify-center" variants={itemVariants}>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 sm:px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
								>
									Start Free Trial
									<ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
								</Button>
							</Link>
						</motion.div>
						{/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 sm:px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
							>
								<Play className="w-5 h-5 mr-2.5" />
								Watch Demo
							</Button>
						</motion.div> */}
					</motion.div>
					<motion.div className="relative pt-16" variants={itemVariants}>
						<div className="relative max-w-5xl mx-auto">
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-teal-100/30 to-cyan-100/30 rounded-3xl blur-3xl scale-110"
								animate={{
									scale: [1.1, 1.2, 1.1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
							/>
							<motion.div
								className="relative bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-4 sm:p-8 shadow-2xl"
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 1 }}
							>
								<div className="flex items-center justify-between mb-6 sm:mb-8">
									<div className="flex items-center space-x-2.5">
										<div className="w-3.5 h-3.5 bg-red-400 rounded-full"></div>
										<div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
										<div className="w-3.5 h-3.5 bg-green-400 rounded-full"></div>
									</div>
									<div className="text-gray-500 text-xs sm:text-sm font-medium bg-gray-50 px-3 sm:px-4 py-1.5 rounded-lg">
										WebGurukul Dashboard
									</div>
									<div className="w-16 sm:w-20"></div>
								</div>
								<div className="space-y-6 sm:space-y-8">
									<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
										{
											[
												{ icon: Users, value: "1,247", label: "Students", color: "teal" },
												{ icon: TrendingUp, value: "NPR 2.4M", label: "Revenue", color: "cyan" },
												{ icon: BookOpen, value: "15", label: "Classes", color: "teal" },
											].map((stat, index) => (
												<motion.div
													key={index}
													className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100/50 border border-${stat.color}-200/60 rounded-xl p-4 sm:p-6 text-center`}
													initial={{ scale: 0, opacity: 0 }}
													animate={{ scale: 1, opacity: 1 }}
													transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
													whileHover={{ scale: 1.05 }}
												>
													<stat.icon className={`w-8 sm:w-10 h-8 sm:h-10 text-${stat.color}-600 mx-auto mb-3`} />
													<motion.div
														className="text-xl sm:text-2xl font-bold text-gray-900"
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ delay: 1.5 + index * 0.1 }}
													>
														{stat.value}
													</motion.div>
													<div className={`text-${stat.color}-600 text-sm font-medium`}>{stat.label}</div>
												</motion.div>
											))
										}
									</div>
									<motion.div
										className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-6 sm:p-8"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.8 }}
									>
										<div className="flex items-end justify-between h-24 sm:h-32 space-x-2 sm:space-x-3">
											{
												[35, 60, 40, 85, 50, 95, 65, 80, 55, 70, 45, 75].map((height, i) => (
													<motion.div
														key={i}
														className="bg-gradient-to-t from-teal-500 to-cyan-500 rounded-t-sm flex-1 transition-all duration-700 hover:opacity-80"
														initial={{ height: 0 }}
														animate={{ height: `${height}%` }}
														transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
													/>
												))
											}
										</div>
									</motion.div>
								</div>
							</motion.div>
							<motion.div
								className="absolute -top-4 -left-6 bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-4 shadow-lg hidden sm:block"
								variants={floatingVariants}
								animate="animate"
							>
								<div className="flex items-center space-x-3">
									<div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
									<span className="text-sm font-medium text-gray-700">Live Updates</span>
								</div>
							</motion.div>
							<motion.div
								className="absolute -top-4 -right-6 bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-4 shadow-lg hidden sm:block"
								variants={floatingVariants}
								animate="animate"
								transition={{ delay: 1 }}
							>
								<div className="flex items-center space-x-3">
									<CheckCircle className="w-4 h-4 text-teal-500" />
									<span className="text-sm font-medium text-gray-700">Secure</span>
								</div>
							</motion.div>
						</div>
					</motion.div>
					<motion.div className="pt-12" variants={itemVariants}>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto">
							{
								[
									{ value: "500+", label: "Schools" },
									{ value: "25K+", label: "Students" },
									{ value: "98%", label: "Satisfaction" },
									{ value: "4.9★", label: "Rating" },
								].map((item, index) => (
									<motion.div
										key={index}
										className="text-center"
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ delay: 2.5 + index * 0.1, type: "spring" }}
										whileHover={{ scale: 1.1 }}
									>
										<div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
										<div className="text-sm text-gray-600 font-medium">{item.label}</div>
									</motion.div>
								))
							}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection