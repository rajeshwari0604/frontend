import React, { useState } from 'react'
import NavBar from '../Sections/NavBar'
import Footer from '../Sections/Footer'

const Demo = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');

  const handleDemo = () => {
    setIsProcessing(true);
    setResult('');
    
    // Simulate processing
    setTimeout(() => {
      setResult('Hello, how are you today?');
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className='bg-gradient-to-b from-black to-gray-900 text-white min-h-screen'>
      <NavBar />
      
      <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            Interactive Demo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Try Sign2Text Live
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience real-time sign language translation in action. Upload a video or use your webcam 
            to see how our AI system converts gestures into text.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Interface */}
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Video Input</h2>
              
              <div className="aspect-video bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center mb-6">
                {isProcessing ? (
                  <div className="text-center">
                    <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-300">Processing gestures...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Upload video or start webcam</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handleDemo}
                  disabled={isProcessing}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Start Demo'}
                </button>
                <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300">
                  Upload Video
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Pose Detection</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Feature Extraction</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Ready</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Sequence Modeling</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Loaded</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Text Generation</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Translation Output</h2>
              
              <div className="bg-gray-900/50 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                {result ? (
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-blue-400 mb-4">
                      "{result}"
                    </div>
                    <div className="text-sm text-gray-400">
                      Confidence: 94.2% | Processing time: 87ms
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 text-center">
                    Translation results will appear here...
                  </p>
                )}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">87ms</div>
                  <div className="text-sm text-gray-400">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">94.2%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">30fps</div>
                  <div className="text-sm text-gray-400">Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">512</div>
                  <div className="text-sm text-gray-400">Vocabulary</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Capture",
                description: "Video input captured at 30fps with pose estimation"
              },
              {
                step: "2", 
                title: "Extract",
                description: "CNN models extract spatial features from keypoints"
              },
              {
                step: "3",
                title: "Analyze",
                description: "Bi-LSTM networks model temporal gesture sequences"
              },
              {
                step: "4",
                title: "Generate",
                description: "NLP models reconstruct coherent text output"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Demo