"use client"
import { motion } from "framer-motion"
import { Users, UserPlus, Search, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const StudentManagement = () => {
    const benefits = [
        "Unique student ID generation",
        "Complete profile management",
        "Class assignment tracking",
        "Bulk import capabilities",
        "Attendance monitoring",
        "Parent contact integration",
    ]

    return (
        <section className="py-16 sm:py-24">
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
                                className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Users className="w-4 h-4 mr-2" />
                                Student Management
                            </motion.div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
                                Complete Student
                                <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    Information Management
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                                Efficiently manage all student data from enrollment to graduation. Our comprehensive system handles
                                everything from basic profiles to detailed academic records.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {
                                benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                        <span className="text-black dark:text-white font-medium text-sm sm:text-base">{benefit}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Explore Student Management
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
                        <div className="absolute -top-4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-teal-100 rounded-3xl transform rotate-6"></div>
                        <div className="absolute -bottom-4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-100 rounded-3xl transform -rotate-6"></div>
                        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-semibold text-base sm:text-lg">Student Dashboard</h3>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                        <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-1 relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <div className="pl-10 pr-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 text-sm sm:text-base">
                                            Search students...
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <UserPlus className="w-4 sm:w-5 h-4 sm:h-5 text-teal-500" />
                                        <Download className="w-4 sm:w-5 h-4 sm:h-5 text-teal-500" />
                                    </div>
                                </div>
                                <div className="space-y-3 sm:space-y-4">
                                    {
                                        [
                                            { name: "Aakash Sharma", id: "STU-2024-001", class: "Class 10", status: "Active" },
                                            { name: "Priya Thapa", id: "STU-2024-002", class: "Class 9", status: "Active" },
                                            { name: "Rohit Gurung", id: "STU-2024-003", class: "Class 10", status: "Active" },
                                        ].map((student, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-teal-50 transition-colors duration-200"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                            >
                                                <div className="flex items-center space-x-3 sm:space-x-4">
                                                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                                                        <span className="text-white font-semibold text-sm sm:text-lg">{student.name.charAt(0)}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{student.name}</h4>
                                                        <p className="text-xs sm:text-sm text-gray-500">
                                                            {student.id} • {student.class}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="px-2 sm:px-3 py-1 bg-teal-100 text-teal-800 text-xs sm:text-sm font-medium rounded-full">
                                                    {student.status}
                                                </span>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                                    <div className="text-center">
                                        <div className="text-lg sm:text-2xl font-bold text-teal-600">245</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Total Students</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg sm:text-2xl font-bold text-cyan-600">12</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Classes</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg sm:text-2xl font-bold text-teal-600">95%</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Attendance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default StudentManagement;