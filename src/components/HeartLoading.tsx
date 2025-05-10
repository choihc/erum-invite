"use client";

const HeartLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-64 h-64 flex items-center justify-center">
        <svg
          className="w-32 h-32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            animation: "heartPulse 0.8s ease-in-out infinite",
          }}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            className="fill-purple-300"
          />
        </svg>
        <style jsx>{`
          @keyframes heartPulse {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeartLoading;
