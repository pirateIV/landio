import { IconBrandX, IconCheck, IconReload, IconUsers } from "@tabler/icons-react";
import Card from "@/components/ui/card";

const tasks = [
	{ title: "Social Media Post", iconLabel: IconBrandX, icon: IconCheck },
	{ title: "Employee Tracking", iconLabel: IconUsers, icon: IconReload },
	{ title: "Payment reminder", iconLabel: IconBrandX, icon: IconCheck },
	{ title: "Cost Management", iconLabel: IconBrandX, icon: IconCheck },
];

function Task() {
	return <div></div>;
}

export default function Tasks() {
	return (
		<Card
			className="p-[30px] gap-6"
			title="Automate repetitive tasks"
			description="We help you streamline internal operations by automating manual workflows"
		>
			<div className="h-[245px] w-full space-y-2">
				{tasks.map((task,index) => (
					<div key={index} className="flex w-full border rounded-lg border-light-blue-muted items-center justify-between py-3 px-4">
						<div className="flex items-center gap-2">
							<task.iconLabel size="24"/>
							<p className="text-light-blue text-sm">{task.title}</p>
						</div>
						<task.icon size="24"/>
					</div>
				))}
			</div>
		</Card>
	);
}
