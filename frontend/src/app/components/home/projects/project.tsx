import React from 'react';

const Project = () => {
    const projects = [
        {
            duration: "Jan 2026 - Mar 2026",
            title: "Industrial Employee Management",
            github: "https://github.com/DharaviyaNikunj/Industrial-Employee-Management.git",
            description: "Developed a full-stack employee management system with role-based access, CRUD operations, and dashboard analytics.",
            tech: "React, Node.js, Express, MongoDB"
        },
 {
    duration: "March 2026 - April 2026",
    title: "Car Rental System",
    github: "https://github.com/DharaviyaNikunj/Car-Rental-System.git",
    description: "Developed a Car Rental System to manage car bookings, customer records, and driver details. The system allows users to book cars, track availability, manage rental history, and handle driver assignments efficiently through a structured database.",
    tech: "ASP.NET, Microsoft SQL Server 2012"
},{
    duration: "Feb 2026 - Mar 2026",
    title: "MERN Grocery App",
    github: "https://github.com/DharaviyaNikunj/grocery.git",
    description: "Developed a full-stack Grocery Web Application using the MERN stack, allowing users to browse products, add items to cart, and place orders. Implemented responsive UI, dynamic product management, and efficient backend APIs for handling user data and transactions.",
    tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS"
}
    ];
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Projects</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                  <div className="space-y-10">
                        {projects.map((proj, index) => (
                            <div key={index} className="border-b pb-6">

                                {/* Title + Link */}
                                <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                                        {proj.title}
                                    </a>
                                </h3>

                                {/* Duration */}
                                <p className="text-sm text-gray-500 mb-2">
                                    {proj.duration}
                                </p>

                                {/* Description */}
                                <p className="text-base mb-2">
                                    {proj.description}
                                </p>

                                {/* Tech Stack */}
                                <p className="text-sm text-gray-600">
                                    <strong>Tech Stack:</strong> {proj.tech}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;