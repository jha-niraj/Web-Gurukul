"use client"
import { motion } from "framer-motion"
import { BarChart3, Award, Download, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const AcademicReports = () => {
	const capabilities = [
		"Automated report card generation",
		"Progress analytics & insights",
		"Grade tracking & calculations",
		"Parent portal integration",
		"Custom report templates",
		"Performance comparisons",
	]

	return (
		<section className="py-16 sm:py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div>
							<motion.div
								className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6"
								whileHover={{ scale: 1.05 }}
							>
								<BarChart3 className="w-4 h-4 mr-2" />
								Academic Reports
							</motion.div>
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								Professional Report Cards
								<span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
									& Progress Tracking
								</span>
							</h2>
							<p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
								Generate beautiful, professional report cards automatically. Track student progress with detailed
								analytics and keep parents informed with real-time updates.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{
								capabilities.map((capability, index) => (
									<motion.div
										key={index}
										className="flex items-center space-x-3"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
									>
										<CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
										<span className="text-gray-700 font-medium text-sm sm:text-base">{capability}</span>
									</motion.div>
								))
							}
						</div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
								Explore Academic Reports
							</Button>
						</motion.div>
					</motion.div>
					<motion.div
						className="relative order-first lg:order-last"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="absolute -top-4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-100 rounded-3xl transform rotate-6"></div>
						<div className="absolute -bottom-4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100 rounded-3xl transform -rotate-6"></div>
						<div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
							<div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 sm:px-6 py-6">
								<div className="text-center">
									<h3 className="text-white font-bold text-lg sm:text-xl mb-2">Janata Secondary School</h3>
									<p className="text-purple-100 text-sm sm:text-base">Academic Report Card - 2024</p>
								</div>
							</div>
							<div className="p-4 sm:p-6 border-b border-gray-100">
								<div className="flex items-center space-x-3 sm:space-x-4">
									<div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
										<span className="text-white font-bold text-lg sm:text-xl">AS</span>
									</div>
									<div>
										<h4 className="font-bold text-base sm:text-lg text-gray-900">Aakash Sharma</h4>
										<p className="text-gray-600 text-sm sm:text-base">Student ID: STU-2024-001</p>
										<p className="text-gray-600 text-sm sm:text-base">Class: 10 | Roll: 15</p>
									</div>
								</div>
							</div>
							<div className="p-4 sm:p-6 space-y-4">
								<h5 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Subject Performance</h5>
								{
									[
										{ subject: "Mathematics", grade: "A+", marks: "95/100", color: "green" },
										{ subject: "Science", grade: "A", marks: "88/100", color: "blue" },
										{ subject: "English", grade: "A", marks: "85/100", color: "blue" },
										{ subject: "Nepali", grade: "A+", marks: "92/100", color: "green" },
									].map((subject, index) => (
										<motion.div
											key={index}
											className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-xl"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.5 + index * 0.1 }}
										>
											<div className="flex items-center space-x-2 sm:space-x-3">
												<Award className={`w-4 sm:w-5 h-4 sm:h-5 text-${subject.color}-500`} />
												<span className="font-medium text-gray-900 text-sm sm:text-base">{subject.subject}</span>
											</div>
											<div className="text-right">
												<span
													className={`px-2 sm:px-3 py-1 bg-${subject.color}-100 text-${subject.color}-800 text-xs sm:text-sm font-bold rounded-full`}
												>
													{subject.grade}
												</span>
												<p className="text-xs sm:text-sm text-gray-500 mt-1">{subject.marks}</p>
											</div>
										</motion.div>
									))
								}
								<div className="pt-4 border-t border-gray-100">
									<div className="grid grid-cols-2 gap-3 sm:gap-4">
										<motion.div
											className="text-center p-2 sm:p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl"
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.8 }}
										>
											<TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 mx-auto mb-2" />
											<p className="text-xs sm:text-sm text-green-600 font-medium">Overall Grade</p>
											<p className="text-xl sm:text-2xl font-bold text-green-800">A+</p>
										</motion.div>
										<motion.div
											className="text-center p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.9 }}
										>
											<BarChart3 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 mx-auto mb-2" />
											<p className="text-xs sm:text-sm text-blue-600 font-medium">Percentage</p>
											<p className="text-xl sm:text-2xl font-bold text-blue-800">90%</p>
										</motion.div>
									</div>
								</div>
								<div className="flex space-x-3 pt-4">
									<Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm">
										<Download className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
										Download
									</Button>
									<Button size="sm" variant="outline" className="flex-1 text-xs sm:text-sm">
										Share with Parents
									</Button>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default AcademicReports;