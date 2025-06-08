import { Button } from "../components/Button";
import { Shareicon } from "../icons/Shareicon";
import { Plusicon } from "../icons/Plusicon";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModel";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";

export function Dashboard () {
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <div>
      <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-slate-200 border-2">
      <div className="flex justify-end gap-4">
        <Button
          onClick={() => {
            setmodalOpen(true);
          }}
          varient="primary"
          text="Add Content"
          startIcon={<Plusicon />}
        ></Button>
        <Button
          varient="secondary"
          text="Share Brain"
          startIcon={<Shareicon />}
        ></Button>
      </div>
      <div className="flex gap-4 pt-6">
        <Card
          type="twitter"
          link="https://x.com/Harishahah/status/1832802090118238430"
          title="First Tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=Cs2g2VFWtbo"
          title="Hahahaha"
        />
      </div>
      <CreateContentModel
        open={modalOpen}
        onClose={() => {
          setmodalOpen(false);
        }}
      />
      </div>
    </div>
  );
}

