"use client"
import React from 'react'
import { useEffect, useState } from 'react';

const sentences = [
    "This is the first sentence.",
    "Here comes the second sentence.",
    "And finally, the third sentence."
  ];

const TypeAnimatioin = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [currentSentence, setCurrentSentence] = useState(' ');
  
    useEffect(() => {
      const typeNextCharacter = () => {
        // if (currentCharacterIndex < sentences[currentSentenceIndex].length) {
        //   setCurrentSentence(prev => prev + sentences[currentSentenceIndex].charAt(currentCharacterIndex));
        //   setCurrentCharacterIndex(prev => prev + 1);
        //   setTimeout(typeNextCharacter, 500);       
        // } 
        
        
        // else {
        //   setTimeout(() => {
        //     setCurrentSentence('');
        //     setCurrentCharacterIndex(0);
        //     setCurrentSentenceIndex(prev => (prev + 1) % sentences.length);
        //   }, 10000); 
        // }

        
            
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
      const interval = setInterval(typeNextCharacter,100)
      return () => clearInterval(interval);
  
    }, [currentSentenceIndex, currentCharacterIndex]);
    
    return (
      <div className="">
        <p className=" text-teal-200 p-1 font-bold">{currentSentence}|</p>
      </div>
    );
  };
  

export default TypeAnimatioin
