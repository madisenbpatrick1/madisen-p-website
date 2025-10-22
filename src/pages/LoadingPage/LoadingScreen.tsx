import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

let timer: NodeJS.Timeout;

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const fullText = "MBP";
  const [text, setText] = useState("");
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let i = -1;

    timer = setInterval(() => {
      i++;
      if (i === fullText.length) {
        clearInterval(timer);
        // fade out after small delay
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(onFinish, 1000); // fade duration matches CSS
        }, 700);
      } else {
        setText((prev) => prev + fullText[i]);
      }
    }, 500); // typing speed (500ms per letter)

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${fadingOut ? "fade-out" : ""}`}>
      <h1 className="loading-text">
        {text}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}
