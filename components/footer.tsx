import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              Nat's Cats – Elite Home Care
            </h3>
            <p className="text-sm text-gray-600">
              Service area: Harpenden + 3 Miles
            </p>
            <p className="text-xs text-gray-500">
              Vet-Nurse-Led Cat Sitting
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-4">Contact</h4>
            <p className="text-sm text-gray-600">
              Get in touch to book your cat's care
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-xs text-center text-gray-500">
            © {new Date().getFullYear()} Nat's Cats – Elite Home Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

