import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: auto;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
  cursor: none;
  
  &:hover {
    .tech-element {
      transition: all 0.3s ease;
    }
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MouseTrail = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.6) 0%, rgba(56, 189, 248, 0.1) 70%, transparent 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  transition: all 0.1s ease;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
`;

const TechElement = styled.div`
  position: absolute;
  color: ${props => props.color || '#38bdf8'};
  font-family: 'Courier New', monospace;
  font-size: ${props => props.size || '14px'};
  opacity: ${props => props.opacity || 0.6};
  transition: all 0.3s ease;
  pointer-events: none;
  text-shadow: 0 0 10px currentColor;
  z-index: 1;
  
  &.chart {
    &::before {
      content: '📊';
      font-size: 1.2em;
    }
  }
  
  &.graph {
    &::before {
      content: '📈';
      font-size: 1.2em;
    }
  }
  
  &.data {
    &::before {
      content: '💾';
      font-size: 1.2em;
    }
  }
  
  &.finance {
    &::before {
      content: '💰';
      font-size: 1.2em;
    }
  }
  
  &.tech {
    &::before {
      content: '⚡';
      font-size: 1.2em;
    }
  }
  
  &.analytics {
    &::before {
      content: '📊';
      font-size: 1.2em;
    }
  }
  
  &.business {
    &::before {
      content: '🏢';
      font-size: 1.2em;
    }
  }
  
  &.hacker {
    &::before {
      content: '🔒';
      font-size: 1.2em;
    }
  }
  
  &:hover {
    transform: scale(1.5);
    opacity: 0.8;
    color: #00ffff;
    text-shadow: 0 0 20px #00ffff;
  }
`;

const DataPoint = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${props => props.color || '#38bdf8'};
  border-radius: 50%;
  opacity: ${props => props.opacity || 0.8};
  box-shadow: 0 0 12px currentColor;
  transition: all 0.3s ease;
  z-index: 1;
  
  &:hover {
    transform: scale(2);
    opacity: 1;
    box-shadow: 0 0 15px currentColor;
  }
`;

const ChartLine = styled.div`
  position: absolute;
  height: 3px;
  background: linear-gradient(90deg, transparent, ${props => props.color || '#38bdf8'}, transparent);
  opacity: ${props => props.opacity || 0.6};
  transform-origin: left center;
  transition: all 0.3s ease;
  z-index: 1;
  
  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 10px ${props => props.color || '#00d4ff'};
  }
`;

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elements, setElements] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);
  const [chartLines, setChartLines] = useState([]);

  // Tech/Finance themed elements
  const techElements = [
    { type: 'chart', text: 'Analytics', color: '#38bdf8' },
    { type: 'graph', text: 'Growth', color: '#10b981' },
    { type: 'data', text: 'Big Data', color: '#f87171' },
    { type: 'finance', text: 'Revenue', color: '#fbbf24' },
    { type: 'tech', text: 'Innovation', color: '#8b5cf6' },
    { type: 'analytics', text: 'Metrics', color: '#ec4899' },
    { type: 'business', text: 'Strategy', color: '#059669' },
    { type: 'hacker', text: 'Security', color: '#f97316' },
    { type: 'chart', text: 'KPIs', color: '#0ea5e9' },
    { type: 'graph', text: 'Performance', color: '#a855f7' },
    { type: 'data', text: 'Insights', color: '#ec4899' },
    { type: 'finance', text: 'ROI', color: '#f59e0b' },
    { type: 'tech', text: 'AI/ML', color: '#06b6d4' },
    { type: 'analytics', text: 'Dashboard', color: '#8b5cf6' },
    { type: 'business', text: 'Scale', color: '#059669' },
    { type: 'hacker', text: 'Blockchain', color: '#f97316' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize elements
    const initElements = () => {
      const newElements = techElements.map((element, index) => ({
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        ...element,
        size: Math.random() * 8 + 16,
        opacity: Math.random() * 0.3 + 0.4
      }));
      setElements(newElements);
    };

    // Initialize data points for charts
    const initDataPoints = () => {
      const points = [];
      for (let i = 0; i < 80; i++) {
        points.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          color: ['#38bdf8', '#10b981', '#f87171', '#fbbf24', '#8b5cf6'][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.4 + 0.4
        });
      }
      setDataPoints(points);
    };

    // Initialize chart lines
    const initChartLines = () => {
      const lines = [];
      for (let i = 0; i < 25; i++) {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const length = Math.random() * 200 + 100;
        const angle = Math.random() * Math.PI * 2;
        
        lines.push({
          id: i,
          x: startX,
          y: startY,
          length,
          angle,
          color: ['#38bdf8', '#10b981', '#f87171', '#fbbf24', '#8b5cf6'][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.3 + 0.3
        });
      }
      setChartLines(lines);
    };

    initElements();
    initDataPoints();
    initChartLines();

    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines between nearby elements
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.lineWidth = 1;
      
      elements.forEach((element1, i) => {
        elements.slice(i + 1).forEach(element2 => {
          const dx = element1.x - element2.x;
          const dy = element1.y - element2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(element1.x, element1.y);
            ctx.lineTo(element2.x, element2.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw elements
      setElements(prevElements => 
        prevElements.map(element => {
          let newX = element.x + element.vx;
          let newY = element.y + element.vy;
          
          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth) element.vx *= -1;
          if (newY <= 0 || newY >= window.innerHeight) element.vy *= -1;
          
          // Mouse interaction
          const dx = mousePosition.x - element.x;
          const dy = mousePosition.y - element.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            element.vx += (dx / distance) * force * 0.01;
            element.vy += (dy / distance) * force * 0.01;
          }
          
          return {
            ...element,
            x: Math.max(0, Math.min(window.innerWidth, newX)),
            y: Math.max(0, Math.min(window.innerHeight, newY))
          };
        })
      );

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <BackgroundContainer>
      <Canvas ref={canvasRef} />
      
      {/* Mouse trail */}
      <MouseTrail 
        style={{ 
          left: mousePosition.x - 10, 
          top: mousePosition.y - 10,
          transform: `scale(${1 + Math.sin(Date.now() * 0.01) * 0.2})`
        }} 
      />
      
      {/* Tech elements */}
      {elements.map(element => (
        <TechElement
          key={element.id}
          className={element.type}
          style={{
            left: element.x,
            top: element.y,
            color: element.color,
            fontSize: element.size + 'px',
            opacity: element.opacity,
            transform: `rotate(${Math.sin(Date.now() * 0.001 + element.id) * 5}deg)`
          }}
        >
          {element.text}
        </TechElement>
      ))}
      
      {/* Data points */}
      {dataPoints.map(point => (
        <DataPoint
          key={point.id}
          style={{
            left: point.x,
            top: point.y,
            backgroundColor: point.color,
            opacity: point.opacity,
            animation: `pulse ${2 + Math.random() * 2}s infinite`
          }}
        />
      ))}
      
      {/* Chart lines */}
      {chartLines.map(line => (
        <ChartLine
          key={line.id}
          style={{
            left: line.x,
            top: line.y,
            width: line.length + 'px',
            backgroundColor: line.color,
            opacity: line.opacity,
            transform: `rotate(${line.angle}rad)`,
            animation: `glow ${3 + Math.random() * 2}s infinite`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.2; box-shadow: 0 0 5px currentColor; }
          50% { opacity: 0.6; box-shadow: 0 0 15px currentColor; }
        }
      `}</style>
    </BackgroundContainer>
  );
};

export default AnimatedBackground; 