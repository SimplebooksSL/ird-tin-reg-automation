import DynamicForm from "@/components/DynamicForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              TIN Registration for Sri Lanka – IRD Services
            </h1>
            <p className="text-lg text-gray-600">
              Register your Tax Identification Number with the Inland Revenue
              Department easily and securely.
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <DynamicForm />
    </div>
  );
};

export default Index;
