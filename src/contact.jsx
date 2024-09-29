import React from "react"
import { Navbar } from "./navbar"

export const Contact = () => {
    return (
	<div>
        
        <div className="grid max-w-screen-xxl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className=" text-4xl font-bold leading-tight lg:text-6xl">Let's talk!</h2>
			{/* <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div> */}
		</div>
		<img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="Enter your Full Name" className="w-full p-3 rounded dark:bg-gray-200 " fdprocessedid="2p428" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" placeholder="Enter your Email" className="w-full p-3 rounded dark:bg-gray-200" fdprocessedid="ahepj" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" placeholder="Give us some Exciting Feedback...!!" className="w-full p-3 rounded dark:bg-gray-200"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50" fdprocessedid="4whnu8">Send Message</button>
	</form>
</div>
        
</div>	
    )
}