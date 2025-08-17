import React, { useState } from "react";

const BusinessAccountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("business");
  const [formData, setFormData] = useState({
    currency: "",
    accountType: "",
    existingAccount: false,
    accountNumbers: "",
    entityDate: "",
    businessName: "",
    taxId: "",
    businessActivity: "",
    homeAddress: "",
    homeTel: "",
    businessAddress1: "",
    businessAddress2: "",
    businessPhone1: "",
    businessPhone2: "",
    email: "",
    web: "",
    personalRefName1: "",
    personalRefAddress1: "",
    personalRefPhone1: "",
    personalRefName2: "",
    personalRefAddress2: "",
    personalRefPhone2: "",
    bankRefName1: "",
    bankRefAddress1: "",
    bankRefPhone1: "",
    bankRefName2: "",
    bankRefAddress2: "",
    bankRefPhone2: "",
    primaryContactName: "",
    primaryContactPosition: "",
    primaryContactPhone: "",
    owners: [
      {
        first: "",
        middle: "",
        last: "",
        gender: "",
        dob: "",
        maritalStatus: "",
        contact: "",
        residenceStatus: "",
        idType: "",
        address: "",
        issueDate: "",
        arrivalDate: "",
        departureDate: "",
        residentPermit: "",
        expDate: "",
        idNumber: "",
        visaNumber: "",
        visaIssueDate: "",
        visaExpDate: "",
      },
    ],
    annualIncome: "",
    entity: "",
    fundingMethod: "",
    sourceFunding: "",
    beneficiaries: [{ name: "", relationship: "", dob: "" }],
    trading: false,
    retailWholesale: false,
    donorFunding: false,
    othersTrading: false,
    othersSpecify: "",
    smsBanking: false,
    internetBanking: false,
    eAlerts: false,
    emailInstructions: false,
    pepSignatory: false,
    pepDetails: [{ first: "", middle: "", last: "", position: "", entity: "" }],
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOwnerChange = (index, field, value) => {
    const newOwners = [...formData.owners];
    newOwners[index][field] = value;
    setFormData((prev) => ({ ...prev, owners: newOwners }));
  };

  const addOwner = () => {
    setFormData((prev) => ({
      ...prev,
      owners: [
        ...prev.owners,
        {
          first: "",
          middle: "",
          last: "",
          gender: "",
          dob: "",
          maritalStatus: "",
          contact: "",
          residenceStatus: "",
          idType: "",
          address: "",
          issueDate: "",
          arrivalDate: "",
          departureDate: "",
          residentPermit: "",
          expDate: "",
          idNumber: "",
          visaNumber: "",
          visaIssueDate: "",
          visaExpDate: "",
        },
      ],
    }));
  };

  const handleBeneficiaryChange = (index, field, value) => {
    const newBeneficiaries = [...formData.beneficiaries];
    newBeneficiaries[index][field] = value;
    setFormData((prev) => ({ ...prev, beneficiaries: newBeneficiaries }));
  };

  const addBeneficiary = () => {
    setFormData((prev) => ({
      ...prev,
      beneficiaries: [
        ...prev.beneficiaries,
        { name: "", relationship: "", dob: "" },
      ],
    }));
  };

  const handlePepChange = (index, field, value) => {
    const newPep = [...formData.pepDetails];
    newPep[index][field] = value;
    setFormData((prev) => ({ ...prev, pepDetails: newPep }));
  };

  const addPep = () => {
    setFormData((prev) => ({
      ...prev,
      pepDetails: [
        ...prev.pepDetails,
        { first: "", middle: "", last: "", position: "", entity: "" },
      ],
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Business Account Form Submitted:", formData);
    alert("Your business account application has been submitted!");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark transition"
      >
        Open Business Account
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-4xl m-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          BUSINESS/ORGANIZATION ACCOUNT APPLICATION FORM
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setCurrentTab("business")}
            className={`px-4 py-2 rounded ${
              currentTab === "business" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            Business Info
          </button>
          <button
            onClick={() => setCurrentTab("owners")}
            className={`px-4 py-2 rounded ${
              currentTab === "owners" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            Owners Details
          </button>
          <button
            onClick={() => setCurrentTab("funding")}
            className={`px-4 py-2 rounded ${
              currentTab === "funding" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            Funding & Beneficiaries
          </button>
          <button
            onClick={() => setCurrentTab("services")}
            className={`px-4 py-2 rounded ${
              currentTab === "services" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            Services & Terms
          </button>
        </div>
        <form onSubmit={submitForm} className="space-y-4">
          {currentTab === "business" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Currency</label>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="currency"
                      value="LIBERIAN DOLLARS"
                      onChange={handleChange}
                    />
                    LIBERIAN DOLLARS
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="currency"
                      value="UNITED STATES DOLLARS"
                      onChange={handleChange}
                    />
                    UNITED STATES DOLLARS
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Account Type
                </label>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="accountType"
                      value="Savings"
                      onChange={handleChange}
                    />
                    Savings
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="accountType"
                      value="Checking"
                      onChange={handleChange}
                    />
                    Checking
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="existingAccount"
                  onChange={handleChange}
                />
                <label className="ml-2">
                  Do you have existing account with us?
                </label>
              </div>
              {formData.existingAccount && (
                <input
                  name="accountNumbers"
                  placeholder="Account Number(s)"
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              )}
              <input
                type="date"
                name="entityDate"
                placeholder="Date of Entity establishment"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessName"
                placeholder="Name of Business/Organization"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="taxId"
                placeholder="Tax ID"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessActivity"
                placeholder="Business Activity"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="homeAddress"
                placeholder="Home Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="homeTel"
                placeholder="Tel No."
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessAddress1"
                placeholder="Business Address 1"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessAddress2"
                placeholder="Business Address 2"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessPhone1"
                placeholder="Phone No. 1"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessPhone2"
                placeholder="Phone No. 2"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="web"
                placeholder="Web Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefName1"
                placeholder="Personal Reference 1 Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefAddress1"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefPhone1"
                placeholder="Phone No."
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefName2"
                placeholder="Personal Reference 2 Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefAddress2"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefPhone2"
                placeholder="Phone No."
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="bankRefName1"
                placeholder="Bank Reference 1 Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="bankRefAddress1"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="bankRefPhone1"
                placeholder="Phone No."
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="bankRefName2"
                placeholder="Bank Reference 2 Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="bankRefAddress2"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="bankRefPhone2"
                placeholder="Phone No."
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="primaryContactName"
                placeholder="Primary Contact Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="primaryContactPosition"
                placeholder="Position"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="primaryContactPhone"
                placeholder="Phone No."
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </div>
          )}
          {currentTab === "owners" && (
            <div className="space-y-4">
              {formData.owners.map((owner, index) => (
                <div key={index} className="border p-4 rounded">
                  <h3 className="font-bold mb-2">Owner {index + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      placeholder="First"
                      value={owner.first}
                      onChange={(e) =>
                        handleOwnerChange(index, "first", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      placeholder="Middle"
                      value={owner.middle}
                      onChange={(e) =>
                        handleOwnerChange(index, "middle", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      placeholder="Last"
                      value={owner.last}
                      onChange={(e) =>
                        handleOwnerChange(index, "last", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <div>
                      <label className="block text-sm font-medium">
                        Gender
                      </label>
                      <div className="flex space-x-4">
                        <label>
                          <input
                            type="radio"
                            name={`gender-${index}`}
                            value="Male"
                            onChange={(e) =>
                              handleOwnerChange(index, "gender", e.target.value)
                            }
                          />
                          Male
                        </label>
                        <label>
                          <input
                            type="radio"
                            name={`gender-${index}`}
                            value="Female"
                            onChange={(e) =>
                              handleOwnerChange(index, "gender", e.target.value)
                            }
                          />
                          Female
                        </label>
                      </div>
                    </div>
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      value={owner.dob}
                      onChange={(e) =>
                        handleOwnerChange(index, "dob", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <div>
                      <label className="block text-sm font-medium">
                        Marital Status
                      </label>
                      <div className="flex space-x-4">
                        <label>
                          <input
                            type="radio"
                            name={`maritalStatus-${index}`}
                            value="Single"
                            onChange={(e) =>
                              handleOwnerChange(
                                index,
                                "maritalStatus",
                                e.target.value
                              )
                            }
                          />
                          Single
                        </label>
                        <label>
                          <input
                            type="radio"
                            name={`maritalStatus-${index}`}
                            value="Married"
                            onChange={(e) =>
                              handleOwnerChange(
                                index,
                                "maritalStatus",
                                e.target.value
                              )
                            }
                          />
                          Married
                        </label>
                      </div>
                    </div>
                    <input
                      placeholder="Contact #"
                      value={owner.contact}
                      onChange={(e) =>
                        handleOwnerChange(index, "contact", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <div>
                      <label className="block text-sm font-medium">
                        Residence Status
                      </label>
                      <div className="flex space-x-4">
                        <label>
                          <input
                            type="radio"
                            name={`residenceStatus-${index}`}
                            value="Resident"
                            onChange={(e) =>
                              handleOwnerChange(
                                index,
                                "residenceStatus",
                                e.target.value
                              )
                            }
                          />
                          Resident
                        </label>
                        <label>
                          <input
                            type="radio"
                            name={`residenceStatus-${index}`}
                            value="Non-Resident"
                            onChange={(e) =>
                              handleOwnerChange(
                                index,
                                "residenceStatus",
                                e.target.value
                              )
                            }
                          />
                          Non-Resident
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Identity Provided
                      </label>
                      <select
                        onChange={(e) =>
                          handleOwnerChange(index, "idType", e.target.value)
                        }
                        className="p-2 border rounded w-full"
                      >
                        <option value="">Select</option>
                        <option value="Passport">Passport</option>
                        <option value="Driver’s License">
                          Driver’s License
                        </option>
                        <option value="Company ID">Company ID</option>
                        <option value="Government Issued ID">
                          Government Issued ID
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <input
                      placeholder="Address"
                      value={owner.address}
                      onChange={(e) =>
                        handleOwnerChange(index, "address", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      placeholder="Issue Date"
                      value={owner.issueDate}
                      onChange={(e) =>
                        handleOwnerChange(index, "issueDate", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      placeholder="Exp Date"
                      value={owner.expDate}
                      onChange={(e) =>
                        handleOwnerChange(index, "expDate", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      placeholder="ID #"
                      value={owner.idNumber}
                      onChange={(e) =>
                        handleOwnerChange(index, "idNumber", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      placeholder="Date of Arrival"
                      value={owner.arrivalDate}
                      onChange={(e) =>
                        handleOwnerChange(index, "arrivalDate", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      placeholder="Expected Date of Departure"
                      value={owner.departureDate}
                      onChange={(e) =>
                        handleOwnerChange(
                          index,
                          "departureDate",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      placeholder="Resident Permit #"
                      value={owner.residentPermit}
                      onChange={(e) =>
                        handleOwnerChange(
                          index,
                          "residentPermit",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      placeholder="Visa #"
                      value={owner.visaNumber}
                      onChange={(e) =>
                        handleOwnerChange(index, "visaNumber", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      placeholder="Visa Issue Date"
                      value={owner.visaIssueDate}
                      onChange={(e) =>
                        handleOwnerChange(
                          index,
                          "visaIssueDate",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      placeholder="Visa Exp Date"
                      value={owner.visaExpDate}
                      onChange={(e) =>
                        handleOwnerChange(index, "visaExpDate", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addOwner}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Owner
              </button>
            </div>
          )}
          {currentTab === "funding" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="annualIncome"
                placeholder="Expected Annual Income (in Account currency)"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="entity"
                placeholder="Entity"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="fundingMethod"
                placeholder="How will the account be funded?"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="sourceFunding"
                placeholder="Source of Funding"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <div>
                <label className="block text-sm font-medium">
                  Beneficiaries/Next of Kin
                </label>
                {formData.beneficiaries.map((ben, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 mt-2">
                    <input
                      placeholder="Name"
                      value={ben.name}
                      onChange={(e) =>
                        handleBeneficiaryChange(index, "name", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      placeholder="Relationship"
                      value={ben.relationship}
                      onChange={(e) =>
                        handleBeneficiaryChange(
                          index,
                          "relationship",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded"
                    />
                    <input
                      type="date"
                      value={ben.dob}
                      onChange={(e) =>
                        handleBeneficiaryChange(index, "dob", e.target.value)
                      }
                      className="p-2 border rounded"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addBeneficiary}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Beneficiary
                </button>
              </div>
            </div>
          )}
          {currentTab === "services" && (
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" name="trading" onChange={handleChange} />
                <label className="ml-2">Trading</label>
              </div>
              {formData.trading && (
                <div className="ml-6 space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="retailWholesale"
                      onChange={handleChange}
                    />
                    <label className="ml-2">Retail / Wholesale</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="donorFunding"
                      onChange={handleChange}
                    />
                    <label className="ml-2">Donor Funding</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="othersTrading"
                      onChange={handleChange}
                    />
                    <label className="ml-2">Others</label>
                  </div>
                  {formData.othersTrading && (
                    <input
                      name="othersSpecify"
                      placeholder="If Others, Please Specify"
                      onChange={handleChange}
                      className="p-2 border rounded"
                    />
                  )}
                </div>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="smsBanking"
                  onChange={handleChange}
                />
                <label className="ml-2">SMS Banking</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="internetBanking"
                  onChange={handleChange}
                />
                <label className="ml-2">Internet Banking</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="eAlerts" onChange={handleChange} />
                <label className="ml-2">E-Alerts</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="emailInstructions"
                  onChange={handleChange}
                />
                <label className="ml-2">Email Instructions</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="pepSignatory"
                  onChange={handleChange}
                />
                <label className="ml-2">
                  Are any of your authorized signatories/trustees/owners a PEP?
                </label>
              </div>
              {formData.pepSignatory && (
                <div>
                  {formData.pepDetails.map((pep, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
                    >
                      <input
                        placeholder="First"
                        value={pep.first}
                        onChange={(e) =>
                          handlePepChange(index, "first", e.target.value)
                        }
                        className="p-2 border rounded"
                      />
                      <input
                        placeholder="Middle"
                        value={pep.middle}
                        onChange={(e) =>
                          handlePepChange(index, "middle", e.target.value)
                        }
                        className="p-2 border rounded"
                      />
                      <input
                        placeholder="Last"
                        value={pep.last}
                        onChange={(e) =>
                          handlePepChange(index, "last", e.target.value)
                        }
                        className="p-2 border rounded"
                      />
                      <input
                        placeholder="Position"
                        value={pep.position}
                        onChange={(e) =>
                          handlePepChange(index, "position", e.target.value)
                        }
                        className="p-2 border rounded"
                      />
                      <input
                        placeholder="Entity"
                        value={pep.entity}
                        onChange={(e) =>
                          handlePepChange(index, "entity", e.target.value)
                        }
                        className="p-2 border rounded"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addPep}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Add PEP
                  </button>
                </div>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  onChange={handleChange}
                />
                <label className="ml-2">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                disabled={!formData.agreeTerms}
                className="bg-primary text-white px-4 py-2 rounded w-full"
              >
                Submit Application
              </button>
            </div>
          )}
        </form>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BusinessAccountModal;
