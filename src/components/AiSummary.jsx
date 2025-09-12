import React from 'react';
import { useAISummary } from '../hooks/useAISummary';

const AISummary = ({ resumeData, onSummaryUpdate }) => {
  const { isLoading, error, summary, generateSummary, reset } = useAISummary();

  const handleGenerateSummary = async () => {
    try {
      const generatedSummary = await generateSummary(resumeData);
      // Auto-apply the summary if onSummaryUpdate is provided
      if (onSummaryUpdate && generatedSummary) {
        onSummaryUpdate(generatedSummary);
      }
    } catch (err) {
      // Error is already handled in the hook
      console.error('Error in generating summary:', err);
    }
  };

  const handleUseSummary = () => {
    if (summary && onSummaryUpdate) {
      onSummaryUpdate(summary);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
        <span className="mr-2">🤖</span>
        AI Professional Summary Generator
      </h3>
      
      <button
        onClick={handleGenerateSummary}
        disabled={isLoading || !resumeData.name}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed mb-4 transition duration-200 font-medium w-full"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
            Generating AI Summary...
          </span>
        ) : (
          'Generate AI Summary'
        )}
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <div className="flex items-center">
            <span className="mr-2">⚠️</span>
            <strong>Error:</strong> {error}
          </div>
          <button
            onClick={reset}
            className="mt-2 text-red-600 underline text-sm"
          >
            Try Again
          </button>
        </div>
      )}

      {summary && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <span className="mr-2">✨</span>
            Generated Summary:
          </h4>
          <p className="text-gray-600 mb-4 bg-white p-3 rounded border">{summary}</p>
          <div className="flex gap-2">
            <button
              onClick={handleUseSummary}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 flex-1"
            >
              Use This Summary
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {!resumeData.name && (
        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-700 text-sm">
            💡 Add your name and some details in the form above to generate a better AI summary.
          </p>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>Note: You need a valid OpenAI API key in the .env file for this feature to work.</p>
      </div>
    </div>
  );
};

export default AISummary;