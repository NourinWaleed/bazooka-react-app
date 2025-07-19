import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>📞 +20 123 456 7890</p>
          <p>📞 +20 109 876 5432</p>
          <p>✉️ <a href="mailto:info@bazookarestaurant.com" className="text-blue-400">info@bazookarestaurant.com</a></p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 py-2 border-t border-gray-700 text-sm">
        &copy; 2025 Bazooka Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

