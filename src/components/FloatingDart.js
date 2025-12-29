import React, { useState, useEffect } from 'react';
import '../styles/FloatingDart.css';

const FloatingDart = () => {
  const [dartBoard, setDartBoard] = useState({ x: 50, y: 50 });
  const [darts, setDarts] = useState([]);
  const [score, setScore] = useState(0);

  // 다트판이 천천히 떠다니기
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setDartBoard({
        x: Math.random() * 80 + 10, // 10~90%
        y: Math.random() * 60 + 10  // 10~70%
      });
    }, 3000);

    return () => clearInterval(moveInterval);
  }, []);

  // 화면 클릭 시 다트 던지기
  const throwDart = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    // 다트판과의 거리 계산
    const distance = Math.sqrt(
      Math.pow(x - dartBoard.x, 2) + Math.pow(y - dartBoard.y, 2)
    );

    let points = 0;
    if (distance < 3) points = 50; // 정중앙
    else if (distance < 6) points = 25;
    else if (distance < 10) points = 10;

    const newDart = { 
      id: Date.now(), 
      x, 
      y, 
      points,
      hit: distance < 10
    };

    setDarts(prev => [...prev, newDart]);
    if (points > 0) setScore(prev => prev + points);

    // 2초 후 다트 제거
    setTimeout(() => {
      setDarts(prev => prev.filter(d => d.id !== newDart.id));
    }, 2000);
  };

  return (
    <div className="dart-game" onClick={throwDart}>
      {/* 다트판 */}
      <div 
        className="dartboard"
        style={{
          left: `${dartBoard.x}%`,
          top: `${dartBoard.y}%`
        }}
      >
        <div className="dartboard-inner">
          <div className="bullseye"></div>
          <span className="dartboard-icon">🎯</span>
        </div>
      </div>

      {/* 던진 다트들 */}
      {darts.map(dart => (
        <div
          key={dart.id}
          className={`dart ${dart.hit ? 'dart-hit' : 'dart-miss'}`}
          style={{
            left: `${dart.x}%`,
            top: `${dart.y}%`
          }}
        >
          <span className="dart-icon">🎯</span>
          {dart.points > 0 && (
            <span className="dart-score">+{dart.points}</span>
          )}
        </div>
      ))}

      {/* 점수판 */}
      {score > 0 && (
        <div className="score-display">
          Score: {score}
        </div>
      )}
    </div>
  );
};

export default FloatingDart;