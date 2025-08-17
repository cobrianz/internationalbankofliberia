import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const QuickAccessWidgets = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(24);
  const [interestRate] = useState(12);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  const widgets = [
    {
      id: 1,
      title: "Loan Calculator",
      description: "Estimate your monthly payments for personal loans",
      icon: "Calculator",
      color: "bg-primary",
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Loan Amount (LRD)
            </label>
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              placeholder="Enter loan amount"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Term (Months)
            </label>
            <Input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              placeholder="Enter term in months"
              className="w-full"
            />
          </div>
          <div className="bg-accent p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Interest Rate:
              </span>
              <span className="font-semibold text-foreground">
                {interestRate}% APR
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Monthly Payment:
              </span>
              <span className="text-lg font-bold text-primary">
                LRD {calculateMonthlyPayment()}
              </span>
            </div>
          </div>
          <Button variant="default" fullWidth className="shadow-neumorphic">
            Apply for Loan
          </Button>
        </div>
      ),
    },
    {
      id: 2,
      title: "Account Requirements",
      description: "Documents needed to open a personal account",
      icon: "FileText",
      color: "bg-secondary",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground mb-3">
            Required Documents:
          </h4>
          <ul className="space-y-3">
            {[
              "Valid ID (Passport, Driver's License, Work ID, or Student ID)",
              "Proof of Address (Utility Bill or similar)",
              "Employment details or source of funds",
              "Two passport-sized photos",
              "Reference letters (personal and bank)",
              "For foreigners: Visa, Passport, Resident Permit",
            ].map((requirement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-success mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-foreground">{requirement}</span>
              </li>
            ))}
          </ul>
          <div className="bg-accent p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                Processing Time
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Account opening takes 1-2 business days after verification.
            </p>
          </div>
          <Button variant="default" fullWidth className="shadow-neumorphic">
            Download Application Form
          </Button>
        </div>
      ),
    },
    {
      id: 3,
      title: "Branch Locator",
      description: "Find our 9 branches across Liberia",
      icon: "MapPin",
      color: "bg-accent",
      content: (
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your location"
            className="w-full"
          />
          <div className="space-y-4">
            {[
              {
                name: "Monrovia Main Branch",
                hours: "Mon-Fri 9AM-2PM",
                distance: "2.5 km",
              },
              {
                name: "Gbarnga Branch",
                hours: "Mon-Fri 9AM-2PM",
                distance: "150 km",
              },
              {
                name: "Buchanan Branch",
                hours: "Mon-Fri 9AM-2PM",
                distance: "110 km",
              },
            ].map((branch, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {branch.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {branch.hours}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">
                    {branch.distance}
                  </p>
                  <button className="text-xs text-primary hover:underline">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="default" fullWidth className="shadow-neumorphic">
            View All Branches
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Quick Access Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Useful tools for your personal banking needs in Liberia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {widgets.map((widget, index) => (
            <div
              key={widget.id}
              className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border animate-entrance"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 ${widget.color} rounded-xl flex items-center justify-center shadow-neumorphic mr-4`}
                >
                  <Icon name={widget.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {widget.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {widget.description}
                  </p>
                </div>
              </div>

              {widget.content}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic border border-border max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-neumorphic">
                  <Icon name="Headphones" size={32} color="white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Need Assistance?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team is ready to help with your personal banking needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    variant="default"
                    className="shadow-neumorphic"
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={18}
                  >
                    Call +231 887 317 436
                  </Button>
                  <Button
                    variant="outline"
                    className="shadow-neumorphic"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={18}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessWidgets;
