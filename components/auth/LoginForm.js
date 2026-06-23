"use client";
import { useState } from "react";

export default function LoginForm({ switchToSignup, closeModal }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      closeModal();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    // try {
    //   setError("");
    //   const provider = new GoogleAuthProvider();
    //   await signInWithRedirect(auth, provider);
    // } catch (err) {
    //   console.log(err);
    //   setError(err.message);
    // }
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