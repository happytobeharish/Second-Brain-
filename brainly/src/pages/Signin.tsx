import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-xl border min-w-40 p-8 justify-center items-center">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
<div className="flex justify-center pt-4">
        <Button  varient="primary" text="Sign In"/>
        </div>
      </div>
    </div>
  );
}
