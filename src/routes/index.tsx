import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<h1>Welcome to TanStack Start!</h1>
			<p>This is a starter template for building applications with TanStack.</p>
		</main>
	);
}
