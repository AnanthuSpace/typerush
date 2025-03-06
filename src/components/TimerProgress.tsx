import { Progress } from "./ui/progress";

interface TimerProgressProps {
  timer: number;
}

export default function TimerProgress({ timer }: TimerProgressProps) {
  return <Progress value={(timer / 30) * 100} className="h-2" />;
}
