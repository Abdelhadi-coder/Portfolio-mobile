export default function Toast({ visible, message }) {
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 
        max-w-[90vw] w-fit 
        rounded-2xl 
        bg-gray-900/90
        text-white text-sm sm:text-base md:text-lg font-medium 
        shadow-2xl backdrop-blur-md z-50 
        transition-opacity transition-transform duration-500 
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
      `}
    >
        {message}
    </div>
  );
}

// ✅ Email copié !