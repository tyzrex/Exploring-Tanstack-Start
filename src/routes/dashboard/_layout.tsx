import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { AppSidebar, ThemeToggle } from "@/modules/shared";

export const Route = createFileRoute("/dashboard/_layout")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data, isPending } = authClient.useSession();

	const handleSignOut = async () => {
		await authClient.signOut();
		window.location.reload();
	};

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-[65px] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
					<div className="flex w-full items-center justify-between gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<div className="flex items-center gap-2">
							<ThemeToggle />
							{data && (
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<button
											type="button"
											className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-accent"
										>
											<Avatar className="h-8 w-8 rounded-lg">
												<AvatarImage
													src={
														data?.user?.image || ""
													}
													alt={data?.user?.name || ""}
												/>
												<AvatarFallback className="rounded-lg">
													{data?.user?.name
														?.charAt(0)
														?.toUpperCase() || (
														<User className="size-4" />
													)}
												</AvatarFallback>
											</Avatar>
											<span className="text-sm font-medium">
												{data?.user?.name || "User"}
											</span>
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										align="end"
										className="w-56"
									>
										<DropdownMenuLabel>
											<div className="flex flex-col space-y-1">
												<p className="text-sm font-medium leading-none">
													{data?.user?.name || "User"}
												</p>
												<p className="text-xs leading-none text-muted-foreground">
													{data?.user?.email || ""}
												</p>
											</div>
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem
											onClick={handleSignOut}
										>
											<LogOut className="mr-2 h-4 w-4" />
											<span>Log out</span>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							)}
						</div>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<Outlet />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
