import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

export default function UserEdit() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    marital_status: "",
    blood_group: "",
    religion: "",
    occupation: "",
    nationality: "",
    division: "",
    district: "",
    address: "",
    height: "",
    weight: "",
    image: "", // To hold the existing image URL
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
    answer10: "",
  });
  const [image, setImage] = useState(null); // To store the uploaded image
  const [imagePreview, setImagePreview] = useState(null); // To show the image preview
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // To show loading state
  const [updating, setUpdating] = useState(false); // To indicate if update is in progress
  const [heightFeetInch, setHeightFeetInch] = useState(""); // For height conversion
  const [weightLb, setWeightLb] = useState(""); // For weight conversion
  const [showQuestion, setShowQuestion] = useState(false); // To show the question form
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:3005/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data); // Store existing user data, including image
          setImagePreview(response.data.image); // Set the current image as the preview
          setLoading(false); // Set loading to false once data is fetched
          // Check if any of the answer fields have values, and if so, show the question form
          const answers = [
            response.data.answer1,
            response.data.answer2,
            response.data.answer3,
            response.data.answer4,
            response.data.answer5,
            response.data.answer6,
            response.data.answer7,
            response.data.answer8,
            response.data.answer9,
            response.data.answer10,
          ];

          if (answers.some((answer) => answer !== "")) {
            setShowQuestion(true);
          }
        })
        .catch((error) => {
          setError("Failed to fetch user data");
          setLoading(false);
        });
    } else {
      setError("No token found, please log in");
      setLoading(false);
    }
  }, []);

  const handleCheckboxChange = (e) => {
    setShowQuestion(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Convert height from cm to feet and inches
    if (name === "height") {
      convertHeight(value);
    }

    // Convert weight from kg to pounds
    if (name === "weight") {
      convertWeight(value);
    }
  };

  const convertHeight = (heightInCm) => {
    if (!heightInCm || isNaN(heightInCm)) return;

    const totalInches = (heightInCm / 2.54).toFixed(2);
    const feet = Math.floor(totalInches / 12);
    const inches = (totalInches % 12).toFixed(2);

    setHeightFeetInch(`${feet}ft ${inches}in`);
  };

  const convertWeight = (weightInKg) => {
    if (!weightInKg || isNaN(weightInKg)) return;

    const weightInLb = (weightInKg * 2.20462).toFixed(2);
    setWeightLb(`${weightInLb} lb`);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Show the new image preview
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!user.name || !user.email) {
      setError("Name and Email are required");
      return;
    }

    setUpdating(true); // Start update process

    // Prepare form data
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("age", user.age);
    formData.append("gender", user.gender);
    formData.append("marital_status", user.marital_status);
    formData.append("blood_group", user.blood_group);
    formData.append("religion", user.religion);
    formData.append("occupation", user.occupation);
    formData.append("nationality", user.nationality);
    formData.append("division", user.division);
    formData.append("district", user.district);
    formData.append("address", user.address);
    formData.append("height", user.height);
    formData.append("weight", user.weight);
    formData.append("answer1", user.answer1);
    formData.append("answer2", user.answer2);
    formData.append("answer3", user.answer3);
    formData.append("answer4", user.answer4);
    formData.append("answer5", user.answer5);
    formData.append("answer6", user.answer6);
    formData.append("answer7", user.answer7);
    formData.append("answer8", user.answer8);
    formData.append("answer9", user.answer9);
    formData.append("answer10", user.answer10);

    if (image) {
      formData.append("image", image); // Append the new profile image if one is uploaded
    } else {
      formData.append("keepImage", true); // Let the backend know to keep the previous image
    }

    axios
      .post("http://localhost:3005/user/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setUpdating(false);
        navigate("/user-account");
      })
      .catch((err) => {
        setError("Failed to update user data");
        setUpdating(false); // Stop updating state
      });
  };

  if (loading) {
    return (
      <div
        className="text-center mt-5"
        style={{ color: "#333", fontSize: "18px" }}
      >
        Loading...
      </div>
    );
  }

  const occupations = [
    "Accountant",
    "Agricultural laborer",
    "Architect",
    "Armed forces personnel",
    "Banker",
    "Carpenter",
    "Civil servant",
    "Construction worker",
    "Customer service representative",
    "Delivery personnel",
    "Digital marketer",
    "Doctor",
    "Domestic worker",
    "Driver",
    "Engineer",
    "Farmer",
    "Factory worker",
    "Fisher",
    "Freelancer",
    "Garment worker",
    "Goldsmith",
    "Handloom weaver",
    "Hospitality worker",
    "House wife",
    "IT professional",
    "Journalist",
    "Lawyer",
    "Livestock breeder",
    "Local government official",
    "Machinist",
    "Nurse",
    "Pharmacist",
    "Plumber",
    "Police officer",
    "Port worker",
    "Potter",
    "Religious leader",
    "Retail worker",
    "Shipbuilder",
    "Silversmith",
    "Small business owner",
    "Small-scale trader",
    "Student",
    "Street vendor",
    "Tailor",
    "Technician",
    "Waste collector",
  ];

  const nationalities = [
    "Afghan",
    "Albanian",
    "Algerian",
    "American",
    "Argentinian",
    "Australian",
    "Austrian",
    "Bangladeshi",
    "Belgian",
    "Brazilian",
    "British",
    "Canadian",
    "Chilean",
    "Chinese",
    "Colombian",
    "Cuban",
    "Danish",
    "Dutch",
    "Egyptian",
    "Ethiopian",
    "Finnish",
    "French",
    "German",
    "Ghanaian",
    "Greek",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Israeli",
    "Italian",
    "Japanese",
    "Kenyan",
    "Korean",
    "Kuwaiti",
    "Lebanese",
    "Malaysian",
    "Mexican",
    "Moroccan",
    "Nepalese",
    "New Zealander",
    "Nigerian",
    "Norwegian",
    "Pakistani",
    "Palestinian",
    "Peruvian",
    "Philippine",
    "Polish",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Saudi Arabian",
    "Singaporean",
    "South African",
    "Spanish",
    "Sri Lankan",
    "Swedish",
    "Swiss",
    "Syrian",
    "Thai",
    "Turkish",
    "Ugandan",
    "Ukrainian",
    "Uruguayan",
    "Venezuelan",
    "Vietnamese",
    "Zambian",
    "Zimbabwean",
  ];

  const bangladeshDivisions = [
    "Barishal",
    "Chattogram",
    "Dhaka",
    "Khulna",
    "Mymensingh",
    "Rajshahi",
    "Rangpur",
    "Sylhet",
  ];

  const districtsInBangladesh = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chapai Nawabganj",
    "Chattogram",
    "Chuadanga",
    "Comilla",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokati",
    "Jhenidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-4">Edit Profile</h1>
        <button className="btn mb-4">
          <MdCancel
            size={35}
            onClick={() => navigate("/user-account")}
            style={{ color: "#A4449D" }}
          />
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="form-horizontal mx-auto">
        {imagePreview && (
          <div className="text-center mb-4">
            <img
              src={imagePreview}
              alt="Profile"
              className="rounded-circle img-fluid"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
        )}

        <div>
          <label>Profile Image:</label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            style={customStyles.inputFieldImage}
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div style={customStyles.inputContainer}>
              <label>
                Name:<sup style={{ color: "red", fontSize: "14px" }}>*</sup>{" "}
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                style={customStyles.inputField}
              />
            </div>

            <div style={customStyles.inputContainer}>
              <label>
                Email:<sup style={{ color: "red", fontSize: "14px" }}>*</sup>
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                style={customStyles.inputField}
              />
            </div>

            <div style={customStyles.inputContainer}>
              <label>
                Phone:<sup style={{ color: "red", fontSize: "14px" }}>*</sup>
              </label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                style={customStyles.inputField}
              />
            </div>

            <div style={customStyles.inputContainer}>
              <label>
                Age:<sup style={{ color: "red", fontSize: "14px" }}>*</sup>
              </label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                style={customStyles.inputField}
              />
            </div>

            <div style={customStyles.inputContainer}>
              <label>
                Gender:<sup style={{ color: "red", fontSize: "14px" }}>*</sup>
              </label>
              <select
                className="form-control"
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                required
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>Marital Status:</label>
              <select
                className="form-control"
                name="marital_status"
                value={user.marital_status}
                onChange={handleInputChange}
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>Blood Group:</label>
              <select
                className="form-control"
                name="blood_group"
                value={user.blood_group}
                onChange={handleInputChange}
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                <option value="A+">A+</option>
                <option value="A−">A−</option>
                <option value="B+">B+</option>
                <option value="B−">B−</option>
                <option value="AB+">AB+</option>
                <option value="AB−">AB−</option>
                <option value="O+">O+</option>
                <option value="O−">O−</option>
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>Religion:</label>
              <select
                className="form-control"
                name="religion"
                value={user.religion}
                onChange={handleInputChange}
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                <option value="Islam">Islam</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Christianity">Christianity</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Judaism">Judaism</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>Occupation:</label>
              <select
                className="form-control"
                name="occupation"
                value={user.occupation}
                onChange={handleInputChange}
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                {occupations.map((occupation, index) => (
                  <option key={index} value={occupation}>
                    {occupation}
                  </option>
                ))}
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>Nationality:</label>
              <select
                className="form-control"
                name="nationality"
                value={user.nationality}
                onChange={handleInputChange}
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                {nationalities.map((nationality, index) => (
                  <option key={index} value={nationality}>
                    {nationality}
                  </option>
                ))}
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>Division:</label>
              <select
                className="form-control"
                name="division"
                value={user.division}
                onChange={handleInputChange}
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                {bangladeshDivisions.map((division, index) => (
                  <option key={index} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>District:</label>
              <select
                className="form-control"
                name="district"
                value={user.district}
                onChange={handleInputChange}
                style={customStyles.inputField}
              >
                <option value="">Select answer</option>
                {districtsInBangladesh.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div style={customStyles.inputContainer}>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleInputChange}
                style={customStyles.inputField}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div style={customStyles.inputContainer}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label>Height (cm): </label>
                    {heightFeetInch && (
                      <div
                        className="text-muted"
                        style={{ marginLeft: "10px" }}
                      >
                        ({heightFeetInch}){" "}
                        {/* Display height in feet and inches */}
                      </div>
                    )}
                  </div>
                  <input
                    type="number"
                    name="height"
                    value={user.height}
                    onChange={handleInputChange}
                    required
                    style={customStyles.inputField}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div style={customStyles.inputContainer}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label>Weight (kg):</label>
                    {weightLb && (
                      <div
                        className="text-muted"
                        style={{ marginLeft: "10px" }}
                      >
                        ({weightLb}) {/* Display weight in pounds */}
                      </div>
                    )}
                  </div>
                  <input
                    type="number"
                    name="weight"
                    value={user.weight}
                    required
                    onChange={handleInputChange}
                    style={customStyles.inputField}
                  />
                </div>
              </div>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={showQuestion}
                />{" "}
                I want to add my bio history
              </label>
            </div>

            {showQuestion && (
              <div>
                {/* question section start------------------------------------------------------------- */}

                {/* Question 1: Physical Condition --------------------------------- */}
                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Physical Condition:</strong> How frequently have you experienced pain, discomfort, or weakness in your body recently?(1-No pain - 10-Constant pain)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer1"
                          value={i + 1}
                          checked={user.answer1 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 2: Weight and Height --------------------------------- */}
                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Weight and Height:</strong> How significant are the changes in your weight recently? (1-No change - 10-Major change)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer2"
                          value={i + 1}
                          checked={user.answer2 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 3: Heart Health --------------------------------- */}
                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Heart Health:</strong> How would you rate your risk for heart-related issues or high blood pressure? (1-No risk - 10-High risk)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer3"
                          value={i + 1}
                          checked={user.answer3 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 4: --------------------------------- */}
                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Diabetes:</strong> How would you rate your blood sugar management? (1-No diabetes - 10-Diabetes)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer4"
                          value={i + 1}
                          checked={user.answer4 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 5: Diet and Nutrition - */}

                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Diet and Nutrition:</strong> How would you rate your diet in terms of health and balance? (1-No change - 10-Significant change)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer5"
                          value={i + 1}
                          checked={user.answer5 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 6 - */}
                <div>
                  <label>
                    <strong>Breathing and Lungs:</strong> How often do you experience breathing or lung-related problems? (1-No problems - 10-Constant problems)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer6"
                          value={i + 1}
                          checked={user.answer6 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 7 --------------------------------- */}

                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Sleep and Mental Health:</strong> How well do you sleep, and how often do you feel stressed or anxious? (1-No problems - 10-Constant problems)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer7"
                          value={i + 1}
                          checked={user.answer7 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Question 8 --------------------------------- */}
                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Family Health History:</strong> How many of your immediate family members have conditions like diabetes, heart disease, or chronic illnesses? (1-No family members - 10-Many family members)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer8"
                          value={i + 1}
                          checked={user.answer8 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Question 9 --------------------------------- */}
                <div style={customStyles.inputContainer}>
                  <label>
                    <strong>Allergies and Reactions:</strong> How would you rate the severity of your allergies to medications, food, or other substances? (1-No allergies - 10-Severe allergies)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer9"
                          value={i + 1}
                          checked={user.answer9 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Question 10 --------------------------------- */}
                <div>
                  <label>
                    <strong>Recent Medical Tests: </strong> How concerning were the results of your recent health check-ups or medical tests?  (1-No concerns - 10-Severe concerns)
                  </label>
                  <div style={customStyles.radioGroup}>
                    {[...Array(10)].map((_, i) => (
                      <label key={i}>
                        <input
                        style={customStyles.radioButton}
                          type="radio"
                          name="answer10"
                          value={i + 1}
                          checked={user.answer10 === String(i + 1)}
                          onChange={handleInputChange}
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* question section end------------------------------------------------------------- */}
            <button
              type="submit"
              className=""
              style={customStyles.button}
              disabled={updating}
            >
              {updating ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// Custom inline styles for the form
const customStyles = {
  inputFieldImage: {
    backgroundColor: "#DDFBFF",
    border: "1px solid #06B4CB",
    borderRadius: "5px",
    padding: "8px",
    display: "flex",
    marginBottom: "15px",
    width: "100%",
  },
  radioGroup: {
    alignItems: "center",
    marginBottom: "15px",
    backgroundColor: "#DDFBFF",
    border: "1px solid #06B4CB",
    borderRadius: "5px",
    padding: "8px",
    
  },
  radioButton: {
    margin: "0 15px",
    
  },
  inputField: {
    backgroundColor: "#DDFBFF",
    border: "1px solid #06B4CB",
    borderRadius: "5px",
    padding: "8px",
    display: "flex",
    marginBottom: "15px",
    width: "95%",
    marginTop: "2px",
  },
  button: {
    backgroundColor: "#06B4CB",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px",
    cursor: "pointer",
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
};
