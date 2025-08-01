import React from "react";
import CircleCounter from "../Components/CircleCounter";
import { projectStats } from "../Data/Data";

const StatsSection = () => {
  return (
    <div className="bg-[#0e1629] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            Project Metrics
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#428DFF] to-[#275599] bg-clip-text text-transparent">
            Performance Indicators
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Key performance metrics demonstrating the efficiency and capability of our Sign2Text system
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-blue-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-ping-slow"></div>
              </div>
              <p className="text-gray-300 text-sm max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Hardware Requirements</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Intel i7 (10th Gen+)</li>
              <li>• NVIDIA RTX 2060 (CUDA)</li>
              <li>• 16GB RAM</li>
              <li>• 256GB SSD</li>
              <li>• HD Webcam</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Software Stack</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Python 3.11+</li>
              <li>• PyTorch 1.12+</li>
              <li>• OpenPose/MediaPipe</li>
              <li>• OpenCV</li>
              <li>• GPT-3.5 API</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Key Technologies</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• CNN (ResNet-50)</li>
              <li>• Bi-LSTM Networks</li>
              <li>• ONNX Conversion</li>
              <li>• CUDA Acceleration</li>
              <li>• Flask Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;