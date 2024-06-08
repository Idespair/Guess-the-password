// UserButtons.tsx
import React, { useMemo, useState } from 'react';
import { Delete } from 'lucide-react';
import { PasswordGenerator } from '../utils/passwordGenerator';
import ModalFim from './modal';

export function UserButtons() {
  const [chars, setChars] = useState<string[]>([]);
  const [matcher, setMatcher] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [generatedPassword, setGeneratedPassword] = useState<string[]>([]);
  const [loserCounter, setLoserCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const charLimit = 4;

  const addChar = (hearts: string, undercover: string) => {
    if (charLimit > chars.length) {
      setChars(prevChar => [...prevChar, hearts]);
      setMatcher(prevMatcher => [...prevMatcher, undercover]);
    }
  };

  const removeLastChar = () => {
    setChars(prevChars => prevChars.slice(0, -1));
    setMatcher(prevMatcher => prevMatcher.slice(0, -1));
  };

  useMemo(() => {
    setGeneratedPassword(PasswordGenerator());
  }, []);

  const isPasswordMatch = JSON.stringify(generatedPassword) === JSON.stringify(matcher);

  console.log('Matcher:', matcher);
  console.log('Generated Password:', generatedPassword);
  console.log('Loser Counter:', loserCounter);
  console.log('Count:', count);

  const handlePlayNewGame = () => {
    setGeneratedPassword(PasswordGenerator());
    setCount(0);
    setLoserCounter(0);
    setChars([]);
    setMatcher([]);
    setIsModalOpen(false);
  };

  return (
    <div className="guessingButton">
      {[
        { heart: '💜', undercover: 'A' },
        { heart: '❤️', undercover: 'B' },
        { heart: '🤎', undercover: 'C' },
        { heart: '💛', undercover: 'D' },
        { heart: '💚', undercover: 'E' },
        { heart: '💙', undercover: 'F' },
        { heart: '🤍', undercover: 'G' },
        { heart: '🖤', undercover: 'H' },
      ].map(({ heart, undercover }) => (
        <button key={undercover} className='userButton' onClick={() => addChar(heart, undercover)}>
          {heart}
        </button>
      ))}
      <button className='userButton' onClick={removeLastChar}><Delete /></button>
      <div>
        <p>{chars.join('')}</p>
      </div>
      <button className='sendButton' onClick={() => {
        setCount(count + 1);
        if (isPasswordMatch) {
          setIsModalOpen(true);
        } else {
          setLoserCounter(loserCounter + 1);
        } 
        if (count >= 9) {
          alert("You're out of chances!");
        } 
        setChars([]);
        setMatcher([]);
      }}>
        Enviar
      </button>
      <button className='generateButton' onClick={handlePlayNewGame}>
        Play new game!
      </button>
      <div className='counter'>
        {count}
      </div>

      <ModalFim 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onPlayNewGame={handlePlayNewGame}
      />
    </div>
  );
}
