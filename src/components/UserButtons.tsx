import { Delete } from 'lucide-react';
import { useState } from 'react';
import { PasswordGenerator } from '../utils/passwordGenerator';

export function UserButtons(){

    PasswordGenerator

    const [chars, setChars] =  useState<string[]>([]);

    const charLimit = 4;

    const addChar = (hearts:string) => {
        if (charLimit > chars.length){
            setChars(prevChar => [...prevChar, hearts])
        }   
    }


    return(
        <div className="buttons">
        <button className='userButtons' onClick={() => addChar('❤️')}> ❤️ </button>
        <button className='userButtons' onClick={() => addChar('💛')}> 💛 </button>
        <button className='userButtons' onClick={() => addChar('💚')}> 💚 </button>
        <button className='userButtons' onClick={() => addChar('💙')}> 💙  </button>
        <button className='userButtons' onClick={() => addChar('💜')}> 💜 </button>
        <button className='userButtons' onClick={() => addChar('🖤')}> 🖤 </button>
        <button className='userButtons' onClick={() => addChar('🤎')}> 🤎 </button>
        <button className='userButtons' onClick={() => addChar('🤍')}> 🤍 </button>
        <button className='userButtons' onClick={() => setChars(chars.slice(0,-2))}><Delete /></button>
        <div>
            <p>
            {chars.join('')}
            </p>
        </div>
       </div>
        )

}   