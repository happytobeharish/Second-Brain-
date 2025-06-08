import { ReactElement } from "react";
export function Sidebaritem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex py-2 cursor-pointer hover:bg-slate-200">
      <div className="p-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
}
