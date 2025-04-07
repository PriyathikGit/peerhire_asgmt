function ProfileSection() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden mt-8 md:mt-0">
            <div className="p-6">
                <div className="flex items-center">
                    <div className="h-24 w-24 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-3xl font-bold text-gray-600 dark:text-gray-300">
                        JD
                    </div>
                    <div className="ml-6">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">John Doe</h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">Full Stack Developer</p>
                        <p className="text-gray-600 dark:text-gray-300">5 years of experience</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">About Me</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Experienced full-stack developer specializing in React, Node.js, and modern web technologies.
                        I've delivered over 50 projects for clients worldwide, focusing on clean code and user experience.
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Skills</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'GraphQL', 'TypeScript'].map(skill => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Portfolio</h2>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Personal Website</a>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Completed Projects</h2>
                    <div className="mt-4 space-y-4">
                        {[
                            { name: 'E-commerce Platform', description: 'Built a full-stack e-commerce solution with React and Node.js', date: 'Jan 2023' },
                            { name: 'Task Management App', description: 'Developed a collaborative task management application', date: 'Nov 2022' },
                            { name: 'Portfolio Website', description: 'Designed and developed a portfolio website for a photographer', date: 'Aug 2022' }
                        ].map((project, index) => (
                            <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                                <h3 className="font-medium text-gray-800 dark:text-white">{project.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Completed: {project.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection