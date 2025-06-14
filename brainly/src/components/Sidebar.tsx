import { Logo } from "../icons/Logo";
import { Twittericon } from "../icons/Twittericon";
import { Youtubeicon } from "../icons/Youtubeicon";
import { Sidebaritem } from "./Sidebaritem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-3xl pt-8 items-center">
        <div className="pr-2 text-purple-600">
        <Logo/>
        </div>
        Brainly
        </div>
      <div className="pt-4">
        <Sidebaritem text="Twitter" icon={<Twittericon />} />
        <Sidebaritem text="Youtube" icon={<Youtubeicon />} />
      </div>
    </div>
  );
}
