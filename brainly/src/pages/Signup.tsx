import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Signup() {
  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      password,
    });
    alert("You Have Signed Up!");
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-xl border min-w-40 p-8 ">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button onClick={signup} varient="primary" text="Sign Up" />
        </div>
      </div>
    </div>
  );
}
