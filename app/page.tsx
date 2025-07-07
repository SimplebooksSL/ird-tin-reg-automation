import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Users,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import ClientIndexContent from "@/components/ClientIndexContent";
import FloatingSupportButton from "@/components/FloatingSupportButton";

export const metadata = {
  title:
    "Apply for Your TIN Number Online in Sri Lanka – Fast & Easy TIN Registration 2025",
  description:
    "Apply online for your Sri Lanka TIN number in minutes! Our 2025 TIN registration tool makes the process simple, fast, and stress-free.",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              TIN Registration Sri Lanka 2025 – Apply Online Easily
            </h1>
            <p className="text-lg text-gray-600">
              Register your Tax Identification Number with the Inland Revenue
              Department easily and securely.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800 mb-4">
              TIN Number Registration Process in Sri Lanka
            </CardTitle>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Tax Identification Number (TIN) is a unique identifier issued
              by the Inland Revenue Department of Sri Lanka for all taxpayers.
              Complete the registration process online with our secure form.
            </p>
          </CardHeader>
          <CardContent>
            <ClientIndexContent />
          </CardContent>
        </Card>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <FileText className="h-12 w-12 text-[#FF612F] mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">
              Required Documents
            </h3>
            <p className="text-sm text-gray-600">
              NIC copy and supporting documents required for registration
            </p>
          </Card>

          <Card className="text-center p-6">
            <Users className="h-12 w-12 text-[#FF612F] mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">
              Personal Details
            </h3>
            <p className="text-sm text-gray-600">
              Complete personal and family information needed
            </p>
          </Card>

          <Card className="text-center p-6">
            <MapPin className="h-12 w-12 text-[#FF612F] mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">
              Address Information
            </h3>
            <p className="text-sm text-gray-600">
              Provide both residential and statutory addresses
            </p>
          </Card>

          <Card className="text-center p-6">
            <Phone className="h-12 w-12 text-[#FF612F] mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">
              Contact Details
            </h3>
            <p className="text-sm text-gray-600">
              Mobile, email and other contact information
            </p>
          </Card>
        </div>

        {/* Requirements Section */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">Registration Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Required Information:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full name and name with initials</li>
                  <li>• National Identity Card (NIC) details</li>
                  <li>• Date of birth and gender</li>
                  <li>• Residential and statutory addresses</li>
                  <li>• Contact information (mobile, email)</li>
                  <li>• Profession and source of income</li>
                  <li>• Family details and civil status</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Documents Required:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Copy of National Identity Card</li>
                  <li>• Birth certificate (if applicable)</li>
                  <li>• Passport (for dual citizenship)</li>
                  <li>• Marriage certificate (if married)</li>
                  <li>• Bank account details (optional)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>

      <footer className="bg-[#080A3C] text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">simplebooks</h2>
          <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-8 md:gap-16 items-start">
            {/* Company Info */}
            <div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                simplebooks helps small business owners and entrepreneurs grow
                their businesses through financial consulting, registrations and
                legal services. Backed by local knowledge through our offices in
                Sri Lanka, Bangladesh and India, the team of consultants are
                ready to help you every step of the way.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <a
                    href="https://www.facebook.com/teamsimplebooks/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4 text-[#080A3C]" />
                  </a>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/teamsimplebooks/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4 text-[#080A3C]" />
                  </a>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/c/Simplebooks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-4 w-4 text-[#080A3C]" />
                  </a>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <a
                    href="https://www.whatsapp.com/channel/0029Vb7AGCL5a23w67Qh1U29"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 text-[#080A3C]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sri Lanka Office */}
            <div>
              <p className="text-sm text-gray-300">Simplebooks (Pvt) Ltd</p>
              <p className="text-sm text-gray-300">Millennium Tower (Kelly</p>
              <p className="text-sm text-gray-300">Felder Building),</p>
              <p className="text-sm text-gray-300">2nd Floor, 345 Galle Rd,</p>
              <p className="text-sm text-gray-300">Colombo 00300,</p>
              <p className="text-sm text-gray-300">Sri Lanka.</p>
              <p className="text-sm text-white font-medium mt-2">
                0117 555 878
              </p>
            </div>

            {/* Bangladesh Office */}
            <div>
              <p className="text-sm text-gray-300">
                REGUS – Dhaka, Crystal Palace,
              </p>
              <p className="text-sm text-gray-300">House 22, 3rd Floor,</p>
              <p className="text-sm text-gray-300">Crystal Palace Road,</p>
              <p className="text-sm text-gray-300">NO 140,</p>
              <p className="text-sm text-gray-300">Gulshan Ave, Gulshan-1,</p>
              <p className="text-sm text-gray-300">Dhaka 1212, Bangladesh.</p>
              <p className="text-sm text-white font-medium mt-2">
                +880-1312-329255
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <FloatingSupportButton />
    </div>
  );
};

export default Index;
