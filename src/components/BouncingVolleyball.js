// components/BouncingVolleyball.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/BouncingVolleyball.css';

const BouncingVolleyball = () => {
  const [ball, setBall] = useState({
    x: 20, // 왼쪽에서 20% (글자 안 가리게)
    y: 30, // 위에서 30%
    velocityX: 0,
    velocityY: 0,
    isMoving: false
  });

  const animationRef = useRef(null);

  // 물리 엔진 (중력, 튕김) - 더 부드럽게
  useEffect(() => {
    if (!ball.isMoving) return;

    const animate = () => {
      setBall(prev => {
        let newX = prev.x + prev.velocityX;
        let newY = prev.y + prev.velocityY;
        let newVelocityX = prev.velocityX * 0.95; // 공기 저항 증가
        let newVelocityY = prev.velocityY + 0.3; // 중력 감소 (더 천천히)

        // 좌우 벽 충돌
        if (newX <= 2 || newX >= 98) {
          newVelocityX = -newVelocityX * 0.5; // 반발력 감소
          newX = newX <= 2 ? 2 : 98;
        }

        // 바닥 충돌
        if (newY >= 95) {
          newVelocityY = -newVelocityY * 0.5; // 반발력 감소
          newY = 95;
          
          // 거의 멈췄으면 정지
          if (Math.abs(newVelocityY) < 0.3) {
            return { ...prev, y: 95, velocityY: 0, isMoving: false };
          }
        }

        // 천장 충돌
        if (newY <= 2) {
          newVelocityY = -newVelocityY * 0.5;
          newY = 2;
        }

        // 거의 멈췄으면 정지
        if (Math.abs(newVelocityX) < 0.05 && Math.abs(newVelocityY) < 0.05 && newY >= 94) {
          return { ...prev, x: newX, y: 95, velocityX: 0, velocityY: 0, isMoving: false };
        }

        return {
          x: newX,
          y: newY,
          velocityX: newVelocityX,
          velocityY: newVelocityY,
          isMoving: true
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ball.isMoving]);

  // 공 클릭 시 타격 - 힘 줄이기
  const handleBallClick = (e) => {
    e.stopPropagation();
    
    const ballElement = e.currentTarget;
    const rect = ballElement.getBoundingClientRect();
    const ballCenterX = rect.left + rect.width / 2;
    const ballCenterY = rect.top + rect.height / 2;
    
    // 클릭 위치와 공 중심의 차이로 방향 결정
    const deltaX = e.clientX - ballCenterX;
    const deltaY = e.clientY - ballCenterY;
    
    // 거리 기반으로 힘 조절 (더 약하게)
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const force = Math.min(distance / 15, 8); // 최대 힘 감소
    
    // 정규화된 방향 벡터
    const directionX = deltaX / distance;
    const directionY = deltaY / distance;
    
    setBall(prev => ({
      ...prev,
      velocityX: directionX * force,
      velocityY: directionY * force,
      isMoving: true
    }));
  };

  return (
    <div className="volleyball-container">
      <div
        className={`volleyball ${ball.isMoving ? 'moving' : ''}`}
        style={{
          left: `${ball.x}%`,
          top: `${ball.y}%`
        }}
        onClick={handleBallClick}
      >
        🏖️
      </div>
    </div>
  );
};

export default BouncingVolleyball;