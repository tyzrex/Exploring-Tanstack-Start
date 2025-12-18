import { createFileRoute } from "@tanstack/react-router";
import {
	CTASection,
	FeaturesSection,
	HeroSection,
	LandingFooter,
	LandingHeader,
	ModulesSection,
	TargetUsersSection,
} from "@/modules/landing";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<>
			<LandingHeader />
			<main>
				<HeroSection />
				<FeaturesSection />
				<ModulesSection />
				<TargetUsersSection />
				<CTASection />
			</main>
			<LandingFooter />
		</>
	);
}
