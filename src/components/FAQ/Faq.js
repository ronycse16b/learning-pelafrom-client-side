import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 shadow-md lg:py-10">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions </h2>
                    <p className="mt-4 mb-8 dark:text-gray-400"></p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">why graphics design is important?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Graphic design not only makes something look good, it organizes information to help deliver a message in the most impactful way possible. When you combine the right image, a well-written headline, professionally executed in a well-established package, then BOOM! The message hits its target </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can I learn graphic design by myself??</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">With time, effort and dedication, it is very possible to teach yourself to become a graphic designer. Some of the steps involced include: Learn how to draw: You cannot design if you cannot communicate your designs, therefore learning how to draw by hand or by computer, is a must </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is graphic designing easy to learn??</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Is Graphic Design Hard to Learn? Learning graphic design is not hard, but it does require creative thinking, an aptitude towards art and design, and time and dedication. Graphic design requires learning the necessary tools, as well as understanding and applying the principles and theories of design. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;