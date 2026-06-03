"use client";

import { useState } from "react";
import { useSession, signOut, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UserPage = () => {
  const router = useRouter();
  const { data, isPending } = useSession();

  const [name, setName] = useState("");

  if (isPending) {
    return <div className="p-10">Loading...</div>;
  }

  const user = data?.user;

  if (!user) {
    return <div className="p-10">Please login first</div>;
  }

  const handleUpdate = async () => {
    if (!name) {
      alert("Please enter a name");
      return;
    }

    const { error } = await authClient.updateUser({
      name: name,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Name updated successfully");
    window.location.reload();
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">

      {/* Profile Card */}
      <div className="flex flex-col items-center p-6 shadow-lg rounded-xl bg-emerald-100 w-80 border border-gray-200">

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        {/* Current Info */}
        <h2 className="text-xl font-bold mt-3">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

        {/* Update Name Input */}
        <input
          type="text"
          placeholder="Enter new name"
          className="mt-4 p-2 border rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Update Button */}
        <button
          className="btn btn-primary mt-3 w-full"
          onClick={handleUpdate}
        >
          Update Name
        </button>

        {/* Sign Out */}
        <button
          className="btn btn-error mt-5 w-full"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserPage;