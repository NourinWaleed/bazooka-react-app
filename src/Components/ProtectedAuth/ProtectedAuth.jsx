export default function ProtectedAuth({ children }) {
  const isAuth = false; // بدل هذا بالتحقق الفعلي
  if (isAuth) {
    return <p className="text-center mt-10 text-green-500">Already logged in.</p>;
  }
  return children;
}
