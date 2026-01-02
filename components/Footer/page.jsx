import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 tracking-tight mb-4">
              Tech
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Building reliable, user-friendly digital solutions that empower
              individuals and businesses to grow.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Home", "About Us", "Dashboard", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-sm uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-blue-600 transition-colors cursor-default">Web Development</li>
              <li className="hover:text-blue-600 transition-colors cursor-default">UI/UX Design</li>
              <li className="hover:text-blue-600 transition-colors cursor-default">Consulting</li>
              <li className="hover:text-blue-600 transition-colors cursor-default">Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-sm uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Email: support@tech.com</li>
              <li>Phone: +977 98XXXXXXXX</li>
              <li>Location: Nepal</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-700">Tech</span>. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
