import { createFileRoute } from "@tanstack/react-router";
import { Calculator, CodeXml, FileJson, FileText, LinkIcon, Notebook, PercentCircle, Timer } from "lucide-react";

export const Route = createFileRoute("/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  const features = [
    {
      icon: <FileJson className="w-12 h-12 text-cyan-400" />,
      title: "JSON Formatter/Checker/Comparer",
      description:
        "Format, validate, and compare JSON data with ease. Perfect for developers and data analysts.",
    },
    {
      icon: <CodeXml className="w-12 h-12 text-cyan-400" />,
      title: "XML Formatter/Checker/Comparer",
      description:
        "Handle XML data efficiently. Format, validate, and compare XML files seamlessly.",
    },
    {
      icon: <FileText className="w-12 h-12 text-cyan-400" />,
      title: "CSV Formatter/Checker/Comparer",
      description:
        "Work with CSV files effortlessly. Format, validate, and compare CSV data for accuracy.",
    },
    {
      icon: <Timer className="w-12 h-12 text-cyan-400" />,
      title: "Epoch Converter",
      description:
        "Convert epoch timestamps to human-readable dates and vice versa. Ideal for developers and data enthusiasts.",
    },
    {
      icon: <Calculator className="w-12 h-12 text-cyan-400" />,
      title: "Calculator",
      description:
        "A simple yet powerful calculator for quick calculations. Supports basic arithmetic and advanced functions.",
    },
    {
      icon: <Notebook className="w-12 h-12 text-cyan-400" />,
      title: "Note Taking",
      description:
        "A minimalist note-taking tool to jot down ideas, tasks, and reminders. Syncs across devices for convenience.",
    },
    {
      icon: <PercentCircle className="w-12 h-12 text-cyan-400" />,
      title: "UTAK Discount/VAT Breakdown",
      description:
        "Input an amount and see the breakdown of discount and VAT for UTAK transactions.",
    },
    {
      icon: <LinkIcon className="w-12 h-12 text-cyan-400" />,
      title: "Other Helpful Link",
      description:
        "A collection of other useful links and resources for productivity and development.",
    },
  ];
  return <div>
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/tanstack-circle-logo.png"
              alt="TanStack Logo"
              className="w-16 h-16"
            />
            <h1 className="text-4xl font-extrabold text-white">
              TanStack Productivity Tools
            </h1>
          </div>
          <p className="text-lg text-slate-300 mb-12">
            A suite of productivity tools built with TanStack Router and Convex.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>;
}
