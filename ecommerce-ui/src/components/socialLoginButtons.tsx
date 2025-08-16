export default function SocialLoginButtons() {
  return (
    <div className="w-full">
      <button
        type="button"
        className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-100 transition"
      >
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
        Sign up with Google
      </button>
    </div>
  );
}