import { ApplyToJob } from "@/components/ApplyToJob";
import { PostJob } from "@/components/PostJob";
import { ProfileMatcher } from "@/components/ProfileMatcher";
import { SimilarJobCard } from "@/components/SimilarJobCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InlinePaddingContainer } from "@/components/ui/Container";
import RichTextDisplay from "@/components/ui/RichTextDisplay";
import VerifyCheckIcon from "@/components/ui/verify-check";
import { matchListData } from "@/data/profile";
import useJobdetails from "@/hooks/useJobdetails";
import RootLayout from "@/pages/layout";
import { Briefcase, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";

export default function JobPage() {
	const { jobId } = useParams();
	const { data: jobDetails, status } = useJobdetails(jobId);
	const isLoading = status === "loading";
	const isIdle = status === "idle";

	if (isIdle) return null;

	if (isLoading)
		return (
			<div className="min-h-dvh flex items-center justify-center">
				Loading...
			</div>
		);

	if (!jobDetails || !jobId) {
		return (
			<RootLayout>
				<InlinePaddingContainer>
					<div className="min-h-dvh flex items-center justify-center">
						No job details found.
					</div>
				</InlinePaddingContainer>
			</RootLayout>
		);
	}

	const {
		location,
		position,
		skills,
		tags,
		jobDescription,
		employment,
		workModel,
		currency,
		salaryMin,
		salaryMax,
	} = jobDetails;
	
	const tagsWithSkills = [
		employment,
		workModel,
		`${currency} ${salaryMin} - ${salaryMax}`,
		...skills.split(","),
		...tags.split(","),
	];

	return (
		<RootLayout>
			<section>
				<InlinePaddingContainer className="border-b border-b-divider-md py-6">
					<div className="flex items-center gap-x-2.5 pb-[3.75rem]">
						<MapPin size={32} className="stroke-blue-light" />
						<p className="inline-flex flex-col">
							<span className="text-blue-light">Location</span>
							<span className="text-white">{location}</span>
						</p>
					</div>
					<div className="space-y-5">
						<div className="flex items-center gap-x-3">
							<div className="aspect-square w-16 rounded-2xl overflow-hidden">
								<img
									className="w-full h-full object-cover"
									src="/svgs/demo-logo.svg"
									alt="demo logo"
									width={250}
									height={250}
								/>
							</div>
							<p>
								<span className="text-placeholder text-sm inline-flex gap-x-2 items-center">
									WorkOS <VerifyCheckIcon size={18} />
								</span>
								<span className="block text-base text-white">{position}</span>
							</p>
						</div>
						<div className="flex justify-between items-center gap-x-4 w-full">
							<div className="flex flex-wrap gap-2">
								{tagsWithSkills.map((item, i) => (
									<Badge key={`${item}-${i}`} className="min-w-fit">
										{item}
									</Badge>
								))}
							</div>
							<div className="flex gap-x-3">
								<Button variant={"secondary"} className="rounded-10">
									Save
								</Button>
								<ApplyToJob
									trigger={<Button className="rounded-10">Easy Apply</Button>}
									jobId={jobId}
								/>
							</div>
						</div>
					</div>
				</InlinePaddingContainer>
				<InlinePaddingContainer>
					<div className="grid grid-cols-[1fr,_23rem] gap-x-8">
						<div className="py-5 pr-6 border-r border-r-divider-md pb-12">
							<div className="flex justify-between items-center gap-x-4 w-full mb-4">
								<h2 className="text-white font-semibold text-xl">
									Description
								</h2>
								<div className="flex gap-x-3">
									<Button variant={"secondary"} className="rounded-10">
										See all
									</Button>
									<PostJob
										trigger={
											<Button variant={"secondary"} className="rounded-10">
												Post a job
											</Button>
										}
									/>
								</div>
							</div>
							<article className="prose prose-headings:text-white">
								<RichTextDisplay data={jobDescription} />
							</article>
						</div>
						<div className="py-5 space-y-6">
							<div className="space-y-2">
								<h3 className="inline-flex text-lg gap-x-2.5 items-center">
									<VerifyCheckIcon size={28} />
									<span className="text-white">Matched your profile</span>
								</h3>
								<ProfileMatcher matchList={matchListData} />
							</div>
							<div className="space-y-2">
								<h3 className="inline-flex text-lg gap-x-2.5 items-center">
									<Briefcase size={20} />
									<span className="text-white">Similar Jobs</span>
								</h3>
								<div className="space-y-2.5">
									<SimilarJobCard />
									<SimilarJobCard />
									<SimilarJobCard />
								</div>
							</div>
						</div>
					</div>
				</InlinePaddingContainer>
			</section>
		</RootLayout>
	);
}
