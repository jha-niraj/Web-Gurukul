"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
	ArrowRight, BookOpen, Users, TrendingUp,
	Star, CheckCircle, Zap, Shield, Clock, Sparkles,
	Mic, Trophy, Play
} from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
	return (
		<section className="w-full min-h-screen">
			<section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-8">
				<div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-br-full"></div>
				<div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-teal-500/20 to-emerald-500/20 rounded-tl-full"></div>
				<section className="max-w-7xl mx-auto">
					<div className="absolute inset-0">
						<div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="absolute top-32 left-20 animate-bounce delay-300"
					>
						<div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
							<BookOpen className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="absolute top-48 right-32 animate-bounce delay-700"
					>
						<div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
							<Users className="w-6 h-6 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="absolute bottom-32 left-32 animate-bounce delay-1000"
					>
						<div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
							<Trophy className="w-5 h-5 text-white" />
						</div>
					</motion.div>
					<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="w-full mx-auto"
						>
							<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-1.5 mb-2 shadow-lg border border-teal-100">
								<Star className="w-4 h-4 text-teal-600" />
								<span className="text-sm font-medium text-teal-700">Trusted by 500+ Schools Across Nepal</span>
							</div>
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
							>
								<span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
									Transform Your School
								</span>
								<br />
								<span className="text-black dark:text-white">Management System</span>
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="text-lg md:text-xl text-black dark:text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
							>
								Complete school management solution for Nepali schools.
								<span className="text-teal-600 font-semibold"> Modular pricing, modern technology</span> – just
								results.
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
							>
								<Link href="/pricing">
									<Button
										size="lg"
										className="cursor-pointer bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-5 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
									>
										Start Building Your School Management System
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Button>
								</Link>
								{/* <Button
									variant="outline"
									size="lg"
									className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 px-6 py-5 text-base font-semibold rounded-xl group"
								>
									<Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
									Watch Demo
								</Button> */}
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
							>
								<div className="bg-black dark:bg-white backdrop-blur-sm rounded-xl p-5 shadow-lg">
									<div className="text-2xl font-bold text-teal-600 mb-1">500+</div>
									<div className="text-white dark:text-black font-medium text-sm">Schools Using</div>
								</div>
								<div className="bg-black dark:bg-white backdrop-blur-sm rounded-xl p-5 shadow-lg">
									<div className="text-2xl font-bold text-teal-600 mb-1">52%</div>
									<div className="text-white dark:text-black font-medium text-sm">Cost Savings</div>
								</div>
								<div className="bg-black dark:bg-white backdrop-blur-sm rounded-xl p-5 shadow-lg">
									<div className="text-2xl font-bold text-teal-600 mb-1">NPR 700</div>
									<div className="text-white dark:text-black font-medium text-sm">Starting Price</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
					<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
						<div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
							<div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
						</div>
					</div>
				</section>
			</section>
		</section>
	)
}

export default HeroSection