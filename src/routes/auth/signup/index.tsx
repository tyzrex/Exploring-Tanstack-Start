import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup/")({
	component: RouteComponent,
});

import { AuthLayout, SignupForm } from "@/modules/auth";

function RouteComponent() {
	return (
		<AuthLayout
			title="Create your account"
			subtitle="Start managing your workflow in minutes"
		>
			<SignupForm />
		</AuthLayout>
	);
}
