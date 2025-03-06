import { Input } from "./ui/input";
import { ChangeEvent } from "react";

interface TypingInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  word: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>; // ✅ Fixed ref type
}

export default function TypingInput({
  input,
  setInput,
  word,
  handleInputChange,
  inputRef,
}: TypingInputProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="text-2xl font-mono font-bold tracking-wide">{word}</div>
      <Input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInputChange}
        className="text-center text-lg font-mono"
        placeholder="Type here..."
        autoComplete="off"
        autoFocus
      />
    </div>
  );
}
