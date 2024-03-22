import { Delete } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PasswordGenerator } from '../utils/passwordGenerator';

export function UserButtons() {

    const [chars, setChars] = useState<string[]>([]);
    const [matcher, setMatcher] = useState<string[]>([]);
    const [count, setCount] = useState(0)
    const [generatedPassword, setGeneratedPassword] = useState<string[]>([]);
    const charLimit = 4;


    const addChar = (hearts: string) => {
        if (charLimit > chars.length) {
            setChars(prevChar => [...prevChar, hearts])
        }
    }

    const completingMatcher = (undercover:string) => {
        if (charLimit > chars.length) {
            setMatcher(prevChar => [...prevChar, undercover])
        }
    }

    useMemo(() => {
        setGeneratedPassword(PasswordGenerator());
    }, []);

    const isPasswordMatch = JSON.stringify(generatedPassword) === JSON.stringify(matcher);

    console.log(matcher)
    console.log(generatedPassword)

    return (
        <div className="guessingButton">
            <button className='userButton' onClick={() => { 
                addChar('💜');
                completingMatcher('A');
        }}>  💜
        </button>
        <button className='userButton' onClick={() => { 
                addChar('❤️');
                completingMatcher('B');
        }}> ❤️
        </button>
        <button className='userButton' onClick={() => { 
                addChar('🤎');
                completingMatcher('C');
        }}> 🤎
        </button>
        <button className='userButton' onClick={() => { 
                addChar('💛');
                completingMatcher('D');
        }}> 💛
        </button>
        <button className='userButton' onClick={() => { 
                addChar('💚');
                completingMatcher('E');
        }}> 💚
        </button>
        <button className='userButton' onClick={() => { 
                addChar('💙');
                completingMatcher('F');
        }}> 💙
        </button>
        <button className='userButton' onClick={() => { 
                addChar('🤍');
                completingMatcher('G');
        }}> 🤍
        </button>
        <button className='userButton' onClick={() => { 
                addChar('🖤');
                completingMatcher('H');
        }}> 🖤
        </button>
        <button className='userButton' onClick={() => setChars(chars.slice(0,-1))}><Delete /></button>
            <div>
                <p>
                    {chars.join('')}
                </p>
            </div>
            <button className='sendButton' onClick={() => {
                setCount(count + 1);
                const isMatch = JSON.stringify(matcher) === JSON.stringify(generatedPassword);
                if (isMatch) {
                    alert("you won!!!");
                } else {
                    if (count >= 9) {
                        alert("You're out of chances!");
                    } 
                } 
                setChars([]);
                setMatcher([])
            }}>
                Enviar
            </button>
            <button className='generateButton' onClick={() => setGeneratedPassword(PasswordGenerator())}>
                Play new game!
            </button>
            <div className='counter'>
                {count}
            </div>
        </div>
    )

}   