import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";

type Props = {
  onComplete?: () => void;
};

export const useExplosionFrame = ({ onComplete }: Props) => {
  const [flashScale, setFlashScale] = useState(0);
  const [flashOpacity, setFlashOpacity] = useState(0);
  const [explosionScale, setExplosionScale] = useState(1);
  const [explosionOpacity, setExplosionOpacity] = useState(0.8);
  const [completed, setCompleted] = useState(false);

  // Prevent stale closure issues
  const completedRef = useRef(false);

  useFrame(() => {
    if (completedRef.current) return;

    // Bright flash
    if (flashScale < 5) {
      setFlashScale((s) => s + 0.4);
      setFlashOpacity((o) => Math.min(1, o + 0.2));
    } else {
      setFlashOpacity((o) => Math.max(0, o - 0.08));
    }

    // Explosion expansion
    setExplosionScale((s) => s + 0.15);
    setExplosionOpacity((o) => Math.max(0, o - 0.02));

    // Completion check
    if (explosionOpacity <= 0.05 && flashOpacity <= 0.05) {
      completedRef.current = true;
      setCompleted(true);
      onComplete?.();
    }
  });

  return {
    flashScale,
    flashOpacity,
    explosionScale,
    explosionOpacity,
    completed,
  };
};
