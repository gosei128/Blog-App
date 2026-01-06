import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    if (confirmPassword !== password) {
      console.log("Password incorrect");
      return;
    }

    try {
      const res = await fetch(
        "https://blog-app-inlb.onrender.com/api/user/signup",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-2 pt-15 w-full flex justify-center">
      <form
        className="flex flex-col w-full max-w-lg p-3 gap-2 border mt-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1>Sign up</h1>
        <label for="email">Email:</label>
        <input
          className="border rounded-md p-1"
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <div class="email error"></div>
        <label for="password">Password:</label>
        <input
          className="border rounded-md p-1"
          placeholder="Enter password"
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm password</label>
        <input
          className="border rounded-md p-1"
          placeholder="Confirm password"
          type="password"
          id="confirm-pass"
          name="confirm-pass"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div class="password error"></div>
        <button type="submit" className="border p-2 rounded-lg">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
