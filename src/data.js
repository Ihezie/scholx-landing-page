import bellIcon from "./assets/icons/bell-ring.svg";
import attendanceIcon from "./assets/icons/attendance.svg";
import testIcon from "./assets/icons/test.svg";
import videoCall from "./assets/icons/video-call.svg";
import envelope from "./assets/icons/envelope.svg";
import bookIcon from "./assets/icons/book-open-cover.svg";
import meetingIcon from "./assets/icons/meeting.svg";

const navLinks = ["about", "features", "benefits", "sign up"];
const keyFeatures = [
  {
    feature: "Real-time Class Activity Notifications",
    icon: bellIcon,
  },
  {
    feature: "Lecturer Contact Information & Email Access",
    icon: envelope,
  },
  {
    feature: "E-attendance",
    icon: attendanceIcon,
  },
  {
    feature: "Online Quizzes & Assessments",
    icon: testIcon,
  },
  {
    feature: "Virtual Online Class Calls",
    icon: videoCall,
  },

  {
    feature: "Core Course Material Library",
    icon: bookIcon,
  },
  {
    feature: "Seamless Student Communication",
    icon: meetingIcon,
  },
];

const productBenefits = [
  {
    title: "lecturers",
    benefits: [
      {
        benefit: "Real-time Class Activity Notifications",
        details:
          "Gain real-time insights into student engagement with class activities. Identify areas needing clarification and adjust your teaching approach accordingly.",
      },
      {
        benefit: "E-attendance",
        details:
          "Automate attendance tracking, saving you valuable time and effort. Focus on delivering engaging lectures instead of managing attendance sheets.",
      },
      {
        benefit: "Online Quizzes & Assessments",
        details:
          "Create and deploy online quizzes and assessments effortlessly. Evaluate student understanding efficiently and receive valuable data to improve your teaching methods.",
      },
      {
        benefit: "Virtual Online Class Calls",
        details:
          "Host interactive online lectures and discussions, reaching students regardless of location. Foster a dynamic learning environment even with remote participation.",
      },
      {
        benefit: "Lecturer Contact Information & Email Access",
        details:
          "Provide students with a centralized and easily accessible platform to reach you. Streamline communication and address student queries promptly.",
      },
      {
        benefit: "Core Course Material Library",
        details:
          "Share all your course materials, including syllabi, notes, and assignments, in a single, organized location. Students can easily access them anytime, anywhere.",
      },
      {
        benefit: "Seamless Student Communication",
        details:
          "Empower active learning through class forums and discussions. Facilitate peer-to-peer interaction and encourage a collaborative learning environment.",
      },
    ],
  },
  {
    title: "students",
    benefits: [
      {
        benefit: "Real-time Class Activity Notifications",
        details:
          "Never miss a beat! Get instant updates on assignments, discussions, and deadlines, ensuring you stay on top of your studies.",
      },
      {
        benefit: "E-attendance",
        details:
          "Say goodbye to paper attendance sheets. E-attendance makes marking attendance effortless for lecturers and provides students with a clear record.",
      },
      {
        benefit: "Online Quizzes & Assessments",
        details:
          "Take interactive quizzes and assessments directly through Scholx. Get immediate feedback and track your progress to master course material.",
      },
      {
        benefit: "Virtual Online Class Calls",
        details:
          "Join live lectures and discussions from anywhere. Scholx facilitates seamless online learning, allowing you to participate actively even when remote.",
      },
      {
        benefit: "Lecturer Contact Information & Email Access",
        details:
          "Easily access contact details for your lecturers. Send questions or clarifications directly through Scholx, fostering clear communication.",
      },
      {
        benefit: "Core Course Material Library",
        details:
          "Access all your course materials, including notes, presentations, and assignments, in a centralized and organized location. Scholx keeps everything you need at your fingertips.",
      },
      {
        benefit: "Seamless Student Communication",
        details:
          "Connect with your classmates through forums, group chats, and direct messaging. Collaborate on projects, share knowledge, and build a strong learning community.",
      },
    ],
  },
];

const benefitsForLecturers = {
  title: "lectures",
  benefits: [
    {
      benefit: "Real-time Class Activity Notifications",
      details:
        "Gain real-time insights into student engagement with class activities. Identify areas needing clarification and adjust your teaching approach accordingly.",
    },
    {
      benefit: "E-attendance",
      details:
        "Automate attendance tracking, saving you valuable time and effort. Focus on delivering engaging lectures instead of managing attendance sheets.",
    },
    {
      benefit: "Online Quizzes & Assessments",
      details:
        "Create and deploy online quizzes and assessments effortlessly. Evaluate student understanding efficiently and receive valuable data to improve your teaching methods.",
    },
    {
      benefit: "Virtual Online Class Calls",
      details:
        "Host interactive online lectures and discussions, reaching students regardless of location. Foster a dynamic learning environment even with remote participation.",
    },
    {
      benefit: "Lecturer Contact Information & Email Access",
      details:
        "Provide students with a centralized and easily accessible platform to reach you. Streamline communication and address student queries promptly.",
    },
    {
      benefit: "Core Course Material Library",
      details:
        "Share all your course materials, including syllabi, notes, and assignments, in a single, organized location. Students can easily access them anytime, anywhere.",
    },
    {
      benefit: "Seamless Student Communication",
      details:
        "Empower active learning through class forums and discussions. Facilitate peer-to-peer interaction and encourage a collaborative learning environment.",
    },
  ],
};

const benefitsForStudents = {
  title: "students",
  benefits: [
    {
      benefit: "Real-time Class Activity Notifications",
      details:
        "Never miss a beat! Get instant updates on assignments, discussions, and deadlines, ensuring you stay on top of your studies.",
    },
    {
      benefit: "E-attendance",
      details:
        "Say goodbye to paper attendance sheets. E-attendance makes marking attendance effortless for lecturers and provides students with a clear record.",
    },
    {
      benefit: "Online Quizzes & Assessments",
      details:
        "Take interactive quizzes and assessments directly through Scholx. Get immediate feedback and track your progress to master course material.",
    },
    {
      benefit: "Virtual Online Class Calls",
      details:
        "Join live lectures and discussions from anywhere. Scholx facilitates seamless online learning, allowing you to participate actively even when remote.",
    },
    {
      benefit: "Lecturer Contact Information & Email Access",
      details:
        "Easily access contact details for your lecturers. Send questions or clarifications directly through Scholx, fostering clear communication.",
    },
    {
      benefit: "Core Course Material Library",
      details:
        "Access all your course materials, including notes, presentations, and assignments, in a centralized and organized location. Scholx keeps everything you need at your fingertips.",
    },
    {
      benefit: "Seamless Student Communication",
      details:
        "Connect with your classmates through forums, group chats, and direct messaging. Collaborate on projects, share knowledge, and build a strong learning community.",
    },
  ],
};

export { navLinks, keyFeatures, benefitsForLecturers, benefitsForStudents, productBenefits };
