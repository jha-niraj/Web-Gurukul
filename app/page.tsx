"use client"

import AcademicReports from "@/components/(landingpage)/academicreports"
import BillingSystem from "@/components/(landingpage)/billingsystm"
import CTASection from "@/components/(landingpage)/ctasection"
import FeaturesOverview from "@/components/(landingpage)/featuresoverview"
import HeroSection from "@/components/(landingpage)/herosection"
import PricingSection from "@/components/(landingpage)/pricingsection"
import StudentManagement from "@/components/(landingpage)/studentmanagement"
import Testimonials from "@/components/(landingpage)/testimonialssection"
import SmoothScroll from "@/components/smoothscroll"
import { motion } from "framer-motion"

export default function HomePage() {
	return (
		<SmoothScroll>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
				<HeroSection />
				<FeaturesOverview />
				<StudentManagement />
				<BillingSystem />
				<AcademicReports />
				<PricingSection />
				<Testimonials />
				<CTASection />
			</motion.div>
		</SmoothScroll>
	)
}
