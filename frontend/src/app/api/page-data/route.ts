import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "nikunjdharaviya05@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:nikunjdharaviya05@gmail.com"
    },
    {
      type: "phone",
      label: "+91 76003 89101",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+90 76003 89101"
    },
    {
      type: "website",
      label: "www.mywebsite.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://www.mywebsite.com"
    }
  ],
  socialItems: [
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "www.linkedin.com/in/nikunj-dharaviya"
    },
  ]
};


const educationData = {
  education: [
    {
      title: "12th Science - 2021",
      description: "Successfully completed Higher Secondary Education (12th Science) in 2021 from Brillant School of Science, with a focus on developing strong technical and analytical skills."
    },
    {
      title: "BCA(Bachlar of Computer Application) - 2024",
      description: "Initiated my career in 2024 at Shree H.J. Doshi College, with a focus on gaining industry-relevant skills and hands-on experience in technology."
    },
    {
      title: "MCA(Master Of Computer Application) - 2026",
      description: "MCA (Master of Computer Applications) candidate, graduating in 2026 from Marwadi University, Rajkot, with a focus on software development and modern technologies."
    }
  ],
  skills: [
    {
      name: "MONGODB",
      icon: "/images/home/education-skill/IMG_Mongo.png",
      rating: 4
    },
    {
      name: "React.js",
      icon: "/images/home/education-skill/IMG_react.png",
      rating: 5
    },
    {
      name: "Express.js",
      icon: "/images/home/education-skill/IMG_express.png",
      rating: 4
    },
    {
      name: "Node.js",
      icon: "/images/home/education-skill/IMG_node.png",
      rating: 5
    },
    {
      name: "MERN",
      icon: "/images/home/education-skill/MERN-tack.png",
      rating: 3.5
    },
    {
      name: "C#.NET",
      icon: "/images/home/education-skill/IMG_Cnet.png",
      rating: 5
    },
  
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "LinkedIn",
      href: "/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "nikunjdharaviya05@gmail.com",
      link: "mailto:nikunjdharaviya05@gmail.com"
    },
    {
      type: "phone",
      label: "+91 76003 89101",
      link: "tel:+91 76003 89101"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
