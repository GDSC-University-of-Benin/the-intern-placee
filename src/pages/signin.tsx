import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Logo } from "../components/ui/logo";
import { MyLink } from "../components/ui/link";

export default function Signin() {
	return (
		<div className="min-h-dvh flex items-center justify-center">
			<Card className="max-w-lg w-full p-6 space-y-6">
				<div className="w-fit">
					<Logo />
				</div>
				<div className="text-center space-y-4">
					<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
						Welcome Back
					</h1>
					<Button className="w-full bg-white text-background-main hover:bg-white/80">
						<img
							src="/images/google.png"
							alt="Google Icon"
							className="size-5 mr-4"
							width={40}
							height={40}
						/>{" "}
						Continue with Google
					</Button>
					<div className="flex gap-x-4 items-center">
						<div className="h-px w-full bg-white/60"></div>
						<p className="text-white">or</p>
						<div className="h-px w-full bg-white/60"></div>
					</div>
				</div>
				<div>
					<form>
						<div className="space-y-6">
							<div className="space-y-3">
								<label htmlFor="email" className="block font-medium text-">
									Email address
								</label>
								<Input />
							</div>
							<div className="space-y-3">
								<label htmlFor="password" className="block font-medium text-">
									Password
								</label>
								<Input
									type="password"
									id="password"
									name="password"
									className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm"
								/>
							</div>
							<div className="pt-3">
								<Button className="w-full bg-accent hover:bg-accent">
									Sign in
								</Button>
							</div>
						</div>
					</form>
					<div className="pt-4">
						<p className="text-center text-sm">
							New user? <MyLink to="/signup">Create an account</MyLink>
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
}