import { Input } from "./ui/input";

export default function TypingInput({ input, setInput, word, handleInputChange, inputRef }) {
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
