export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-yellow-400">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="mt-2">The page you’re looking for doesn’t exist or has been moved.</p>
    </div>
  );
}
