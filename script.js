let submitButton = document.getElementById("submitButton");
let displayResult = document.getElementById("result");
let ageField = document.getElementById("ageField");
let heightField = document.getElementById("heightField");
let weightField = document.getElementById("weightField");
let activityField = document.getElementById("activityDropdown");

submitButton.addEventListener('click', () => {
    let result = 0
    let sexRadioElems = document.getElementsByName("sexRadio");
    let maleRadio = sexRadioElems[0];
    let femaleRadio = sexRadioElems[1];
    let sex = null;
    let weight = weightField.value;     // kg 
    let height = heightField.value;     // cm
    let age = ageField.value;           // years
    let activityLevel = activityField.value;
    if (maleRadio.checked == true) {  
        sex = "Male";
    } else if (femaleRadio.checked == true) {
        sex = "Female";
    }
    if ((sex == "") || (age == "") || (weight == "") || (height == "") || (activityLevel == "")) {
        displayResult.innerHTML =
            `<p>Please fill out all fields.</p>`
            return;
    }
    // Added exercise multipliers to multiply RMR by
    let activityDict = {
        "sedentary": 1.2,
        "lightlyActive": 1.375,
        "moderatelyActive": 1.55,
        "veryActive": 1.725,
        "extremelyActive": 1.9
    } 
    if (sex == "Male") {
        result = Math.round((activityDict[activityLevel]) * ((10 * weight) + (6.25 * height) - (5 * age) + 5));
    } else if (sex == "Female") {
        result = Math.round((activityDict[activityLevel]) * ((10*weight) + (6.25*height) - (5*age) - 161));
    }
    const stringResult = result.toString();
    displayResult.innerHTML = 
        `<p>TDEE ➜ ${stringResult}</p>`
});
