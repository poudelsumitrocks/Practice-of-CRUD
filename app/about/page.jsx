import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <span className="inline-block mb-4 rounded-full bg-blue-100 text-blue-600 px-4 py-1 text-sm font-medium">
            Who We Are
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building Digital Experiences <br className="hidden md:block" />
            That Truly Matter
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We design and develop reliable, user-centric solutions that help
            individuals and businesses grow with confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="group bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To craft innovative, scalable, and efficient solutions that
              empower users to achieve their goals while delivering exceptional
              value and performance.
            </p>
          </div>

          <div className="group bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted digital partner known for quality,
              transparency, and continuous innovation across every product we
              build.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 border rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  High-Quality Delivery
                </h4>
                <p className="text-gray-600 text-sm">
                  We focus on clean, maintainable, and scalable solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Expert Team
                </h4>
                <p className="text-gray-600 text-sm">
                  Experienced professionals committed to excellence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Reliable Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Consistent support you can trust at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
