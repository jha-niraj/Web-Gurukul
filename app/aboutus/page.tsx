"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Heart, BookOpen, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"

const AboutPage = () => {
	const teamMembers = [
		{
			name: "Rajesh Sharma",
			role: "Founder & CEO",
			image: "/placeholder.svg?height=300&width=300",
			bio: "Former education administrator with 15+ years of experience in Nepal's education sector.",
		},
		{
			name: "Priya Thapa",
			role: "CTO",
			image: "/placeholder.svg?height=300&width=300",
			bio: "Tech entrepreneur passionate about leveraging technology to solve educational challenges in Nepal.",
		},
		{
			name: "Amit Gurung",
			role: "Head of Product",
			image: "/placeholder.svg?height=300&width=300",
			bio: "Product strategist with deep understanding of school operations and user experience design.",
		},
		{
			name: "Sita Rai",
			role: "Head of Customer Success",
			image: "/placeholder.svg?height=300&width=300",
			bio: "Dedicated to ensuring every school achieves success with our platform and ongoing support.",
		},
	]

	const values = [
		{
			icon: Heart,
			title: "Student-Centric",
			description: "Every feature we build is designed with students' educational success at the center.",
		},
		{
			icon: Shield,
			title: "Trust & Security",
			description: "We maintain the highest standards of data security and privacy for all our users.",
		},
		{
			icon: Zap,
			title: "Innovation",
			description: "Continuously evolving our platform with cutting-edge technology and user feedback.",
		},
		{
			icon: Globe,
			title: "Accessibility",
			description: "Making quality school management tools accessible to every educational institution in Nepal.",
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 border border-blue-200 text-blue-800 text-sm font-medium mb-8"
						whileHover={{ scale: 1.05 }}
					>
						<Users className="w-4 h-4 mr-2" />
						About EduSathi
					</motion.div>
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						Empowering Education
						<span className="block bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
							Across Nepal
						</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						We're on a mission to transform how schools operate, making education management more efficient,
						transparent, and accessible for every institution in Nepal.
					</p>
				</motion.div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<Target className="w-8 h-8 text-white" />
							</div>
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
							<p className="text-gray-600 leading-relaxed text-lg">
								To democratize access to world-class school management technology, enabling every educational
								institution in Nepal to operate efficiently, transparently, and with a focus on student success. We
								believe that better school management leads to better educational outcomes for all students.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<Award className="w-8 h-8 text-white" />
							</div>
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
							<p className="text-gray-600 leading-relaxed text-lg">
								To become Nepal's leading educational technology platform, recognized for innovation, reliability, and
								impact. We envision a future where every school administrator, teacher, student, and parent has access
								to the tools they need to create an exceptional educational experience.
							</p>
						</div>
					</motion.div>
				</div>
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Born from the real challenges faced by educators across Nepal
						</p>
					</div>
					<div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-12 border border-blue-100">
						<div className="max-w-4xl mx-auto">
							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								WebGurukul was founded in 2025 by a team of educators and technologists who witnessed firsthand the
								administrative challenges facing schools across Nepal. From manual attendance tracking to complex fee
								collection processes, we saw how outdated systems were holding back educational institutions.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								Our founder, Rajesh Sharma, spent over 15 years working in various educational institutions across
								Nepal. He experienced the daily struggles of managing student data, communicating with parents, and
								generating reports manually. This inspired him to create a solution that would address these pain points
								comprehensively.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed">
								Today, EduSathi serves over 500 schools across Nepal, helping them save time, reduce errors, and focus
								on what matters most - providing quality education to their students. We're proud to be part of Nepal's
								digital transformation in education.
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{
							values.map((value, index) => (
								<motion.div
									key={index}
									className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.05 }}
								>
									<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
										<value.icon className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
									<p className="text-gray-600 leading-relaxed">{value.description}</p>
								</motion.div>
							))
						}
					</div>
				</motion.div>
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Passionate educators and technologists working together to transform education
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{
							teamMembers.map((member, index) => (
								<motion.div
									key={index}
									className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.05 }}
								>
									<img
										src={member.image || "/placeholder.svg"}
										alt={member.name}
										className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
									/>
									<h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
									<p className="text-blue-600 font-medium mb-3">{member.role}</p>
									<p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
								</motion.div>
							))
						}
					</div>
				</motion.div>
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-white">
						<h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
						<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
							Be part of the educational transformation happening across Nepal. Let's work together to create better
							learning experiences for all students.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button
										size="lg"
										className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
									>
										Get Started Today
									</Button>
								</motion.div>
							</Link>
							<Link href="/">
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button
										variant="outline"
										size="lg"
										className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
									>
										Learn More
									</Button>
								</motion.div>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default AboutPage;
