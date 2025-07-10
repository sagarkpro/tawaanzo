"use server";

/* eslint-disable @next/next/no-img-element */
import React from "react";

export default async function Footer() {
	return (
		<div className="bg-secondary w-full min-h-20 flex flex-wrap 2xs:flex-col 2xs:items-center sm:items-start sm:flex-row text-white">
			<div className="flex flex-col w-max items-center p-4">
				<h3 className="mb-2 font-semibold">Connect With Us</h3>
				<div className="flex gap-x-3 p-2">
					<a href="https://www.facebook.com/tawaanzo" target="_blank">
						<img src="/images/facebook.svg" alt="facebook" width={40} />
					</a>
					<a href="https://www.instagram.com/tawaanzo" target="_blank">
						<img src="/images/instagram.svg" alt="instagram" width={40} />
					</a>
					<a href="https://wa.me/9530391354" target="_blank">
						<img src="/images/whatsapp.svg" alt="whatsapp" width={40} />
					</a>
				</div>
				<h3 className="mt-2 font-semibold">
					Call Us: {" "}
					<a href="tel:9530391354">
						9530391354
					</a>
				</h3>
			</div>
      <div className="w-full border-t p-4">
        Copyright ©2025 Tawaanzo | All rights reserved.
      </div>
		</div>
	);
}
