"use client"
import { motion } from "framer-motion"
import { CreditCard, Receipt, TrendingUp, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const BillingSystem = () => {
	const features = [
		"Automated bill generation",
		"Multiple payment methods",
		"Real-time financial reporting",
		"Fee reminder notifications",
		"Installment management",
		"Receipt generation",
	]

	return (
		<section className="py-16 sm:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="absolute -top-4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-100 rounded-3xl transform -rotate-6"></div>
						<div className="absolute -bottom-4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-teal-100 rounded-3xl transform rotate-6"></div>
						<div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
							<div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 sm:px-6 py-4">
								<div className="flex items-center justify-between">
									<h3 className="text-white font-semibold text-base sm:text-lg">Billing Dashboard</h3>
									<div className="flex items-center space-x-2">
										<Receipt className="w-4 sm:w-5 h-4 sm:h-5 text-white/80" />
										<span className="text-white/80 text-xs sm:text-sm">NPR</span>
									</div>
								</div>
							</div>
							<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
								<div className="grid grid-cols-2 gap-3 sm:gap-4">
									<motion.div
										className="p-3 sm:p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200"
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 }}
									>
										<div className="flex items-center justify-between">
											<div>
												<p className="text-cyan-600 text-xs sm:text-sm font-medium">Monthly Revenue</p>
												<p className="text-lg sm:text-2xl font-bold text-cyan-800">NPR 2,45,000</p>
											</div>
											<TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-600" />
										</div>
									</motion.div>
									<motion.div
										className="p-3 sm:p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200"
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: 0.4 }}
									>
										<div className="flex items-center justify-between">
											<div>
												<p className="text-teal-600 text-xs sm:text-sm font-medium">Pending Fees</p>
												<p className="text-lg sm:text-2xl font-bold text-teal-800">NPR 45,000</p>
											</div>
											<Clock className="w-6 sm:w-8 h-6 sm:h-8 text-teal-600" />
										</div>
									</motion.div>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Recent Payments</h4>
									<div className="space-y-2 sm:space-y-3">
										{
											[
												{ student: "Aakash Sharma", amount: "NPR 5,000", status: "Paid", method: "Digital" },
												{ student: "Priya Thapa", amount: "NPR 4,800", status: "Paid", method: "Cash" },
												{ student: "Rohit Gurung", amount: "NPR 5,200", status: "Pending", method: "Bank" },
											].map((transaction, index) => (
												<motion.div
													key={index}
													className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ delay: 0.5 + index * 0.1 }}
												>
													<div>
														<p className="font-medium text-gray-900 text-sm sm:text-base">{transaction.student}</p>
														<p className="text-xs sm:text-sm text-gray-500">{transaction.method} Payment</p>
													</div>
													<div className="text-right">
														<p className="font-semibold text-gray-900 text-sm sm:text-base">{transaction.amount}</p>
														<span
															className={`px-2 py-1 text-xs font-medium rounded-full ${transaction.status === "Paid"
																? "bg-cyan-100 text-cyan-800"
																: "bg-yellow-100 text-yellow-800"
																}`}
														>
															{transaction.status}
														</span>
													</div>
												</motion.div>
											))
										}
									</div>
								</div>
								<div className="flex space-x-3 pt-4 border-t border-gray-100">
									<Button size="sm" className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-xs sm:text-sm">
										Generate Bills
									</Button>
									<Button size="sm" variant="outline" className="flex-1 text-xs sm:text-sm">
										Send Reminders
									</Button>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div>
							<motion.div
								className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-medium mb-2"
								whileHover={{ scale: 1.05 }}
							>
								<CreditCard className="w-4 h-4 mr-2" />
								Billing & Finance
							</motion.div>
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
								Streamlined Fee Collection
								<span className="block bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
									& Financial Tracking
								</span>
							</h2>
							<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
								Automate your entire billing process from fee calculation to collection. Track payments in real-time and
								generate comprehensive financial reports with ease.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{
								features.map((feature, index) => (
									<motion.div
										key={index}
										className="flex items-center space-x-3"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
									>
										<CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
										<span className="text-black dark:text-white font-medium text-sm sm:text-base">{feature}</span>
									</motion.div>
								))
							}
						</div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
								Explore Billing System
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default BillingSystem;