import React from "react";
import { useSession, signIn } from "next-auth/react";

function DisplayProfile() {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <>
      <div className="display-profile">
        {session && (
          <>
            <div>
              <div className="profile-image">
                <img src={session.user.image} alt="" />
              </div>
              <div className="profile-details">
                <h3>{session.user.name}</h3>
                <p> Email: {session.user.email}</p>
              </div>
            </div>
          </>
        )}

        {!session && (
          <>
            <a href="#" onClick={handleSignin} className="btn-signin">
              Sorry - this page is restricted to members only. Please log in to
              view your details.
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default DisplayProfile;
