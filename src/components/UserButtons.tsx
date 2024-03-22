import { Delete } from 'lucide-react';
import { useState } from 'react';
import { PasswordGenerator } from '../utils/passwordGenerator';

export function UserButtons(){

    const [chars, setChars] =  useState<string[]>([]);

    const charLimit = 4;

    const addChar = (hearts:string) => {
        if (charLimit > chars.length){
            setChars(prevChar => [...prevChar, hearts])
        }   
    }

    const  [count, setCount] = useState(0)

    if (count >= 10){
        alert("You're out chances!")
    }

    return(
        <div className="guessingButton">
        <button className='userButton' onClick={() => addChar('❤️')}> ❤️ </button>
        <button className='userButton' onClick={() => addChar('💛')}> 💛 </button>
        <button className='userButton' onClick={() => addChar('💚')}> 💚 </button>
        <button className='userButton' onClick={() => addChar('💙')}> 💙  </button>
        <button className='userButton' onClick={() => addChar('💜')}> 💜 </button>
        <button className='userButton' onClick={() => addChar('🖤')}> 🖤 </button>
        <button className='userButton' onClick={() => addChar('🤎')}> 🤎 </button>
        <button className='userButton' onClick={() => addChar('🤍')}> 🤍 </button>
        <button className='userButton' onClick={() => setChars(chars.slice(0,-1))}><Delete /></button>
        <div>
            <p>
            {chars.join('')}
            </p>
        </div>
        <button className='sendButton' onClick={() => setCount(count + 1)}>
          Enviar
        </button>
        {count}
       </div>
        )

}   