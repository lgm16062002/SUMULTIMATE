export const ANIMATION_CONFIG = {
  DURATION: {
    fast: 0.6,
    normal: 0.75,
    slow: 0.8,
  },
  EASE: {
    power2: "power2.out",
    back: "back.out(1.7)",
    none: "none",
  },
  STAGGER: 0.08,
  SCROLL_TRIGGER: {
    heroFade: { start: "top 86%" },
    navFill: { start: "top 80%", end: "bottom 60%" },
  },
  Y_OFFSET: {
    hero: 28,
    article: 36,
    title: 60,
  },
  PARALLAX: {
    frame: -32,
    imageY: -3.5,
    imageScale: { from: 1.08, to: 1.12 },
  },
};

export const BREAKPOINTS = {
  lg: 1024,
};

export const doctorProfile = {
  degree: "Senior Consultant & HOD",
  name: "Dr Radhamadhab Sahu",
  department: "ENT and Skull Base Surgery",
  specialtyGroup: "9:30 AM to 5:30 PM",
  expertise: [
    "Endoscopic Skull Base Surgery",
    "Trans Oral Endoscopic Thyroid Surgery",
    "Endoscopic Sinus Surgery",
    "Endoscopic Ear Surgery",
    "Voice & Laser Surgery",
    "Cochlear Implants",
  ],
};

export const doctorSections = [
  {
    id: "qualifications",
    label: "Qualifications",
    title: "Qualifications",
    items: [
      { heading: "MBBS - SCB Medical College & Hospital" },
      { heading: "DNB (ENT) - VMMC & Safdarjung Hospital, New Delhi" },
      {
        heading:
          "Neurosurgery training for skull base surgery - VMMC & Safdarjung Hospital, New Delhi",
      },
    ],
  },
  {
    id: "expertise",
    label: "Expertise",
    title: "Expertise",
    items: [
      {
        heading: "Endoscopic Minimal Invasive Skull Base Surgery",
        description: "Both anterior and lateral skull base approaches",
      },
      {
        heading: "Trans oral Endoscopic thyroid surgery",
        description: "Complete scar less approach",
      },
      { heading: "Endoscopic Sinus Surgery" },
      { heading: "Endoscopic Ear Surgery" },
      {
        heading: "Eustachian tube surgery",
        description: "Balloon Eustachian Tuboplasty",
      },
      { heading: "Voice surgery, Laryngology, Laser surgery" },
      {
        heading:
          "Cochlear Implants, BAHA, Auditory Brainstem Implant, Vestibular Implant",
      },
      { heading: "Snoring and Obstructive Sleep Apnea surgery" },
      { heading: "Head & Neck cancer Surgery" },
      { heading: "Sialoendoscopy" },
      { heading: "Vestibular Rehabilitation" },
    ],
  },
  {
    id: "brief-profile",
    label: "Brief Profile",
    title: "Brief Profile",
    items: [
      {
        heading:
          "Dr. Radhamadhab Sahu is an exceptionally talented and internationally acclaimed ENT & Skull Base Surgeon with enormous experience in handling challenging cases.",
      },
      {
        heading:
          "He completed his post-graduation in ENT from VMMC & Safdarjung Hospital, New Delhi, followed by 3 years of neurosurgery training for skull base surgery.",
      },
      {
        heading:
          "He has more than 12 years of clinical and surgical expertise in ENT & Skull Base Surgery, including minimally invasive skull base and extended endoscopic approaches.",
      },
      {
        heading:
          "Dr. Sahu has worked with Padmashree Dr. (Prof.) V. S. Mehta at Paras Hospital Gurgaon as an independent consultant for endoscopic skull base surgery.",
      },
      {
        heading:
          "He has operated more than 600 skull base cases, including international patients from over 20 countries.",
      },
      {
        heading:
          "He introduced multiple surgeries in Odisha including trans oral endoscopic thyroid surgery, Balloon Eustachian Tuboplasty, endoscopic trans nasal excision of Trigeminal Schwannoma, sialoendoscopy, and endoscopic trans oral submandibular gland excision.",
      },
      {
        heading:
          "He is an international faculty member for instructional courses, cadaveric dissections, and fellowship courses, with numerous publications and conference lectures.",
      },
      {
        heading:
          "Dr. Sahu has also saved the lives of many babies with difficult tracheobronchial foreign bodies using innovative techniques.",
      },
    ],
  },
  {
    id: "awards-recognition",
    label: "Awards & Recognition",
    title: "Awards & Recognition",
    items: [
      {
        heading:
          "Awarded with Ved Prakash Monga Award for best temporal bone dissection",
      },
    ],
  },
];
