import { FC, ReactElement, useEffect, useState } from "react";
import { Sidebar, Avatar, Card, Label, TextInput } from "flowbite-react";
import {
	HiChartPie,
	HiViewBoards,
	HiShoppingBag,
	HiArrowSmLeft,
} from "react-icons/hi";
import useDebounce from "../hooks/useDebounce";

export const SideBar: FC = (): ReactElement => {
	const [credit, setCredit] = useState(50);
	const [cost, setCost] = useState(0);
	const [input, setInput] = useState("");

	const debouncedValue = useDebounce<string>(input, 500);
	const rate = 0.01;

	useEffect(() => {
		localStorage.setItem("userCredit", JSON.stringify(credit));
	}, [credit]);

	useEffect(() => {
		console.log(debouncedValue);
		setCost(creditCost());
	}, [debouncedValue]);

	const creditCost = () => {
		return rate * input.length;
	};

	return (
		<div className="w-fit h-100">
			<Sidebar aria-label="Sidebar with content separator example">
				<Sidebar.Items>
					<div className="flex flex-wrap gap-2">
						<Avatar
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded={true}
						/>
						<div className="space-y-1 font-medium dark:text-white">
							<div>Kien Tran</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								Student Plan
							</div>
						</div>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="base" value="Testing Input" />
						</div>
						<TextInput
							id="base"
							type="text"
							sizing="md"
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
						/>
					</div>
					<Sidebar.ItemGroup>
						<Card>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								You have {credit} credits left
							</h5>
						</Card>
						<Sidebar.Item icon={HiShoppingBag}>
							<p className="text-md font-medium tracking-tight text-red-500 dark:text-white">
								Cost: {cost} {cost > 0 ? "credits" : "credit"}
							</p>
						</Sidebar.Item>
						<Sidebar.Item icon={HiViewBoards}>
							Created by App Dev
						</Sidebar.Item>
						<Sidebar.Item href="#" icon={HiChartPie}>
							Upgrade to Pro
						</Sidebar.Item>
						<Sidebar.Item icon={HiArrowSmLeft}>Sign Out</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};
