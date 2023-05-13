interface SanityBody {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  // role: string;
  heroImage: Image;
  profilePicture: Image;
  backgroundInformation: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  progress: number;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  jobTitle: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  backgroundInformation: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  summary: string;
  linkToBuild: string;
  linkToSourceCode: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
