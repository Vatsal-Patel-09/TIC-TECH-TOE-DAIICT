import logo from './assets/logo.png'
import { Link } from 'react-scroll'; // Import Link from react-scroll
// import { Contact } from './contact';
// import { FAQ } from './faq';

export const Navbar = () => {
	const FAQ = () => {};
	const Contact = () => {};

	
    return(
        <header className="p-4 dark:bg-gray-300 dark:text-gray-800 ">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img src={logo} alt="GiftGenie" width={200} height={500}/>
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a to="hero" smooth={true} duration={500} rel="noopener noreferrer" href="#" id="#Home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-  dark:border-violet-600">Home</a>
			</li>
			{/* <li className="flex">
				<a rel="noopener noreferrer" href="#" id="#About" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About</a>
			</li> */}
			<li to="hero" smooth={Contact} duration={500} className="flex">
				<a  rel="noopener noreferrer" href="#" id="#Contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-violet-600">Contact</a>
			</li>
			<li className="flex">
				<a to="hero" smooth={FAQ} duration={500} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-violet-600 ">FAQs</a>
			</li>
		</ul>
		{/* <div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded" fdprocessedid="scrqn">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50" fdprocessedid="nmmewa">Sign up</button>
		</div> */}
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    )
}