import { Accordion } from "flowbite-react";
import benefitImg from "../../assets/images/benefitimg.png";
const Benifit = () => {
	return (
		<div className="py-16">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="mb-12">
					<h2 className="text-center font-bold text-5xl capitalize pb-5 relative ">
						Who can be benefited
					</h2>
					<p className="text-center">
						M Task is a task management system, free to use and
						anyone can be benefited.
					</p>
				</div>
				<div className="flex gap-5 items-center">
					<div className="flex-1">
						<img src={benefitImg} alt="" />
					</div>
					<div className="flex-1">
						<Accordion>
							<Accordion.Panel>
								<Accordion.Title>
									How Developer Can be Benefited
								</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										With task management software, you can
										track the progress of each task in
										real-time. This feature allows you to
										identify tasks that are behind schedule,
										take corrective actions, and allocate
										resources effectively. Task tracking
										ensures that nothing gets overlooked and
										helps you stay on top of your workload.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>
									How corporate professionals Can be Benefited
								</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										A task management system is a valuable
										tool for corporate professionals,
										offering a range of benefits that
										streamline their work processes. By
										providing a centralized repository for
										tasks and enabling categorization based
										on projects and deadlines, these systems
										enhance organizational efficiency.
										Collaboration is improved through shared
										workspaces and real-time updates,
										fostering communication among team
										members. Time management is facilitated
										by features such as prioritization and
										automation, contributing to increased
										productivity.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>
									How Bankers Can be Benefited?
								</Accordion.Title>
								<Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
										A task management system is a valuable
										tool for Bankers,
										offering a range of benefits that
										streamline their work processes. By
										providing a centralized repository for
										tasks and enabling categorization based
										on projects and deadlines, these systems
										enhance organizational efficiency.
										Collaboration is improved through shared
										workspaces and real-time updates,
										fostering communication among team
										members. Time management is facilitated
										by features such as prioritization and
										automation, contributing to increased
										productivity.
									</p>
                                </Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benifit;
