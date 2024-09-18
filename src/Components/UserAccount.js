import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from "axios";

export default function UserAccount() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [totalPoints, setTotalPoints] = useState(0); // To hold the calculated points
  const [suggestions, setSuggestions] = useState(""); // To hold suggestions
  const [specialSuggestions, setSpecialSuggestions] = useState(""); // To hold special suggestions
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from localStorage

    if (token) {
      axios
        .get("http://localhost:3005/user", {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        })
        .then((response) => {
          setUser(response.data); // Set the user data
          calculateTotalPoints(response.data); // Calculate points when data is fetched
        })
        .catch((error) => {
          setError("Failed to fetch user data");
        });
    } else {
      setError("No token found, please log in");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEditClick = () => {
    navigate("/user-edit"); // Use navigate instead of history.push
  };

  const calculateBMI = (weight, height) => {
    if (!weight || !height) {
      return 0; // Return 0 if weight or height is not available
    }
    const bmi = weight / (height / 100) ** 2;
    return bmi.toFixed(2);
  };

  const bmi = user ? calculateBMI(user.weight, user.height) : 0; // Check if user is loaded

  const maxNormalWeight = (height) => {
    if (!height) return 0;
    const heightInMeters = height / 100;
    return (24.9 * heightInMeters * heightInMeters).toFixed(2);
  };

  const minNormalWeight = (height) => {
    if (!height) return 0;
    const heightInMeters = height / 100;
    return (18.5 * heightInMeters * heightInMeters).toFixed(2);
  };

  const calculateTotalPoints = (user) => {
    let points = 0;
    let answer1 = parseInt(user.answer1);
    let answer2 = parseInt(user.answer2);
    let answer3 = parseInt(user.answer3);
    let answer4 = parseInt(user.answer4);
    let answer5 = parseInt(user.answer5);
    let answer6 = parseInt(user.answer6);
    let answer7 = parseInt(user.answer7);
    let answer8 = parseInt(user.answer8);
    let answer9 = parseInt(user.answer9);
    let answer10 = parseInt(user.answer10);

    // Sum up the values of the answers (assuming they are numbers between 1-10)
    points += answer1 || 0;
    points += answer2 || 0;
    points += answer3 || 0;
    points += answer4 || 0;
    points += answer5 || 0;
    points += answer6 || 0;
    points += answer7 || 0;
    points += answer8 || 0;
    points += answer9 || 0;
    points += answer10 || 0;
  
    // Add/subtract points based on BMI
    if ((bmi >= 18.5 && bmi <= 24.9) || bmi == 0) {
      points = points;
    } else if (bmi < 18.5 || bmi > 25) {
      points += 2;
    }

    setTotalPoints(points);
    provideSuggestions(points); // Call to set suggestions based on total points
   provideSpecialSuggestions(points); // Call to set suggestions based on total points
  };

  const provideSpecialSuggestions = (points) => {
    let specialSuggestion = "";

       // Ensure user object exists and contains the required properties
       if (!user || typeof user !== "object" || 
        isNaN(parseInt(user.answer1)) || 
        isNaN(parseInt(user.answer2)) || 
        isNaN(parseInt(user.answer3)) || 
        isNaN(parseInt(user.answer4)) || 
        isNaN(parseInt(user.answer5)) || 
        isNaN(parseInt(user.answer6)) || 
        isNaN(parseInt(user.answer7)) || 
        isNaN(parseInt(user.answer8)) || 
        isNaN(parseInt(user.answer9)) || 
        isNaN(parseInt(user.answer10))) {
        
        console.error("Failed to fetch user data or user data is invalid.");
        setSpecialSuggestions("No special suggestion");
        return;
    }

    let answer1 = parseInt(user.answer1);
    let answer2 = parseInt(user.answer2);
    let answer3 = parseInt(user.answer3);
    let answer4 = parseInt(user.answer4);
    let answer5 = parseInt(user.answer5);
    let answer6 = parseInt(user.answer6);
    let answer7 = parseInt(user.answer7);
    let answer8 = parseInt(user.answer8);
    let answer9 = parseInt(user.answer9);
    let answer10 = parseInt(user.answer10);

   if (answer1 > 6 && answer2 > 6 && answer3 > 6 && answer4 > 6) {
      specialSuggestion = "Multiple high-risk factors detected. You should consult a doctor for further evaluation.";
  } else if (answer1 > 8 && answer3 > 8 && answer5 > 8 && answer7 > 8) {
      specialSuggestion = "You may need urgent medical attention. Please consult your healthcare provider immediately.";
  } else if (answer2 > 7 && answer4 > 7 && answer6 > 7) {
      specialSuggestion = "You are at risk for multiple conditions, including weight issues, diabetes, and lung problems.";
  } else if (answer1 > 8 && answer5 > 7 && answer9 > 7) {
      specialSuggestion = "There is concern about your physical health, diet, and allergies. A check-up is recommended.";
  } else if (answer3 > 7 && answer6 > 7 && answer10 > 7) {
      specialSuggestion = "Your heart, lungs, and recent medical tests indicate a need for further evaluation.";
  } else if (answer2 > 5 && answer7 > 7 && answer8 > 6) {
      specialSuggestion = "Weight, mental health, and family history suggest you should monitor these areas closely.";
  } else if (answer3 > 7 && answer4 > 7 && answer9 > 7) {
      specialSuggestion = "Your heart health, blood sugar, and allergies are concerning. Regular monitoring is advised.";
  } else if (answer6 > 8 && answer7 > 8 && answer10 > 8) {
      specialSuggestion = "Your breathing, mental health, and recent tests suggest you need to consult a specialist.";
  } else if (answer1 < 3 && answer5 > 6 && answer9 > 6) {
      specialSuggestion = "Diet and allergies need attention. Improving nutrition may help alleviate symptoms.";
  } else if (answer1 > 7 && answer2 > 7 && answer6 > 7) {
      specialSuggestion = "You may experience risks related to weight, physical health, and breathing. A health check-up is advised.";
  } else if (answer1 > 5 && answer3 > 5 && answer7 > 5) {
      specialSuggestion = "Physical health, heart health, and mental health are areas to focus on.";
  } else if (answer1 > 7 && answer8 > 6 && answer10 > 6) {
      specialSuggestion = "Your physical condition, family health history, and medical test results are a concern.";
  } else if (answer2 > 6 && answer5 > 6 && answer9 > 6) {
      specialSuggestion = "Weight, diet, and allergies suggest you may benefit from lifestyle changes.";
  } else if (answer1 > 8 && answer2 > 7 && answer3 > 7 && answer10 > 7) {
      specialSuggestion = "High risk across multiple areas. Immediate consultation with a doctor is recommended.";
  } else if (answer5 > 8 && answer6 > 8 && answer7 > 8) {
      specialSuggestion = "Your diet, lungs, and mental health suggest you need support from a healthcare professional.";
  } else if (answer1 > 9 && answer4 > 9 && answer10 > 9) {
      specialSuggestion = "Critical health risks detected in physical health, diabetes, and medical tests.";
  } else if (answer2 > 7 && answer5 > 8 && answer9 > 7) {
      specialSuggestion = "Weight and diet may be affecting your health significantly. Consult a nutritionist.";
  } else if (answer1 > 7 && answer6 > 7 && answer8 > 6) {
      specialSuggestion = "Physical condition and lung health are concerning. A medical evaluation is recommended.";
  } else if (answer3 > 8 && answer6 > 8 && answer9 > 8) {
      specialSuggestion = "Heart, lungs, and allergies are areas of concern. Further tests may be required.";
  } else if (answer2 > 7 && answer4 > 8 && answer7 > 6) {
      specialSuggestion = "Your weight, blood sugar, and mental health suggest that lifestyle changes may be necessary.";
  } else if (answer1 > 7 && answer2 > 7 && answer5 > 7 && answer6 > 7) {
      specialSuggestion = "You may need to consult a doctor due to concerns in physical condition, weight, diet, and breathing.";
  } else if (answer3 > 7 && answer4 > 7 && answer8 > 7) {
      specialSuggestion = "Your heart health, diabetes, and family history indicate a need for close monitoring.";
  } else if (answer2 > 8 && answer6 > 8 && answer7 > 8) {
      specialSuggestion = "Weight, lungs, and mental health may require attention. Consult a healthcare provider.";
  } else if (answer1 > 7 && answer9 > 9 && answer10 > 7) {
      specialSuggestion = "Physical condition, allergies, and recent medical tests are concerning. Seek medical advice.";
  } else if (answer1 > 8 && answer4 > 7 && answer9 > 7) {
      specialSuggestion = "You are experiencing physical discomfort, issues with blood sugar, and allergies.";
  } else if (answer2 > 7 && answer5 > 6 && answer8 > 6) {
      specialSuggestion = "Weight, diet, and family health history suggest a need for preventive care.";
  } else if (answer3 > 7 && answer7 > 7 && answer10 > 7) {
      specialSuggestion = "Heart health, mental health, and recent test results indicate the need for medical advice.";
  } else if (answer1 > 7 && answer4 > 7 && answer5 > 7 && answer9 > 7) {
      specialSuggestion = "Physical condition, diabetes, diet, and allergies suggest you need a comprehensive health review.";
  } else if (answer2 > 7 && answer3 > 7 && answer4 > 7 && answer8 > 7) {
      specialSuggestion = "Weight, heart health, diabetes, and family history suggest a high health risk.";
  } else {
      specialSuggestion = "No special suggestion";
  }

    setSpecialSuggestions(specialSuggestion);
  };

  const provideSuggestions = (points) => {
    let suggestion = "";

    if (points == 2 && (bmi < 18.5 || bmi > 25)) {
      suggestion =
        "You should change your diet and exercise regimen to maintain a healthy weight.";
    } else if (points <= 20) {
      suggestion =
        "Your health status seems stable. Continue maintaining a healthy lifestyle.";
    } else if (points <= 40) {
      suggestion =
        "Consider making small adjustments to your lifestyle. Focus on balanced nutrition and regular exercise.";
    } else if (points <= 60) {
      suggestion =
        "You may have moderate health risks. It's advisable to seek professional guidance and take preventive measures.";
    } else {
      suggestion =
        "You may be at severe health risk. Immediate action is recommended. Consult a healthcare professional for personalized advice.";
    }

    setSuggestions(suggestion);
  };

  // Recalculate points and suggestions whenever the user data changes
  useEffect(() => {
    if (user) {
      calculateTotalPoints(user);
    }
  }, [user]); // Watch for changes in user data

  if (error) {
    return (
      <div
        style={{
          color: "red",
          fontSize: "18px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div
        style={{
          color: "#333",
          fontSize: "18px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </div>
    );
  }

  const imageUrl = `http://localhost:3005/public/images/${user.image}`;

  return (
    <div style={styles.container}>
      {/* Row 1: Profile Image on the left and Edit Button on the right */}
      <div style={styles.row}>
        <div style={styles.imageColumn}>
          <img
            src={imageUrl}
            alt={`${user.name}'s Profile`}
            style={styles.profileImage}
          />
        </div>
        <div style={styles.editButtonColumn}>
          <button style={styles.editButton} onClick={handleEditClick}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Row 2: Three columns (Left: Personal Info, Middle: Bio Persona Report, Right: Points and Suggestions) */}
      <div style={styles.row}>
        {/* Left Column: Personal Info */}
        <div style={styles.leftColumn}>
          <h1 style={styles.userName}>{user.name}</h1>
          <p style={styles.userInfo}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={styles.userInfo}>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p style={styles.userInfo}>
            <strong>Age:</strong> {user.age}
          </p>
          <p style={styles.userInfo}>
            <strong>Gender:</strong> {user.gender}
          </p>
          {user.marital_status && (
            <p style={styles.userInfo}>
              <strong>Marital Status:</strong> {user.marital_status}
            </p>
          )}
          {user.blood_group && (
            <p style={styles.userInfo}>
              <strong>Blood Group: </strong> {user.blood_group}
            </p>
          )}
          {user.religion && (
            <p style={styles.userInfo}>
              <strong>Religion: </strong> {user.religion}
            </p>
          )}
          {user.occupation && (
            <p style={styles.userInfo}>
              <strong>Occupation: </strong> {user.occupation}
            </p>
          )}
          {user.nationality && (
            <p style={styles.userInfo}>
              <strong>Nationality: </strong> {user.nationality}
            </p>
          )}
          {user.division && (
            <p style={styles.userInfo}>
              <strong>Division: </strong> {user.division}
            </p>
          )}
          {user.district && (
            <p style={styles.userInfo}>
              <strong>District: </strong> {user.district}
            </p>
          )}
          {user.address && (
            <p style={styles.userInfo}>
              <strong>Address: </strong> {user.address}
            </p>
          )}
        </div>

        {/* Middle Column: Bio Persona Report */}
        <div style={styles.middleColumn}>
          <h4>{user.name}'s Bio Persona Report:</h4>
          <div className="row">
            <div className="col-md-6">
              <p style={styles.userInfo}>
                <strong>Height:</strong> {user.height} cm
              </p>
            </div>
            <div className="col-md-6">
              <p style={styles.userInfo}>
                <strong>Weight:</strong> {user.weight} kg
              </p>
            </div>
          </div>
          {user.height && user.weight && (
            <p style={styles.userInfo}>
              <strong>BMI:</strong> {bmi}
              &nbsp;&nbsp;
              {bmi == 0 ? (
                <span> - </span>
              ) : bmi < 16.9 ? (
                <span style={{ color: "orange", fontFamily: "Roboto" }}>
                  - Severely Underweight
                </span>
              ) : bmi < 18.4 ? (
                <span style={{ color: "orange", fontFamily: "Roboto" }}>
                  - Underweight
                </span>
              ) : bmi < 24.9 ? (
                <span style={{ color: "green", fontFamily: "Roboto" }}>
                  - Normal weight
                </span>
              ) : bmi < 29.9 ? (
                <span style={{ color: "red", fontFamily: "Roboto" }}>
                  - Overweight
                </span>
              ) : bmi < 30 ? (
                <span style={{ color: "red", fontFamily: "Roboto" }}>
                  - Overweight
                </span>
              ) : (
                <span style={{ color: "red", fontFamily: "Roboto" }}>
                  - Severely Obese
                </span>
              )}
              &nbsp;&nbsp;
              <span style={{ fontSize: "13px" }}>
                [Normal: {minNormalWeight(user.height)} -{" "}
                {maxNormalWeight(user.height)} kg]
              </span>
            </p>
          )}
          {/* Additional persona report sections */}
          <p>
            <strong>Bio Persona Report:</strong>
          </p>
          {user.answer1 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong> Physical Condition:</strong> How frequently have you experienced pain, discomfort, or weakness in your body recently?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer1 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer2 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong> Weight and Height:</strong> How significant are the changes in your weight recently?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer2 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer3 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong> Heart Health:</strong> How would you rate your risk for heart-related issues or high blood pressure?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer3 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer4 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong> Diabetes:</strong> How would you rate your blood sugar management?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer4 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer5 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong> Diet and Nutrition:</strong> How would you rate your diet in terms of health and balance?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer5 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer6 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong>Breathing and Lungs:</strong> How often do you experience breathing or lung-related problems?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer6 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer7 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong>Sleep and Mental Health:</strong> How well do you sleep, and how often do you feel stressed or anxious?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer7 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer8 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong>Family Health History:</strong> How many of your immediate family members have conditions like diabetes, heart disease, or chronic illnesses?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer8 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer9 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong>Allergies and Reactions:</strong> How would you rate the severity of your allergies to medications, food, or other substances?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer9 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}

          {user.answer10 && (
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
              <strong>Recent Medical Tests:</strong> How concerning were the results of your recent health check-ups or medical tests?{" "}
              <p style={styles.userInfoans}>
                {" "}
                <strong>Your answer:</strong>{" "}
                <div>
                  {[...Array(10)].map((_, i) => (
                    <label key={i}>
                      <input
                        style={styles.radioButton}
                        type="radio"
                        value={i + 1}
                        checked={user.answer10 === String(i + 1)}
                      />
                      {i + 1}
                    </label>
                  ))}
                </div>
              </p>
            </p>
          )}
        </div>

        <div style={styles.rightColumn}>
          {totalPoints != 0 && (
            <p style={styles.userInfo}>
              <strong>Your Total Points: {totalPoints}</strong>
              <p>
                {totalPoints > 80 ? (
                  <span style={{ color: "#b60b0b", fontFamily: "Roboto" }}>
                    - Severe Health Risk
                  </span>
                ) : totalPoints > 65 ? (
                  <span style={{ color: "#da2323", fontFamily: "Roboto" }}>
                    - High Health Risk
                  </span>
                ) : totalPoints > 50 ? (
                  <span style={{ color: "#de6715", fontFamily: "Roboto" }}>
                    - Moderate Health Risk
                  </span>
                ) : totalPoints > 30 ? (
                  <span style={{ color: "#ee9f25", fontFamily: "Roboto" }}>
                    - Mild Health Risk
                  </span>
                ) : totalPoints > 10 ? (
                  <span style={{ color: "#c2e150", fontFamily: "Roboto" }}>
                    - Good Health
                  </span>
                ) : (
                  <span style={{ color: "green", fontFamily: "Roboto" }}>
                    - Excellent Health
                  </span>
                )}
              </p>
            </p>
          )}
          {totalPoints != 0 && (
            <p style={styles.userInfo}>
              <strong>Special Suggestions: </strong>
              {specialSuggestions}
            </p>
          )}

          {totalPoints != 0 && (
            <p style={styles.userInfo}>
              <strong>Suggestions based on your total points: </strong>
              <p>
                {totalPoints > 15 ? (
                  <span style={{ color: "red", fontFamily: "Roboto" }}>
                    {suggestions}
                  </span>
                ) : totalPoints > 10 ? (
                  <span style={{ color: "orange", fontFamily: "Roboto" }}>
                    {suggestions}
                  </span>
                ) : (
                  <span style={{ color: "green", fontFamily: "Roboto" }}>
                    {suggestions}
                  </span>
                )}
              </p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
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
    margin: "0 8px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
  },
  imageColumn: {
    flex: "1",
    textAlign: "left",
  },
  editButtonColumn: {
    flex: "1",
    textAlign: "right",
    marginRight: "60px",
  },
  editButton: {
    padding: "10px 20px",
    backgroundColor: "#06B4CB",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    fontFamily: "Roboto",
    textAlign: "center",
    width: "200px",
    marginTop: "100px",
  },
  leftColumn: {
    flex: "1",
    padding: "20px",
  },
  middleColumn: {
    flex: "1",
    padding: "20px",
  },
  rightColumn: {
    flex: "1",
    padding: "20px",
  },
  profileImage: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  profileInfo: {
    textAlign: "left",
  },
  userName: {
    fontFamily: "Roboto",
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
    backgroundColor: "#DDFBFF",
    borderRadius: "5px",
    border: "2px solid #06B4CB",
    padding: "10px",
  },
  userInfo: {
    fontFamily: "Roboto",
    fontSize: "16px",
    marginBottom: "10px",
    color: "#333",
    backgroundColor: "#DDFBFF",
    borderRadius: "5px",
    border: "2px solid #06B4CB",
    padding: "10px",
  },
  userInfoans: {
    fontFamily: "Roboto",
    fontSize: "16px",
    marginBottom: "10px",
    color: "#333",
    backgroundColor: "#DDFBFF",
    borderRadius: "5px",
    border: "2px solid #06B4CB",
    padding: "5px",
  },
};
