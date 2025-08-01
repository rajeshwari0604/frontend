import React from 'react'
import NavBar from '../Sections/NavBar'
import Footer from '../Sections/Footer'

const About = () => {
  return (
    <div className='bg-gradient-to-b from-black to-[#131a2c] text-white min-h-screen'>
      <NavBar />
      
      <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            About the Project
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sign2Text: Bridging Communication Gaps
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            An innovative real-time sign language translation system that uses advanced AI to create 
            more inclusive communication for the deaf and hard-of-hearing community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              Sign2Text addresses the critical communication barrier between sign language users and non-users. 
              With tens of millions of people worldwide using sign language as their primary means of communication, 
              the lack of accessible interpretation services creates significant challenges in healthcare, education, 
              and daily interactions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our solution leverages cutting-edge computer vision and machine learning technology to recognize 
              sign language gestures and instantly convert them into text, enabling seamless communication 
              without the need for human interpreters.
            </p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Objectives</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Develop real-time sign language translation with sub-100ms latency</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Implement advanced pose estimation for accurate gesture tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Create hybrid CNN-LSTM architecture for spatial-temporal analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Enable cross-platform deployment for maximum accessibility</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pose Estimation",
                description: "MediaPipe/OpenPose for keypoint detection",
                icon: "🎯"
              },
              {
                title: "Feature Extraction", 
                description: "CNN models (ResNet-50, MobileNetV2)",
                icon: "🧠"
              },
              {
                title: "Sequence Modeling",
                description: "Bi-LSTM for temporal analysis",
                icon: "⏱️"
              },
              {
                title: "Text Generation",
                description: "GPT-3.5 for sentence reconstruction",
                icon: "📝"
              }
            ].map((stage, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{stage.title}</h3>
                <p className="text-gray-300 text-sm">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Project Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Healthcare</h3>
              <p className="text-gray-300">Enabling better patient-doctor communication in medical settings</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Education</h3>
              <p className="text-gray-300">Supporting inclusive learning environments for deaf students</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Public Services</h3>
              <p className="text-gray-300">Improving accessibility in government and public institutions</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Academic Supervision</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Dr. R. SriLakshmi</h3>
            <p className="text-purple-300 mb-4">Assistant Professor, CSE</p>
            <p className="text-gray-300 text-sm">
              Supervising the Sign2Text project with expertise in machine learning, 
              computer vision, and assistive technologies.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default About