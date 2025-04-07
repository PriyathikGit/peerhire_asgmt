import { useState } from 'react';

function BidForm({ project, onSubmit, onCancel }) {
    const [bidAmount, setBidAmount] = useState(project?.bidAmount || '');
    const [timeline, setTimeline] = useState(project?.timeline || '');
    const [proposal, setProposal] = useState(project?.proposal || '');
    const [status, setStatus] = useState(project?.status || 'Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            bidAmount: parseFloat(bidAmount),
            timeline: parseInt(timeline),
            proposal,
            status
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Place Bid for {project?.name || project?.projectName}</h3>

            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="bidAmount">
                    Your Bid Amount (₹)
                </label>
                <input
                    id="bidAmount"
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                    rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Project budget: ₹{project?.budget?.toLocaleString()}
                </p>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="timeline">
                    Proposed Timeline (days)
                </label>
                <input
                    id="timeline"
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Client's timeline: {project.timeline} days
                </p>
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="proposal">
                    Your Proposal
                </label>
                <textarea
                    id="proposal"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    id="status"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Select status</option>
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                    Submit Bid
                </button>
            </div>
        </form>
    );
}

export default BidForm