import { Badge } from "./ui/badge";
import { Timer, Trophy, Award } from "lucide-react";

export default function GameStats({ timer, score, streak }) {
  return (
    <div className="flex justify-between items-center">
      <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
        <Timer className="h-4 w-4" />
        <span className={`font-mono ${timer <= 10 ? "text-red-500 animate-pulse" : ""}`}>
          {timer}s
        </span>
      </Badge>

      <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
        <Trophy className="h-4 w-4 text-yellow-500" />
        <span className="font-mono">{score}</span>
      </Badge>

      <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
        <Award className="h-4 w-4 text-purple-500" />
        <span className="font-mono">{streak}</span>
      </Badge>
    </div>
  );
}
