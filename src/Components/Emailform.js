import React, { useState } from 'react';
import Select from 'react-select';

const departmentOptions = [
  { value: 'IT', label: 'IT' },
  { value: 'CSE', label: 'CSE'},
  { value: 'ECE', label: 'ECE'},
  { value: 'EEE', label: 'EEE'},
  { value: 'MECH', label: 'MECH'},
  { value: 'CIVIL', label: 'CIVIL'},
  { value: 'AUTO', label: 'AUTO'},
  { value: 'PETRO', label: 'PETRO'},
];

const emails = [
  { value: 'principal@getedu.in', label: 'Principal' },
  { value: 'jprajesh25@gmail.com', label: 'President boy' },
  { value: 'sivaranjanikuppan1129@gmail.com', label: 'President Girl' },
  { value: 'poojakodi558@gmail.com', label: 'Vice President' },
  { value: 'nithishff16@gmail.com', label: 'General Secretary' },
  { value: 'manojmunusamy2003@gmail.com', label: 'Joint Secretary' },
  { value: 'sakthibalaji03@gmail.com', label: 'Editor, Magazine Secretary' },
  { value: 'sanjaystr2001@gmail.com', label: 'Social Service Secretary' },
  { value: 'logukaruna28@gmail.com', label: 'General Sports Secretary' },
  { value: 'indrakaruna24@gmail.com', label: 'Symposium & Competition Secretary' },
  { value: 'logukaruna28@gmail.com', label: 'Career Growth Secretary' },
  { value: 'indrakaruna24@gmail.com', label: 'Culturals & Fine Arts Secretary' },
  { value: 'sudharsan21sudha@gmail.com', label: 'Student Council Secretary' },
];

const dropDownStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "rgb(31 41 55)", borderRadius: "0.5rem", borderColor: "rgb(55 65 81 )" }),
  option: (styles) => {
    return {...styles, backgroundColor: "rgb(31 41 55)", color: "white"}
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "white",
    }
  },
  multiValueLabel: (styles) => {
    return {
      ...styles,
      backgroundColor: "white",
      fontWeight : "bold"
    }
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      color: "red",
    }
  }
};
function ComplaintForm() {
  
  const defaultEmail = "logusca28@gmail.com";
  
  const getOptionLabelStyle = (data) => ({
    backgroundColor: "rgb(31 41 55)",
    color: formData.department ? "white" : "inherit", // Change to white if department is selected.
  });

  const [formData, setFormData] = useState({
    name: '',
    email: defaultEmail,
    department: '',
    to: [],
    complaint: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const SubmitHandler = (e) => {
    e.preventDefault();
    const emailBody = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #333;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            th, td {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 12px;
            }
            th {
              background-color: #f2f2f2;
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Complaint Details</h2>
            <table>
              <tr>
                <th>Name</th>
                <td>${formData.name}</td>
              </tr>
              <tr>
                <th>Department</th>
                <td>${formData.department}</td>
              </tr>
              <tr>
                <th>Complaint/Concern</th>
                <td>${formData.complaint}</td>
              </tr>
            </table>
          </div>
        </body>
      </html>
    `;

  

    const config = {
      SecureToken: "cc79bc75-e4fe-4c79-b82c-cdb2c22c1c52",
      To : formData.to,
      From : formData.email,
      Subject : `Complaint From ${formData.name}`,
      /*Body: `Name: ${formData.name}
             Department: ${formData.department}
             Complaint/Concern: ${formData.complaint}`*/
      Body: `${emailBody}`
    }

    if (window.Email) {
      window.Email.send(config).then((message) => {
        // Check if the email was sent successfully
        if (message === "OK") {
          setFormData({
            name: '',
            email: defaultEmail,
            department: '',
            to: [],
            complaint: '',
          });
          alert("We have received your concern, and we assure you that we will resolve it promptly.");
        } else {
          alert(message); // Display the message returned by the email sending function
        }
      });
    }
    
    
      
  }

  const handleDepartmentChange = (selectedOption) => {
    setFormData({
      ...formData,
      department: selectedOption.value,
    });
  };

  const handleEmailChange = (selectedOptions) => {
    const emailValues = selectedOptions.map((option) => option.value);
    setFormData({
      ...formData,
      to: emailValues,
    });
  };


  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-white">
  {/* Logo and College Name */}
  <div className="mb-6 flex items-center">
    <img src="/College.png" alt="College Logo" className="w-16 h-16 rounded-full bg-white p-1 mr-4" />
    <h1 className="text-2xl font-extrabold">Global Institute of Engineering and Technology</h1>
  </div>

  {/* Complaint Form */}
  <div className="container w-full sm:w-3/4 m-4 md:w-1/2 lg:w-1/3 bg-gray-900 p-4 sm:p-8 rounded-lg shadow-lg sm:m-4">
    <h2 className="text-center text-3xl font-extrabold mb-6">Complaint Form</h2>
    <form onSubmit={SubmitHandler}>
      <div className="mb-4">
        <label htmlFor="name" className="text-gray-300 font-semibold float-left">Your Name:</label>
        <input
          type="text"
          name="name"
          id='name'
          value={formData.name}
          onChange={handleInputChange}
          className="form-input w-full pl-4 mt-2 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-4" style={{ display: 'none' }}>
        <label htmlFor="email" className="text-gray-300 font-semibold float-left">Your Email:</label>
        <input
          type="email"
          id='email'
          name="email"
          value={formData.email}
          disabled
          onChange={handleInputChange}
          className="form-input w-full pl-4 mt-2 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="department" className="text-gray-300 font-semibold float-left">Department:</label><br></br>
        <div className="relative mt-2">
          <Select
            placeholder="Select Department"
            id='department'
            styles={dropDownStyles}
            options={departmentOptions}
            value={departmentOptions.find((option) => option.value === formData.department)}
            onChange={handleDepartmentChange}
            isSearchable={false}
            getOptionLabel={data => <span style={getOptionLabelStyle(data)}>{data.label}</span>}
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="to" className="text-gray-300 font-semibold float-left">To:</label><br></br>
        <div className="relative mt-2">
          <Select
            id='to'
            placeholder="Select People"
            styles={dropDownStyles}
            isMulti
            options={emails}
            value={emails.filter((option) => formData.to.includes(option.value))}
            onChange={handleEmailChange}
            menuPlacement="bottom"
            isSearchable
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="complaint" className="text-gray-300 font-semibold float-left">Complaint:</label>
        <textarea
          name="complaint"
          id='complaint'
          value={formData.complaint}
          onChange={handleInputChange}
          className="form-textarea w-full mt-2 pl-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-300"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:ring focus:ring-blue-300 w-full sm:w-auto"
      >
        Submit
      </button>
    </form>
  </div>
</div>

  );
}

export default ComplaintForm;
