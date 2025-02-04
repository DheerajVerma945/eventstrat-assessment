import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      <button
        className="flex  cursor-pointer justify-between items-center w-full text-left text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && <p className="mt-4">{content}</p>}
    </div>
  );
};

export default function CompanyGSTInfo() {
  return (
    <div className="px-4 md:px-12 lg:px-24 pt-0">
      <h2 className="text-3xl font-bold text-[#124673]">Registered company</h2>
      <p className="mt-4 ">
        To legally engage in exporting spices from India, it is essential to
        establish a registered company. This crucial step lays the groundwork
        for your export business and ensures compliance with Indian laws and
        regulations.
      </p>
      <h3 className="mt-6 text-2xl font-bold">
        Why Company Registration Matters for Spice Exporters?
      </h3>
      <Accordion
        title="Legal Entity"
        content="A registered company provides a legal framework for your business operations. It distinguishes your business entity from your personal assets, offering protection from personal liabilities"
      />
      <Accordion
        title="Credibility and Trust"
        content="Enhances your business reputation and builds trust with stakeholders."
      />
      <Accordion
        title="Access to Funding"
        content="Facilitates loans and financial support from banks and investors."
      />
      <Accordion
        title="Government Benefits"
        content="Grants, incentives, and tax benefits are available for registered companies."
      />
      <Accordion
        title="Legal Compliance"
        content="Ensures compliance with laws and prevents legal liabilities."
      />
      <h3 className="mt-6 text-2xl font-bold">Types of Companies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {[
          {
            title: "Private Limited Company",
            desc: "A popular choice for most businesses, offering limited liability and flexibility in terms of ownership and management.",
          },
          {
            title: "Public Limited Company",
            desc: "Suitable for large-scale businesses that plan to raise capital through public offerings.",
          },
          {
            title: "Partnership",
            desc: "A simpler form of business structure suitable for smaller businesses with a few partners",
          },
          {
            title: "Proprietorship",
            desc: "A single-owner business, relatively easy to set up but offers limited liability protection.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-[#dae3ea] p-10 rounded-lg shadow">
            <h4 className="font-semibold mb-5 text-xl">{item.title}</h4>
            <p className=" mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-6 text-2xl font-bold">Registration Process:</h3>
      <p>
        The specific registration process varies depending on the chosen company
        type. Generally, it involves:
      </p>
      <div className="bg-[#dae3ea] max-w-[400px] p-8 rounded-lg mt-4">
        {[
          "Choosing a unique company name",
          "Obtaining necessary documents (e.g., identity proofs, address proofs, PAN card).",
          "Filing the required forms with the Registrar of Companies (ROC).",
          "Paying the prescribed fees.",
        ].map((step, index) => (
          <div key={index} className="flex items-start space-x-3 mb-4">
            <Check className="w-6 h-6 stroke-[2]" />
            <p className="font-medium ml-2 ">{step}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 bg-[#deecdd] font-medium p-3 rounded-md">
        To know more, read our guide on{" "}
        <span className="text-[#21527a] underline">
          how to register a company
        </span>
      </p>
      <h3 className="mt-12 text-2xl font-bold text-[#124673]">
        GST registration
      </h3>
      <p className="mt-2">
        Goods and Services Tax (GST) is a comprehensive, multi-stage tax levied
        on the supply of goods and services within India. For spice exporters,
        GST registration is a major compliance requirement.
      </p>
      <h3 className="mt-6 mb-2 text-xl font-bold">
        Why is GST Registration Crucial for Spice Exporters?
      </h3>
      <Accordion
        title="Legal Compliance"
        content="GST registration is mandatory for most businesses involved in the supply of goods and services, including spice exporters. Operating without GST registration can lead to penalties and legal repercussions."
      />
      <Accordion
        title="Input Tax Credit (ITC)"
        content="Helps businesses claim tax credits on inputs..."
      />
      <Accordion
        title="Enhanced Credibility"
        content="Boosts trust with suppliers and customers..."
      />

      <h3 className="mt-6 mb-2 text-2xl font-bold">
        Key Aspects of GST for Spice Exporters
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {[
          {
            title: "GST Rates",
            desc: "The GST rate applicable to spices varies depending on the type of spice and its classification. It's crucial to understand the applicable GST rate for your specific products.",
          },
          {
            title: "Record Keeping",
            desc: "Maintaining accurate and detailed records of all GST-related transactions is essential for compliance. This includes invoices, purchase bills, and other relevant documents.",
          },
          {
            title: "GST Returns",
            desc: "Spice exporters are required to file periodic GST returns, including details of sales, purchases, and tax liabilities. Timely filing of returns is crucial to avoid penalties.",
          },
          {
            title: "GST Audits",
            desc: "Businesses may be subject to GST audits to verify the accuracy of their tax returns and ensure compliance with GST regulations.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-[#dae3ea] p-10 rounded-lg shadow">
            <h4 className="font-semibold mb-5 text-xl">{item.title}</h4>
            <p className=" mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
