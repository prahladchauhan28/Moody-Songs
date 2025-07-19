import Mood from "../components/Mood.jsx";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-4 border-blue-500 rounded-xl p-1 shadow-lg">
        <div className="w-50 h-50 object-cover rounded-lg">
        {/*   <Mood /> */}
        </div>
      </div>
      <div className="mt-4 text-xl flex items-center gap-2">
        <span>😊</span>
        <span className="font-semibold">Happy</span>
      </div>
    </div>
  );
};

export default Profile;
