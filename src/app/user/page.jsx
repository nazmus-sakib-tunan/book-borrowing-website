"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UserPage = () => {
  const router = useRouter();
  const { data, isPending } = useSession();

  if (isPending) {
    return <div className="p-10">Loading...</div>;
  }

  const user = data?.user;

  if (!user) {
    return <div className="p-10">Please login first</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      
      {/* Profile Card */}
      <div className="flex flex-col items-center p-6 shadow-lg rounded-xl bg-white w-80">
        
        {/* Profile Image / Avatar */}
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold mt-3">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

        {/* Signout */}
        <button
          className="btn btn-error mt-5 w-full"
          onClick={() => {
            signOut();
            router.push("/");
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserPage;