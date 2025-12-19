import { createFileRoute, redirect } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import {
	CTASection,
	FeaturesSection,
	HeroSection,
	LandingFooter,
	LandingHeader,
	ModulesSection,
	TargetUsersSection,
} from "@/modules/landing";

export const Route = createFileRoute("/")({
	component: App,
	beforeLoad: async () => {
		const session = await authClient.getSession();
		if (session.data?.session) {
			throw redirect({
				to: "/dashboard",
			});
		}
	},
});

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
