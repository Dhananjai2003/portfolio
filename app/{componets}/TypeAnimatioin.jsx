"use client"
import React from 'react'
import { useEffect, useState } from 'react';

const sentences = [
    "Welcome",
    "ようこそ",
    "ಸ್ವಾಗತಾರ್ಹ",
    " 환영 ",
    "வரவேற்பு",
    "добро пожаловать",
    "välkommen"
  ];

const TypeAnimatioin = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [currentSentence, setCurrentSentence] = useState(' ');
  
    useEffect(() => {
      const typeNextCharacter = () => {
            
            if (currentCharacterIndex < sentences[currentSentenceIndex].length){
                setCurrentSentence(prev => prev + sentences[currentSentenceIndex].charAt(currentCharacterIndex));
                setCurrentCharacterIndex(prev => prev + 1);
            }

            else {
                setCurrentCharacterIndex(0);
                setCurrentSentence(' ');
                setCurrentSentenceIndex(prev => (prev+1) % sentences.length)
            }

        
        

      };
      const interval = setInterval(typeNextCharacter,250)
      return () => clearInterval(interval);
  
    }, [currentSentenceIndex, currentCharacterIndex]);
    
    return (
      <div className="">
        <p className=" text-teal-200 p-1 font-bold">{currentSentence}|</p>
      </div>
    );
  };
  

export default TypeAnimatioin
