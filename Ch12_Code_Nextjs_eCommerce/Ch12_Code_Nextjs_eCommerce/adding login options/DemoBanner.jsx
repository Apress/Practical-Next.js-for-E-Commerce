import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const DemoBanner = () => {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className="demo-banner-container">
      <span>
        This is a demo store - no orders will be accepted or delivered
      </span>

      <span>
        {session && (
          <>
            <img src={session.user.image} alt="" />
            <p> Welcome, {session.user.name ?? session.user.email}</p>
            <a href="#" onClick={handleSignout} className="btn-signin">
              Sign out
            </a>
          </>
        )}

        {!session && (
          <>
            <p>Welcome</p>
            <a href="#" onClick={handleSignin} className="btn-signin">
              Sign in
            </a>
          </>
        )}
      </span>
    </div>
  );
};

export default DemoBanner;
