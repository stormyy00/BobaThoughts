import { FaHeart } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

const iconStyle = "mr-2 mt-1";

export const items = [
  {
    name: "yelp",
    link: "/yelp",
    icon: <FaHeart className={iconStyle} />,
  },
  {
    name: "about",
    link: "/about",
    icon: <IoIosInformationCircle className={iconStyle} />,
  },
  {
    name: "gallery",
    link: "/gallery",
    icon: <GrGallery className={iconStyle} />,
  },
  {
    name: "favorites",
    link: "/favorites",
    icon: <FaHeart className={iconStyle} />,
  },
];
