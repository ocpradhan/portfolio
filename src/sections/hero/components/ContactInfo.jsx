import { IoDocumentText } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactInfoList = [
  { icon: <IoDocumentText className="text- text-3xl" />, location: "#" },
  { icon: <FaLinkedin className="text-3xl" />, location: "#" },
  { icon: <MdEmail className="text-3xl" />, location: "#" },
];

function ContactInfo() {
  return (
    <div className="flex gap-4">
      {contactInfoList.map((item, i) => (
        <a href={item.location} key={i}>
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default ContactInfo;
