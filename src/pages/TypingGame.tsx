import { useEffect, useState, useRef } from "react";
import { Play, Zap } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";

import { fetchWord } from "../util/fetchWord";
import GameStats from "../components/GameStats";
import TypingInput from "../components/TypingInput";
import DifficultySelector from "../components/DifficultySelector";
import GameOverScreen from "../components/GameOverScreen";
import TimerProgress from "../components/TimerProgress";

export default function TypingGame() {
  const [word, setWord] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [highScore, setHighScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "medium"
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setGameStarted(false);
      if (score > highScore) setHighScore(score);
    }
  }, [gameStarted, timer, score, highScore]);

  const startGame = async () => {
    setScore(0);
    setTimer(30);
    setGameStarted(true);
    setStreak(0);
    setInput("");
    setWord(await fetchWord(difficulty));
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.toLowerCase() === word.toLowerCase()) {
      setScore(
        (prev) =>
          prev + (difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3)
      );
      setStreak((prev) => prev + 1);
      setInput("");
      setWord(await fetchWord(difficulty));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" /> Type Rush
          </CardTitle>
        </CardHeader>

        <CardContent>
          {!gameStarted && (
            <DifficultySelector
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          )}

          {!gameStarted ? (
            <GameOverScreen score={score} highScore={highScore} />
          ) : (
            <>
              <GameStats score={score} highScore={streak} />
              <TimerProgress timer={timer} />
              <TypingInput
                input={input}
                setInput={setInput}
                word={word}
                handleInputChange={handleInputChange}
                inputRef={inputRef}
              />
            </>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          {!gameStarted && (
            <Button
              onClick={startGame}
              className="flex items-center gap-2"
              variant={"outline"}
            >
              <Play className="w-5 h-5" />
              {score > 0 ? "Play Again" : "Start Game"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
