import { Progress } from "@/components/ui/progress";

export default function TimerProgress({ timer }) {
  return <Progress value={(timer / 30) * 100} className="h-2" />;
}
