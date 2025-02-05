import { useState } from "react";
import {  Check, ChevronDown, ChevronUp  } from "lucide-react";

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
      <div className="bg-[#dae3ea] w-[400px] h-[323px] max-w-full p-8 rounded-lg mt-4">
        {[
          "Choosing a unique company name",
          "Obtaining necessary documents (e.g., identity proofs, address proofs, PAN card).",
          "Filing the required forms with the Registrar of Companies (ROC).",
          "Paying the prescribed fees.",
        ].map((step, index) => (
          <div key={index} className="flex items-start space-x-3 mb-4">
            <Check className="w-5 h-5 stroke-[2] text-black" />
            <p className="font-medium ml-2">{step}</p>
          </div>
        ))}
      </div>
      ;
      <p className="mt-4 bg-[#deecdd] font-medium p-6 rounded-md">
        To know more, read our guide on{" "}
        <a className="text-[#21527a] underline" href="#">
          how to register a company
        </a>
      </p>
      <h3
        className="mt-12 text-2xl font-bold text-[#124673]"
        id="GST Registration"
      >
        GST Registration
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
      <div className="flex mt-12 items-center justify-between">
        <h3
          className=" text-2xl font-bold text-[#124673]"
          id="GST Registration"
        >
          PAN Registration
        </h3>
        <ChevronUp size={40} />
      </div>
      <p className="mt-5">
        Exporters can maintain foreign currency accounts to receive payments
        from overseas buyers, which can help to hedge against currency
        fluctuations.
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Why is PAN Essential for Spice Exporters?
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-5">
        <div>
          <strong className="font-semibold">Tax Compliance:</strong>
          <p>
            PAN is mandatory for filing income tax returns. As a spice exporter,
            you will need to file income tax returns to report your profits and
            pay taxes on your export earnings.
          </p>
        </div>

        <div>
          <strong className="font-semibold">Financial Transactions:</strong>
          <p>
            PAN is required for various financial transactions, including
            opening bank accounts, making investments, and conducting large cash
            transactions.
          </p>
        </div>

        <div>
          <strong className="font-semibold">GST Registration:</strong>
          <p>
            PAN is a prerequisite for obtaining GST registration, which is
            essential for conducting business within India, including domestic
            transactions related to your export operations.
          </p>
        </div>

        <div>
          <strong className="font-semibold">Other Legal Requirements:</strong>
          <p>
            PAN may be required for various other legal and regulatory purposes,
            such as obtaining import-export licenses and other necessary
            permits.
          </p>
        </div>
      </div>
      <h2 className="mt-5 text-2xl font-bold">How to Obtain a PAN Card?</h2>
      <div className="mt-5 grid grid-cols-2 gap-5">
        <div>
          <strong className="font-semibold">Online Application:</strong>
          <p>
            You can apply for a PAN card online through the NSDL or UTIITSL
            websites.
          </p>
        </div>

        <div>
          <strong className="font-semibold">Offline Application:</strong>
          <p>
            You can also apply for a PAN card offline by submitting the
            application form to designated centers
          </p>
        </div>

        <div>
          <strong className="font-semibold">Required Documents:</strong>
          <p>
            The required documents for PAN card application may vary depending
            on the application method and applicant type. Generally, you will
            need to provide proof of identity and address, along with recent
            photographs.
          </p>
        </div>
      </div>
      <p className="mt-4 bg-[#deecdd] font-medium p-6 rounded-md">
        To know more, read our comprehensive guide on{" "}
        <a className="text-[#21527a] underline" href="#">
          How to apply for PAN registration
        </a>
      </p>
      <div className="flex mt-16 items-center justify-between">
        <h2 className=" text-2xl font-bold">Importer Exporter Code (IEC)</h2>
        <ChevronDown size={40} />
      </div>
      <div className="flex mt-2 items-center justify-between">
        <h2 className=" text-2xl font-bold">Authorized Dealer (AD) Code</h2>
        <ChevronDown size={40} />
      </div>
      <div className="flex mt-2 items-center justify-between">
        <h2 className=" text-2xl font-bold">FSSAI Registration</h2>
        <ChevronDown size={40} />
      </div>
      
    </div>
  );
}
