import { useNavigate } from 'react-router-dom';


export const Hero = () => {
    const handleNavigation = () => {
        window.open('/chatbot', '_blank'); // Opens the chatbot page in a new tab
    };

    return (
        <section className=" dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Let AI help you find the perfect gift! 
                    <span className="dark:text-violet-600"> Our smart assistant personalizes recommendations </span>
                </h1>
                <p className="px-8 mt-8 mb-10 text-lg">Let AI help you find the perfect gift! Our smart assistant personalizes recommendations </p>
                <div className="flex flex-wrap justify-center">
                    <button onClick={handleNavigation} className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                        Get started
                    </button>
                </div>
            </div>
        </section>
        
    );
};
