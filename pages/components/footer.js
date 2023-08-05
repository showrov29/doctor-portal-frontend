import React from "react";

export default function Footer() {
	return (
		<div>
			<footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
				<div>
					<span className="footer-title">Services</span>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</div>
				<div>
					<span className="footer-title">Legal</span>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</div>
				<div>
					<span className="footer-title">Social</span>
					<a className="link link-hover">Twitter</a>
					<a className="link link-hover">Instagram</a>
					<a className="link link-hover">Facebook</a>
					<a className="link link-hover">Github</a>
				</div>
				<div>
					<span className="footer-title">Explore</span>
					<a className="link link-hover">Features</a>
					<a className="link link-hover">Enterprise</a>
					<a className="link link-hover">Security</a>
					<a className="link link-hover">Pricing</a>
				</div>
				<div>
					<span className="footer-title">Apps</span>
					<a className="link link-hover">Mac</a>
					<a className="link link-hover">Windows</a>
					<a className="link link-hover">iPhone</a>
					<a className="link link-hover">Android</a>
				</div>
			</footer>
		</div>
	);
}
