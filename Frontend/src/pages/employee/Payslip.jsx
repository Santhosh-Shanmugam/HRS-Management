import React from "react";

const Payslip = () => {
  // Dummy salary data (Replace with actual API data)
  const payslip = {
    month: "February 2025",
    basicSalary: 50000,
    deductions: 5000,
    tax: 2500,
    netSalary: 42500,
  };

  const handleDownload = () => {
    console.log("Downloading payslip...");
    // TODO: Implement PDF download feature
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Payslip</h2>
      <p className="text-gray-600 mb-6">View your salary breakdown.</p>

      {/* Payslip Card */}
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Payslip for {payslip.month}
        </h3>

        {/* Salary Breakdown */}
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium">Basic Salary</td>
              <td className="text-right text-green-600">₹{payslip.basicSalary}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Deductions</td>
              <td className="text-right text-red-500">- ₹{payslip.deductions}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Tax</td>
              <td className="text-right text-red-500">- ₹{payslip.tax}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 font-bold text-lg">Net Salary</td>
              <td className="text-right text-xl text-blue-600">₹{payslip.netSalary}</td>
            </tr>
          </tbody>
        </table>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
        >
          Download Payslip
        </button>
      </div>
    </div>
  );
};

export default Payslip;
