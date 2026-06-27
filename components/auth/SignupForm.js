import { useState } from "react";
import { setCookie, getCookie } from "cookies-next";

export default function SignupForm({ switchToLogin, closeModal, setUserBackend}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({name, email, password }),
      });

      const resData = await res.json();
      setCookie("user_token", resData.data.token);
      setUserBackend(resData.data.user)
      closeModal();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Signup
      </h2>

      <form
        onSubmit={handleSignup}
        className="space-y-4"
      >
        <input
          type="name"
          placeholder="Full Name"
          className="border p-3 w-full rounded"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          Signup
        </button>
      </form>

      {error && (
        <div className="text-red-500 mt-4">
          {error}
        </div>
      )}

      <p className="mt-6 text-center">
        Already have an account?{" "}

        <button
          onClick={switchToLogin}
          className="text-blue-500"
        >
          Login
        </button>
      </p>
    </div>
  );
}