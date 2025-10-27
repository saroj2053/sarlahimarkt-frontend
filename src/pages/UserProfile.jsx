import { useState } from "react";
import AppLayout from "../layout/AppLayout";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import usePasswordUpdate from "../hooks/usePasswordUpdate";
import useProfileUpdate from "../hooks/useProfileUpdate";
import ProfileSidebar from "../components/ProfileSidebar";

const UserProfile = () => {
  const authUser = useSelector(selectUser);
  const { updatePassword } = usePasswordUpdate();
  const { loading, updateProfile } = useProfileUpdate();

  const [passwordInputs, setPasswordInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profilePic, setProfilePic] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState(authUser?.user.name);
  const [email, setEmail] = useState(authUser?.user.email);

  const handleImageChange = (e) => {
    setProfilePic(e.target.files[0]);

    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  console.log(imageUrl);

  const profileUpdateHandler = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("name", name);
    formData.append("email", email);
    const succeedUploading = await updateProfile(formData);
    if (succeedUploading) {
      setImageUrl("");
    }
  };

  const passwordChangeHandler = async (evt) => {
    evt.preventDefault();
    const success = await updatePassword(passwordInputs);
    console.log(success);
    if (success) {
      setPasswordInputs({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <AppLayout>
      <div className="flex shadow-md p-10">
        <ProfileSidebar />
        <div className="flex-1 bg-white py-20">
          <div className="max-w-[70%] mx-auto pb-12">
            <h2 className="text-2xl font-semibold uppercase mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
              Your Account Settings
            </h2>
            <div className="flex justify-center items-center mb-5">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={authUser?.user.avatar}
                alt="avatar"
              />
            </div>
            <form onSubmit={profileUpdateHandler}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm text-slate-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                  placeholder={authUser?.user.name}
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-slate-800 rounded-md  placeholder:text-slate-400 placeholder:text-sm border-none outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm text-slate-800 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="bg-[#f2f2f2] px-3 py-3 w-full text-slate-800 rounded-md  placeholder:text-slate-400  border-none outline-none"
                  placeholder={authUser?.user.email}
                />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <div className="w-full">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-medium">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
                <div>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      className="w-[250px] shadow-md"
                      alt="new selected profile pic"
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-7">
                <button
                  className="border-none outline-none bg-gradient-to-t from-primary-red to-primary-yellow text-white  px-6 py-2 rounded-full uppercase transition-all duration-[350ms] hover:scale-95 hover:shadow-sm hover:shadow-slate-400"
                  disabled={loading}
                  onClick={profileUpdateHandler}
                >
                  {loading ? "Updating..." : "Update Settings"}
                </button>
              </div>
            </form>
          </div>
          <hr />
          <div className="max-w-[70%] mx-auto pt-12">
            <h2 className="text-xl font-semibold uppercase mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-t from-primary-yellow to-primary-red">
              Password Change
            </h2>
            <form onSubmit={passwordChangeHandler}>
              <div className="mb-6">
                <label
                  htmlFor="oldPassword"
                  className="block text-sm text-slate-800 mb-2"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={passwordInputs.oldPassword}
                  onChange={(evt) =>
                    setPasswordInputs({
                      ...passwordInputs,
                      oldPassword: evt.target.value,
                    })
                  }
                  className="bg-[#f2f2f2] px-3 py-3 w-full  text-slate-800 rounded-md placeholder:text-slate-400 placeholder:text-4xl outline-none border-none"
                  placeholder="........"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="newPassword"
                  className="block text-sm text-slate-800 mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={passwordInputs.newPassword}
                  onChange={(evt) =>
                    setPasswordInputs({
                      ...passwordInputs,
                      newPassword: evt.target.value,
                    })
                  }
                  className="bg-[#f2f2f2] px-3 py-3 w-full  text-slate-800 rounded-md placeholder:text-slate-400 placeholder:text-4xl outline-none border-none"
                  placeholder="........"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm text-slate-800 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={passwordInputs.confirmPassword}
                  onChange={(evt) =>
                    setPasswordInputs({
                      ...passwordInputs,
                      confirmPassword: evt.target.value,
                    })
                  }
                  className="bg-[#f2f2f2] px-3 py-3 w-full  text-slate-800 rounded-md placeholder:text-slate-400 placeholder:text-4xl outline-none border-none"
                  placeholder="........"
                  required
                />
              </div>
              <div className="flex justify-end mt-12">
                <button
                  className="border-none outline-none bg-gradient-to-t from-primary-red to-primary-yellow text-white  px-6 py-2 rounded-full uppercase transition-all duration-[350ms] hover:scale-95 hover:shadow-sm hover:shadow-slate-400"
                  onClick={passwordChangeHandler}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserProfile;
