import React from "react";

export default function Sidebar() {
	return (
		<div>
			<div className="drawer drawer-start">
				<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* Page content here */}
					<label htmlFor="my-drawer-4" className="drawer-button ">
						<svg
							className="swap-off fill-current hover:bg-slate-200 rounded-full"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 512 512">
							<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
						</svg>
					</label>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-4" className="drawer-overlay"></label>

					<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
						<div className="flex flex-row  justify-end items-end">
							<label htmlFor="my-drawer-4" className="drawer-button ">
								<svg
									className="swap-on fill-current hover:bg-slate-300 rounded-full "
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 512 512">
									<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
								</svg>
							</label>
						</div>
						<div>
							<li>
								<a>Sidebar Item 1</a>
							</li>
							<li>
								<a>Sidebar Item 2</a>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}
