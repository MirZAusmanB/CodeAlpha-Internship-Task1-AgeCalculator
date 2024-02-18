let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
    if (!userinput.value) { 
        result.innerHTML = "Please enter a date.";
        return; 
    }

    let DOB = new Date(userinput.value);

    let birthDay = DOB.getDate();
    let birthMonth = DOB.getMonth() + 1;
    let birthYear = DOB.getFullYear();

    let currentDate = new Date();

    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    let day, month, year;

    year = currentYear - birthYear;

    if (currentMonth >= birthMonth) {
        month = currentMonth - birthMonth;
    } else {
        year--;
        month = (currentMonth + 12) - birthMonth;
    }

    if (currentDay >= birthDay) {
        day = currentDay - birthDay;
    } else {
        month--;
        day = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
    }

    if (currentMonth < birthMonth) {
        year--;
    }

    // Using template literals for string interpolation
    result.innerHTML = `You are <span>${year}</span> years, <span>${month}</span> months, and <span>${day}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
