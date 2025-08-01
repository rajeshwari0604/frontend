const NAVBAR_LINKS = [
    { name: "About", link: "/about", className: "hover:text-gray-400"},
    { name: "Team", link: "/team", className: "hover:text-gray-400"},
    { name: "Demo", link: "/demo", className: "hover:text-gray-400"},
];

const features = [
  {
    title: "Real-Time Translation",
    desc: "Advanced computer vision and machine learning technology to recognize sign language gestures and instantly convert them into text with sub-100ms latency.",
  },
  {
    title: "Pose Estimation",
    desc: "Utilizes MediaPipe and OpenPose for precise 2D/3D keypoint detection of hands, arms, and body landmarks for accurate gesture interpretation.",
  },
  {
    title: "Deep Learning Architecture",
    desc: "Hybrid CNN-LSTM architecture combining ResNet-50/MobileNetV2 for spatial features and Bi-LSTM for temporal sequence modeling.",
  },
  {
    title: "Natural Language Processing",
    desc: "GPT-3.5 integration for coherent sentence reconstruction from classified gesture sequences, ensuring grammatically correct output.",
  },
  {
    title: "Cross-Platform Deployment",
    desc: "Optimized for web applications, kiosks, and assistive tools with ONNX model conversion for browser-friendly deployment.",
  },
  {
    title: "Accessibility Focus",
    desc: "Designed to bridge communication gaps in healthcare, education, and public services, promoting inclusion and independence.",
  },
];

const teamMembers = [
  {
    name: 'Rajeshwari Akella',
    role: 'Lead Developer',
    hallTicket: '245322733133',
    bio: 'Specializing in computer vision and deep learning architectures. Leading the pose estimation and feature extraction modules.',
    expertise: [
      'Computer Vision',
      'Deep Learning',
      'Pose Estimation',
      'Feature Extraction',
      'Model Optimization'
    ],
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?fit=crop&w=500&h=500&q=80',
  },
  {
    name: 'CH. Thanu Sree',
    role: 'ML Engineer',
    hallTicket: '245322733138',
    bio: 'Expert in sequence modeling and temporal analysis. Responsible for LSTM implementation and gesture classification systems.',
    expertise: [
      'Sequence Modeling',
      'LSTM Networks',
      'Temporal Analysis',
      'Gesture Classification',
      'PyTorch Development'
    ],
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=500&h=500&q=80',
  },
  {
    name: 'Sunkari Praneeth Narayan',
    role: 'NLP Specialist',
    hallTicket: '245322733060',
    bio: 'Focused on natural language processing and text generation. Implementing GPT-3.5 integration for sentence reconstruction.',
    expertise: [
      'Natural Language Processing',
      'Text Generation',
      'GPT Integration',
      'Sentence Reconstruction',
      'API Development'
    ],
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=500&h=500&q=80',
  }
];

const supervisor = {
  name: 'Dr. R. SriLakshmi',
  title: 'Assistant Professor, CSE',
  bio: 'Supervising the Sign2Text project with expertise in machine learning, computer vision, and assistive technologies.',
  photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?fit=crop&w=500&h=500&q=80',
};

const projectStats = [
  {
    value: "100ms",
    label: "Processing Latency",
    description: "Sub-100ms frame processing for real-time interaction"
  },
  {
    value: "500+",
    label: "Sign Vocabulary",
    description: "Expandable vocabulary starting with LSA64 dataset"
  },
  {
    value: "4",
    label: "Core Modules",
    description: "Pose estimation, feature extraction, sequence modeling, text generation"
  }
];

const methodology = [
  {
    stage: "Pose Estimation",
    description: "Extract skeletal keypoints using MediaPipe/OpenPose for hands, arms, and body landmarks",
    tools: ["MediaPipe", "OpenPose"],
    output: "2D/3D spatial coordinates"
  },
  {
    stage: "Feature Extraction", 
    description: "Process frames through CNN-based models for spatial feature representation",
    tools: ["ResNet-50", "MobileNetV2"],
    output: "High-dimensional feature vectors"
  },
  {
    stage: "Sequence Modeling",
    description: "Analyze temporal dynamics using bidirectional LSTM networks",
    tools: ["Bi-LSTM", "PyTorch"],
    output: "Classified gesture sequences"
  },
  {
    stage: "Text Generation",
    description: "Reconstruct coherent sentences using natural language processing",
    tools: ["GPT-3.5", "NLP Models"],
    output: "Grammatically correct text"
  }
];

export {
    NAVBAR_LINKS,
    features,
    teamMembers,
    supervisor,
    projectStats,
    methodology,
}