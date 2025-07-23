export default function PrivateToast({ visible }) {
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-12 py-8 rounded-2xl bg-gray-900/80 text-white text-base font-medium shadow-2xl backdrop-blur-md z-50 transition-opacity duration-500 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      🚫 Projet privé
    </div>
  );
}