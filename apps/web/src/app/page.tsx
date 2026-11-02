import { Button } from "@/common/components/ui/button";

export default function Home() {
  return (
    <div className="">
      Hello World
      <p className="font-logo text-accent">NotebookLM Edge</p>
      <Button className={"text-accent bg-transparent border border-border"}>
        {" "}
        Click me
      </Button>
    </div>
  );
}
