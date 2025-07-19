export default function ProtectedRoute({ children }) {
  const isAuth = true; // بدل هذا بالتحقق الفعلي
  if (!isAuth) {
    return <p className="text-center mt-10 text-red-500">Unauthorized. Please login.</p>;
  }
  return children;
}
