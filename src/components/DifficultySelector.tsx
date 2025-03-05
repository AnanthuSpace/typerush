import { Button } from "@/components/ui/button";

export default function DifficultySelector({ difficulty, setDifficulty }) { // <-- Change `changeDifficulty` to `setDifficulty`
    return (
      <div className="space-y-3 text-center">
        <h3 className="text-sm font-medium">Select Difficulty</h3>
        <div className="flex gap-2 justify-center">
          <Button size="sm" variant={difficulty === "easy" ? "outline" : "default"} onClick={() => setDifficulty("easy")}>
            Easy
          </Button>
          <Button size="sm" variant={difficulty === "medium" ?  "outline" : "default"} onClick={() => setDifficulty("medium")}>
            Medium
          </Button>
          <Button size="sm" variant={difficulty === "hard" ?  "outline" : "default"} onClick={() => setDifficulty("hard")}>
            Hard
          </Button>
        </div>
      </div>
    );
  }
  
