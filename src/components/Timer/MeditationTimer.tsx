import { useCallback, useEffect, useState } from "react";
import { useTimer } from "../../hooks/useTimer";
import { playNotificationSound } from "../../utils/audio";
import TimerAlert from "./TimerAlert";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

interface MeditationTimerProps {
  durationMinutes?: number;
}

export default function MeditationTimer({ durationMinutes = 30 }: MeditationTimerProps) {
  const [showAlert, setShowAlert] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const handleComplete = useCallback(() => {
    playNotificationSound();
    setShowAlert(true);
  }, []);

  const { remainingTime, isRunning, start, stop, reset } = useTimer({
    durationMinutes,
    onComplete: handleComplete,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setShowControls(true);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initial timeout
    timeoutId = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <footer
        className="timer-footer"
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TimerDisplay remainingTime={remainingTime} />
        <div
          style={{
            transition: "opacity 0.3s ease",
            opacity: showControls ? 1 : 0,
            pointerEvents: showControls ? "auto" : "none",
          }}
        >
          <TimerControls isRunning={isRunning} onStart={start} onStop={stop} onReset={reset} />
        </div>
      </footer>

      <TimerAlert isVisible={showAlert} onClose={() => setShowAlert(false)} />
    </>
  );
}
