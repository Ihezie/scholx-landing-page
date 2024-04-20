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

export { navLinks, keyFeatures };
