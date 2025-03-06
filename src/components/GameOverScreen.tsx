import { motion } from "framer-motion";

interface GameOverScreenProps {
  score: number;
  highScore: number;
}
export default function GameOverScreen({ score, highScore }: GameOverScreenProps) {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      className="space-y-2 text-center"
    >
      <h3 className="text-xl font-semibold">Game Over!</h3>
      <div className="flex justify-center gap-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Score</p>
          <p className="text-2xl font-bold">{score}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Best</p>
          <p className="text-2xl font-bold">{highScore}</p>
        </div>
      </div>
    </motion.div>
  );
}
