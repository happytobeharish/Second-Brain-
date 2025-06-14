import { Shareicon } from "../icons/Shareicon";

interface Cardprops {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: Cardprops) {
  return (
    <div>
      <div className="bg-white rounded-md shadow md border-gray-500 max-w-80 border">
        <div className="flex justify-between">
          <div className="flex items-center text-md font-bold">
            <div className="text-black-800 pr-2">
              <Shareicon />
            </div>
            {title}
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <Shareicon />
              </a>
            </div>
            <div className="text-gray-500">
              <Shareicon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
