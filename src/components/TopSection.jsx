import SocialIcons from "./SocialIcons";

const TopSection = () => {
  return (
    <div className="md:flex items-center justify-between md:px-10 px-7 pt-3">
      <div className=" items-center font-bold text-2xl cursor-pointer hover:text-blue-400 duration-500">
        <a href="/" className="text-lg">
          Admission Open - 2024 Apply
        </a>
      </div>
      <div className="items-center">
        <SocialIcons />
      </div>
    </div>
  );
};

export default TopSection;
