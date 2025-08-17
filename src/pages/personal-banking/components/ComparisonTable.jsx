import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ComparisonTable = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const accounts = [
    {
      id: 1,
      name: "Personal Savings",
      type: "savings",
      minBalance: { lrd: 5000, usd: 50 },
      interestRate: { lrd: 3.5, usd: 2.8 },
      monthlyFee: { lrd: 0, usd: 0 },
      features: [
        "Free online banking",
        "Mobile app access",
        "SMS alerts",
        "Interest compounded monthly",
      ],
      popular: true,
      category: "savings",
    },
    {
      id: 2,
      name: "Personal Checking",
      type: "checking",
      minBalance: { lrd: 0, usd: 0 },
      interestRate: { lrd: 0.5, usd: 0.3 },
      monthlyFee: { lrd: 1000, usd: 10 },
      features: [
        "Unlimited transactions",
        "Free debit card",
        "Overdraft protection",
        "Mobile check deposit",
      ],
      popular: false,
      category: "checking",
    },
    {
      id: 3,
      name: "Personal Savings Gold",
      type: "savings",
      minBalance: { lrd: 25000, usd: 250 },
      interestRate: { lrd: 4.0, usd: 3.2 },
      monthlyFee: { lrd: 0, usd: 0 },
      features: [
        "Higher interest rates",
        "Priority service",
        "Investment advisory",
        "Free wire transfers",
      ],
      popular: false,
      category: "savings",
    },
  ];

  const filters = [
    { id: "all", label: "All Accounts", icon: "Grid3X3" },
    { id: "savings", label: "Savings", icon: "PiggyBank" },
    { id: "checking", label: "Checking", icon: "CreditCard" },
  ];

  const filteredAccounts =
    activeFilter === "all"
      ? accounts
      : accounts.filter((account) => account.category === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Compare Personal Account Types
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the account that best fits your personal banking needs in
            Liberia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-neumorphic ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Icon name={filter.icon} size={18} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-2xl shadow-elevation overflow-hidden border border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accent">
                <tr>
                  <th className="text-left p-6 font-heading font-semibold text-foreground">
                    Account Type
                  </th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground">
                    Minimum Balance
                  </th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground">
                    Interest Rate (APY)
                  </th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground">
                    Monthly Fee
                  </th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground">
                    Key Features
                  </th>
                  <th className="text-center p-6 font-heading font-semibold text-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.map((account) => (
                  <tr
                    key={account.id}
                    className="border-t border-border hover:bg-accent transition-colors"
                  >
                    <td className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-neumorphic">
                          <Icon
                            name={
                              account.type === "savings"
                                ? "PiggyBank"
                                : "CreditCard"
                            }
                            size={24}
                            color="white"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {account.name}
                          </h4>
                          <p className="text-sm text-muted-foreground capitalize">
                            {account.type} Account
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">
                          LRD {account.minBalance.lrd.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          USD {account.minBalance.usd.toLocaleString()}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="space-y-1">
                        <div className="font-medium text-success">
                          {account.interestRate.lrd}% LRD
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {account.interestRate.usd}% USD
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">
                          {account.monthlyFee.lrd === 0
                            ? "None"
                            : `LRD ${account.monthlyFee.lrd.toLocaleString()}`}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {account.monthlyFee.usd === 0
                            ? "None"
                            : `USD ${account.monthlyFee.usd.toLocaleString()}`}
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <ul className="space-y-2">
                        {account.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <Icon
                              name="Check"
                              size={14}
                              className="text-success flex-shrink-0"
                            />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-6 text-center">
                      <div className="space-y-2">
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full shadow-neumorphic"
                          iconName="UserPlus"
                          iconPosition="left"
                          iconSize={16}
                        >
                          Open Account
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-primary hover:text-primary-foreground hover:bg-primary"
                          iconName="Info"
                          iconPosition="left"
                          iconSize={16}
                        >
                          More Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredAccounts.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No accounts found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filter to see more options.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonTable;
