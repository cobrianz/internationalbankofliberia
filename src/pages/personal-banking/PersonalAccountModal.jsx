import React, { useState } from "react";

const PersonalAccountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("personal");
  const [formData, setFormData] = useState({
    currency: "",
    accountType: "",
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    maidenName: "",
    gender: "",
    dob: "",
    existingAccount: false,
    accountNumber: "",
    nationality: "",
    residentStatus: "",
    srCitizen: false,
    idType: "",
    idNumber: "",
    issueDate: "",
    expDate: "",
    maritalStatus: "",
    spouseName: "",
    homeAddress: "",
    county: "",
    cityTown: "",
    country: "",
    tel: "",
    email: "",
    businessAddress: "",
    businessTel: "",
    mobile: "",
    residenceTel: "",
    fatherName: "",
    fatherAddress: "",
    motherName: "",
    motherAddress: "",
    employer: "",
    employerAddress: "",
    occupation: "",
    yearsEmployed: "",
    incomeUSD: "",
    incomeLD: "",
    sourceFunds: "",
    dateArrival: "",
    expDeparture: "",
    visaNumber: "",
    passportNumber: "",
    passportCountry: "",
    residentPermit: "",
    visaIssueDate: "",
    visaExpDate: "",
    govOfficial: false,
    govPosition: "",
    relativeGovOfficial: false,
    officialName: "",
    officialRelationship: "",
    officialAddress: "",
    officialPhone: "",
    officialPosition: "",
    personalRefName: "",
    personalRefAddress: "",
    personalRefPhone: "",
    minorAccount: false,
    minorName: "",
    birthCertNumber: "",
    controlNumber: "",
    volNumber: "",
    minorAge: "",
    beneficiaries: [{ name: "", relationship: "", dob: "" }],
    smsBanking: false,
    internetBanking: false,
    emailInstructions: false,
    atm: false,
    eAlerts: false,
    eStatements: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Personal Account Form Submitted:", formData);
    alert("Your personal account application has been submitted!");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark transition"
      >
        Open Personal Account
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-4xl m-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          INDIVIDUAL/JOINT ACCOUNT APPLICATION FORM
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setCurrentTab("personal")}
            className={`px-4 py-2 rounded ${
              currentTab === "personal" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            Personal Data
          </button>
          <button
            onClick={() => setCurrentTab("employment")}
            className={`px-4 py-2 rounded ${
              currentTab === "employment" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            Employment
          </button>
          <button
            onClick={() => setCurrentTab("foreigner")}
            className={`px-4 py-2 rounded ${
              currentTab === "foreigner" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            Foreigner Details
          </button>
          <button
            onClick={() => setCurrentTab("references")}
            className={`px-4 py-2 rounded ${
              currentTab === "references" ? "bg-gray-300" : "bg-gray-100"
            }`}
          >
            References
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
          {currentTab === "personal" && (
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
                      value="PERSONAL SAVINGS"
                      onChange={handleChange}
                    />
                    PERSONAL SAVINGS
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="accountType"
                      value="PERSONAL CHECKING"
                      onChange={handleChange}
                    />
                    PERSONAL CHECKING
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="accountType"
                      value="PERSONAL SAVINGS/GOLD"
                      onChange={handleChange}
                    />
                    PERSONAL SAVINGS/GOLD
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Title</label>
                <select
                  name="title"
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Miss.">Miss.</option>
                  <option value="cllr.">cllr.</option>
                  <option value="Rev.">Rev.</option>
                </select>
              </div>
              <input
                name="firstName"
                placeholder="First"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="middleName"
                placeholder="Middle"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="lastName"
                placeholder="Last"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="maidenName"
                placeholder="Maiden Name, If Applicable"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <div>
                <label className="block text-sm font-medium">Gender</label>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Do you have existing account with us?
                </label>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="existingAccount"
                      value="Yes"
                      onChange={(e) =>
                        handleChange({
                          ...e,
                          type: "checkbox",
                          checked: e.target.value === "Yes",
                        })
                      }
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="existingAccount"
                      value="No"
                      onChange={(e) =>
                        handleChange({
                          ...e,
                          type: "checkbox",
                          checked: e.target.value === "Yes",
                        })
                      }
                    />
                    No
                  </label>
                </div>
              </div>
              {formData.existingAccount && (
                <input
                  name="accountNumber"
                  placeholder="If yes, please state your account #"
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              )}
              <input
                name="nationality"
                placeholder="Nationality"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <div>
                <label className="block text-sm font-medium">Status</label>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="residentStatus"
                      value="Resident"
                      onChange={handleChange}
                    />
                    Resident
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="residentStatus"
                      value="Non Resident"
                      onChange={handleChange}
                    />
                    Non Resident
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="srCitizen"
                  onChange={handleChange}
                />
                <label className="ml-2">Sr. Citizen</label>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Identity Presented
                </label>
                <div className="space-y-2">
                  <label>
                    <input
                      type="radio"
                      name="idType"
                      value="Driver's License"
                      onChange={handleChange}
                    />
                    Driver's License
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="idType"
                      value="Work ID"
                      onChange={handleChange}
                    />
                    Work ID
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="idType"
                      value="Passport"
                      onChange={handleChange}
                    />
                    Passport
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="idType"
                      value="Student ID"
                      onChange={handleChange}
                    />
                    Student ID
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="idType"
                      value="Others"
                      onChange={handleChange}
                    />
                    Others
                  </label>
                </div>
              </div>
              <input
                name="idNumber"
                placeholder="ID#"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="date"
                name="issueDate"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="date"
                name="expDate"
                onChange={handleChange}
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
                      name="maritalStatus"
                      value="Married"
                      onChange={handleChange}
                    />
                    Married
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Single"
                      onChange={handleChange}
                    />
                    Single
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Divorced"
                      onChange={handleChange}
                    />
                    Divorced
                  </label>
                </div>
              </div>
              {formData.maritalStatus === "Married" && (
                <input
                  name="spouseName"
                  placeholder="Spouse Name"
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              )}
              <input
                name="homeAddress"
                placeholder="Home Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="county"
                placeholder="County"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="cityTown"
                placeholder="City/Town"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="country"
                placeholder="Country"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="tel"
                placeholder="Tel"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessAddress"
                placeholder="Business Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="businessTel"
                placeholder="Tel"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="mobile"
                placeholder="Mobile"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="residenceTel"
                placeholder="Tel (Residence)"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="fatherName"
                placeholder="Father's Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="fatherAddress"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="motherName"
                placeholder="Mother's Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="motherAddress"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </div>
          )}
          {currentTab === "employment" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="employer"
                placeholder="Employer"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="employerAddress"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="occupation"
                placeholder="Occupation"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="yearsEmployed"
                placeholder="Years of Employment"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="incomeUSD"
                placeholder="Gross Annual Income USD"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="incomeLD"
                placeholder="Gross Annual Income LD"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="sourceFunds"
                placeholder="Source of Funds"
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </div>
          )}
          {currentTab === "foreigner" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="dateArrival"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="date"
                name="expDeparture"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="visaNumber"
                placeholder="Visa #"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="passportNumber"
                placeholder="Passport #"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="passportCountry"
                placeholder="Passport Issuing Country"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="residentPermit"
                placeholder="Resident Permit #"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="date"
                name="visaIssueDate"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="date"
                name="visaExpDate"
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </div>
          )}
          {currentTab === "references" && (
            <div className="space-y-4">
              <input
                name="personalRefName"
                placeholder="Personal Reference Name"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefAddress"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="personalRefPhone"
                placeholder="Phone"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="govOfficial"
                  onChange={handleChange}
                />
                <label className="ml-2">Are you a Government Official?</label>
              </div>
              {formData.govOfficial && (
                <input
                  name="govPosition"
                  placeholder="Position"
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="relativeGovOfficial"
                  onChange={handleChange}
                />
                <label className="ml-2">
                  Are you a relative of a Government Official?
                </label>
              </div>
              {formData.relativeGovOfficial && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="officialName"
                    placeholder="Name of Official"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="officialRelationship"
                    placeholder="Relationship"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="officialAddress"
                    placeholder="Address"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="officialPhone"
                    placeholder="Phone"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="officialPosition"
                    placeholder="Position"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                </div>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="minorAccount"
                  onChange={handleChange}
                />
                <label className="ml-2">Is Account for Minor?</label>
              </div>
              {formData.minorAccount && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="minorName"
                    placeholder="Name of Minor"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="birthCertNumber"
                    placeholder="Birth Certificate #"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="controlNumber"
                    placeholder="Control #"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="volNumber"
                    placeholder="Vol #"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                  <input
                    name="minorAge"
                    placeholder="Age"
                    onChange={handleChange}
                    className="p-2 border rounded"
                  />
                </div>
              )}
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
                <input
                  type="checkbox"
                  name="emailInstructions"
                  onChange={handleChange}
                />
                <label className="ml-2">Email Instructions</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="atm" onChange={handleChange} />
                <label className="ml-2">ATM</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="eAlerts" onChange={handleChange} />
                <label className="ml-2">E-Alerts</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="eStatements"
                  onChange={handleChange}
                />
                <label className="ml-2">E-Statements</label>
              </div>
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

export default PersonalAccountModal;
