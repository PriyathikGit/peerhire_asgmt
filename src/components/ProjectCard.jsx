function ProjectCard({ project, onSelect }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>

                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">₹{project.budget.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{project.timeline} days</p>
                    </div>

                    <button
                        onClick={onSelect}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                        Place Bid
                    </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.skills.map(skill => (
                            <span
                                key={skill}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard