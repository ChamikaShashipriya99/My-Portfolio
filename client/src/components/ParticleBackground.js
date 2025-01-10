import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';

function ParticleField({ count = 2500, color = "#0dcaf0", size = 0.015, speed = 1, layer = 0 }) {
  const ref = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Generate random positions for particles using maath
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    inSphere(positions, { radius: 10 });
    return positions;
  }, [count]);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    if (ref.current) {
      // Different rotation speeds for each layer
      ref.current.rotation.x += delta * 0.1 * speed;
      ref.current.rotation.y += delta * 0.15 * speed;
      
      // Mouse interaction - particles move slightly towards mouse
      const mouseInfluence = 0.3 / (layer + 1); // Less influence for deeper layers
      ref.current.position.x = mousePosition.x * mouseInfluence;
      ref.current.position.y = mousePosition.y * mouseInfluence;
    }
  });

  return (
    <Points
      ref={ref}
      positions={particles}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7 / (layer + 1)} // Less opacity for deeper layers
        blending="additive"
      />
    </Points>
  );
}

const ParticleBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Main particle layer */}
        <ParticleField 
          count={2000} 
          color="#0dcaf0" 
          size={0.015} 
          speed={1} 
          layer={0} 
        />
        
        {/* Secondary particle layer for depth */}
        <ParticleField 
          count={1500} 
          color="#0d6efd" 
          size={0.012} 
          speed={0.7} 
          layer={1} 
        />
        
        {/* Background particle layer */}
        <ParticleField 
          count={1000} 
          color="#ffffff" 
          size={0.008} 
          speed={0.5} 
          layer={2} 
        />
      </Canvas>
    </div>
  );
};

export default ParticleBackground; 