import Link from "next/link";
const Button = ({ text, path }) => {
  return (
    <Link
      href={path}
      className="text-white bg-gray-800 font-medium rounded-full text-xl px-5 py-4 me-0 mb-1 mr-0 h-15"
    >
      {text}
    </Link>
  );
};
export default Button;
