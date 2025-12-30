import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);

      if (data.email || data.password) {
        setEmail(data.email);
        setPassword(data.password);
      }
      if (data.user) {
        location.assign("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-2">
      <form
        className="flex flex-col p-3 gap-2 border mt-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
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
        <button type="submit" className="border p-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
