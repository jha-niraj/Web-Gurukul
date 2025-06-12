"use client"
import { motion } from "framer-motion"
import { Star, Quote, Users, TrendingUp, Clock, ArrowRight, CheckCircle } from "lucide-react"

const testimonials = [
    {
        name: "Ramesh Sharma",
        position: "Principal",
        school: "Janata Secondary School, Kathmandu",
        quote:
            "WebGurukul has revolutionized our administrative processes. We've reduced billing time by 80% and improved parent communication significantly.",
        rating: 5,
        image: "/placeholder.svg?height=150&width=150",
        stats: { students: 450, timeSaved: "15 hrs/week" },
    },
    {
        name: "Sita Gurung",
        position: "Vice Principal",
        school: "Himalayan Academy, Pokhara",
        quote:
            "The automated report card generation saves us countless hours. Parents love the real-time progress updates and digital communication features.",
        rating: 5,
        image: "/placeholder.svg?height=150&width=150",
        stats: { students: 320, timeSaved: "12 hrs/week" },
    },
    {
        name: "Krishna Bhattarai",
        position: "Administrator",
        school: "Shree Saraswati School, Lalitpur",
        quote:
            "Managing fee collection was our biggest challenge. Now with WebGurukul's billing system, we have 95% on-time payments and transparent financial tracking.",
        rating: 5,
        image: "/placeholder.svg?height=150&width=150",
        stats: { students: 280, timeSaved: "20 hrs/week" },
    },
]

const Testimonials = () => {
    return (
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Users className="w-4 h-4 mr-2" />
                        Trusted by Educators
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Loved by School
                        <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            Administrators Nationwide
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join 500+ schools across Nepal who have transformed their operations with WebGurukul. See what educators are
                        saying about our platform.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
                    {
                        [
                            { icon: Users, value: "500+", label: "Schools Trust Us", color: "teal" },
                            { icon: TrendingUp, value: "80%", label: "Time Saved", color: "cyan" },
                            { icon: Star, value: "4.9", label: "Average Rating", color: "teal" },
                            { icon: Clock, value: "24/7", label: "Support Available", color: "cyan" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div
                                    className={`w-10 sm:w-12 h-10 sm:h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}
                                >
                                    <stat.icon className={`w-5 sm:w-6 h-5 sm:h-6 text-${stat.color}-600`} />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {
                        testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="absolute -top-4 left-6 sm:left-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Quote className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1 mb-6">
                                    {
                                        [...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                                        ))
                                    }
                                </div>
                                <blockquote className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-medium">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
                                    <div className="relative">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-4 border-gray-100"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-5 sm:w-6 h-5 sm:h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-2 sm:w-3 h-2 sm:h-3 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</h4>
                                        <p className="text-teal-600 font-medium text-sm sm:text-base">{testimonial.position}</p>
                                        <p className="text-gray-500 text-xs sm:text-sm">{testimonial.school}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-teal-600">{testimonial.stats.students}</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Students</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-cyan-600">{testimonial.stats.timeSaved}</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Time Saved</div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-teal-200 transition-all duration-300"></div>
                            </motion.div>
                        ))
                    }
                </div>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white overflow-hidden">
                        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your School?</h3>
                            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-teal-100 max-w-2xl mx-auto">
                                Join hundreds of schools already using WebGurukul to streamline their operations and boost efficiency.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    className="group bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Free Trial
                                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                                <motion.button
                                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Schedule Demo
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials;