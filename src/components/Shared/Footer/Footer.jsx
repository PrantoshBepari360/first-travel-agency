
const Footer = () => {
  return (
    <>
      <footer className="bg-blue-900 text-white  py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              Embark on unforgettable adventures with our travel agency. We offer curated travel experiences to the most captivating destinations worldwide, ensuring you create lasting memories.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="text-white"><i className="fas fa-envelope mr-2"></i> Email: info@travelagency.com</li>
              <li className="text-white"><i className="fas fa-phone mr-2"></i> Phone: +1 (123) 456-7890</li>
              <li className="text-white"><i className="fas fa-map-marker-alt mr-2"></i> Address: 1234 Travel Avenue, City, Country</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Travel Packages</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Booking Policies</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Pinterest</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-blue-800 py-4">
        <p className="text-gray-300 text-center">Copyright © 2023 - All rights reserved by Travel Agency</p>
      </div>
    </>
  );
};

export default Footer;
