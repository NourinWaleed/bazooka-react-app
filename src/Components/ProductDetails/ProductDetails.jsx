import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { pId, cId } = useParams();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p>Product ID: <span className="font-mono">{pId}</span></p>
      <p>Category ID: <span className="font-mono">{cId}</span></p>
      <p className="mt-4">Here you can display detailed information about the product.</p>
    </div>
  );
}









