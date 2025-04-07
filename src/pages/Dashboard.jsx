import { useState, useEffect, useCallback } from 'react';
import ProjectCard from '../components/ProjectCard';
import BidForm from '../components/BidForm';
import BidList from '../components/BidList';

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(selectedProject)

    useEffect(() => {
        // Fetch projects from API
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        // Load bids from localStorage
        const savedBids = JSON.parse(localStorage.getItem('freelancerBids')) || [];
        setBids(savedBids);

        fetchProjects();
    }, []);

    // saving  bid data
    const handleBidSubmit = (bidData) => {
        const newBid = {
            ...bidData,
            projectId: selectedProject.id,
            projectName: selectedProject.name,
            date: new Date().toISOString()
        };
        const updatedBids = [...bids, newBid];
        setBids(updatedBids);
        localStorage.setItem('freelancerBids', JSON.stringify(updatedBids));
        setSelectedProject(null);
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="md:w-[80%] mx-auto px-4 py-8 md:pl-24">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white mt-8 md:mt-0">Available Projects</h1>

                {loading ? (
                    <div className="text-center">Loading projects...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onSelect={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                )}

                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
                            <BidForm
                                project={selectedProject}
                                onSubmit={handleBidSubmit}
                                onCancel={() => setSelectedProject(null)}
                            />
                        </div>
                    </div>
                )}

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Your Bids</h2>
                    <BidList
                        bids={bids}
                        setBids={setBids}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard