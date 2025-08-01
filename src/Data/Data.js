const NAVBAR_LINKS = [
    { name: "Doctors", link: "/doctors", className: "hover:text-gray-400"},
    { name: "Reviews", link: "/reviews", className: "hover:text-gray-400"},
];

const abilities = [
  {
    imgPath: "/expertise.png",
    title: "Specialized Expertise",
    desc: "Over a decade of experience in obstetrics and gynecology, ensuring expert care across every stage of a woman’s health.",
  },
  {
    imgPath: "/compassion.png",
    title: "Compassionate Care",
    desc: "Providing patient-centered care with empathy, respect, and understanding in every interaction.",
  },
  {
    imgPath: "/trust.png",
    title: "Trust & Transparency",
    desc: "Building strong patient relationships through honest communication and shared decision-making.",
  },
  {
    imgPath: "/innovation.png",
    title: "Advanced Technology",
    desc: "Utilizing the latest medical advancements and diagnostic tools to offer the highest standard of care.",
  },
  {
    imgPath: "/support.png",
    title: "Continuity of Care",
    desc: "Offering consistent, long-term support tailored to each patient's unique journey through womanhood.",
  },
  {
    imgPath: "/education.png",
    title: "Patient Education",
    desc: "Empowering women with clear, accurate information to make confident, informed health decisions.",
  },
];

const doctors = [
  {
    name: 'Dr. Pamela Narayan',
    title: 'Neurophysiotherapist',
    bio: `Pioneer in neurorehabilitation and physiotherapy for bleeding disorders. Faculty, presenter, and researcher with global impact.`,
    expertise: [
      'Post-stroke neurorehab',
      'Spasticity & dysphagia treatment',
      'Constraint-induced therapy',
      'Hemophilia MSK rehab',
      'Training across South Asia'
    ],
    photo: 'https://images.unsplash.com/photo-1588776814546-ec7c5d61c61b?fit=crop&w=500&h=500&q=80',
    testimonial: 'Dr. Pamela’s impact on neurorehabilitation has been transformative. Her knowledge, warmth, and global leadership truly set her apart.',
    timeline: [
      {
        title: 'BPT – CMC Vellore',
        date: '1991',
        logoPath: 'https://cdn-icons-png.flaticon.com/512/921/921347.png',
        responsibilities: [
          'Graduated with foundational physiotherapy training.',
          'Laid early interest in neuro-based patient care.',
          'Became a strong advocate for integrated rehab approaches.'
        ]
      },
      {
        title: 'MSc Neurophysiotherapy – Univ. of East London',
        date: '1997',
        logoPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        responsibilities: [
          'Deepened clinical focus on neurorehabilitation.',
          'Researched post-stroke and head injury recovery protocols.',
          'Built global networks in physiotherapy education.'
        ]
      }
    ]
  },
  {
    name: 'Dr. Sriram Chandra Damaraju',
    title: 'Neurosurgeon',
    bio: `25+ years in brain, spine, and pediatric neurosurgery. CMC-trained, multilingual, and a veteran in craniofacial procedures.`,
    expertise: [
      'Brain tumour surgery',
      'Stroke & spinal neurosurgery',
      'Pediatric neurosurgery',
      'Craniofacial reconstruction'
    ],
    photo: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?fit=crop&w=500&h=500&q=80',
    testimonial: 'Dr. Sriram is a master of precision. His hands and heart both bring healing. Patients trust him with their lives—and rightly so.',
    timeline: [
      {
        title: 'MBBS – Osmania Medical College',
        date: '1995',
        logoPath: 'https://cdn-icons-png.flaticon.com/512/4201/4201012.png',
        responsibilities: [
          'Completed foundational training in medicine.',
          'Discovered passion for neurosurgery during rotations.',
          'Built core knowledge in brain and spine anatomy.'
        ]
      },
      {
        title: 'MCh Neurosurgery – CMC Vellore',
        date: '2003',
        logoPath: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
        responsibilities: [
          'Specialized in complex brain and spine surgeries.',
          'Performed groundbreaking craniofacial reconstructions.',
          'Mentored junior surgeons across multiple states.'
        ]
      }
    ]
  }
];

const testimonials = [
  {
    name: "Aditi Sharma",
    date: "March 15, 2023",
    imgPath: "/patient1.jpg",
    feedback: "Dr. Pamela's care transformed my recovery journey. Her expertise and compassion made all the difference.",
  },
  {
    name: "Rajesh Kumar",
    date: "April 10, 2023",
    imgPath: "/patient2.jpg",
    feedback: "I can't thank Dr. Sriram enough for his skill and dedication. He gave me my life back after my surgery.",
  },
  {
    name: "Priya Mehta",
    date: "May 5, 2023",
    imgPath: "/patient3.jpg",
    feedback: "The entire team at the clinic is amazing! They truly care about their patients and it shows.",
  },
  {
    name: "Amit Patel",
    date: "June 20, 2023",
    imgPath: "/patient4.jpg",
    feedback: "Dr. Pamela's expertise and compassion made all the difference. I highly recommend her.",
  },
  {
    name: "Neha Gupta",
    date: "July 15, 2023",
    imgPath: "/patient5.jpg",
    feedback: "Dr. Sriram's surgical precision and post-operative care were exceptional. I'm grateful for his care.",
  },
  
  {
    name: "Neha Gupta",
    date: "July 15, 2023",
    imgPath: "/patient5.jpg",
    feedback: "Dr. Sriram's surgical precision and post-operative care were exceptional. I'm grateful for his care.",
  },
  
  {
    name: "Neha Gupta",
    date: "July 15, 2023",
    imgPath: "/patient5.jpg",
    feedback: "Dr. Sriram's surgical precision and post-operative care were exceptional. I'm grateful for his care.",
  }
];

export {
    NAVBAR_LINKS,
    abilities,
    doctors,
    testimonials,
}