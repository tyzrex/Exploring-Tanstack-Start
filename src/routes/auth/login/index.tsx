import { createFileRoute, redirect } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { AuthLayout, LoginForm } from "@/modules/auth";

export const Route = createFileRoute("/auth/login/")({
	component: RouteComponent,
	beforeLoad: async () => {
		const { data: authResponse } = await authClient.getSession();
		if (authResponse?.session) {
			throw redirect({
				to: "/",
				search: { redirect: location.href },
			});
		}
	},
});

function RouteComponent() {
	return (
		<AuthLayout
			title="Login to Techplanora"
			subtitle="Login and start planning"
		>
			<LoginForm />
		</AuthLayout>
	);
}
