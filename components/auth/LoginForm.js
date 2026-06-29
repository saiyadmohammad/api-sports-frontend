"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { setCookie, getCookie } from "cookies-next";
import { useFirebaseAuth } from "@/context/FirebaseAuthContext";

import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, getAuth } from "firebase/auth";
import Image from "next/image";

export default function LoginForm({ switchToSignup, closeModal, setUserBackend, user }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { user} = useFirebaseAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({email, password }),
      });

      const resData = await res.json();
      // console.log(resData);

      setCookie("user_token", resData.data.token);
      setUserBackend(resData.data.user)
      closeModal();

    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // setError("");
      console.log(1);
      const provider = new GoogleAuthProvider();
      console.log(2);
      await signInWithRedirect(auth, provider);
      console.log(3);
      
      // const auths = getAuth();
      // console.log(4);

      // const test = await getRedirectResult(auths);

      // console.log(test);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/loginwithgoogle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({"token" : auth.currentUser.accessToken}),
      });

      const resData = await res.json();
      setCookie("user_token", resData.data.token);
      setUserBackend(resData.data.user)
      closeModal();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Login
      </h2>

      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full rounded"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full py-3 rounded gradient-button"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full rounded outline-button py-3"
        >
          <Image className="mr-1" src="/assets/img/google-logo.png" width={40} height={40} alt="google image"/>
          Sign In with Google
        </button>

      </form>

      {error && (
        <p className="text-red-500 mt-4">
          {error}
        </p>
      )}

      <p className="mt-6 text-center">
        Don't have an account?{" "}

        <button
          type="button"
          onClick={switchToSignup}
          className="text-blue-500"
        >
          Signup
        </button>

      </p>

    </div>
  );
}