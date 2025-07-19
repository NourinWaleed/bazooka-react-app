import BestSeller from "../BestSeller/BestSeller";

export default function Home() {
  return (
    <div className="bg-black text-yellow-400 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url('./images/BG-3.jpg')` }}>
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Bazooka</h1>
          <p className="text-lg md:text-2xl mt-4">Our restaurant, Bazooka, is a popular fast-food chain in Egypt known for its delicious fried chicken, sandwiches, burgers, and unique sauces. We offer generous portions, affordable prices, and bold flavors, making us a favorite choice for young people and families looking for a tasty and satisfying dining experience.</p>
          <a href="/menu">
            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500">View Menu</button>
          </a>
        </div>
      </section>

      {/* Best Seller */}
      <BestSeller/>

      {/* Call to Action */}
      <section className="py-12 bg-yellow-400 text-black text-center">
        <h2 className="text-3xl font-bold">Order Now & Enjoy!</h2>
        <p className="mt-2">Fast Delivery • Fresh Ingredients • Amazing Taste</p>
        <a href="/menu">
          <button className="mt-4 bg-black text-yellow-400 px-6 py-2 rounded hover:bg-gray-800">See Full Menu</button>
        </a>
      </section>
    </div>
  );
}
