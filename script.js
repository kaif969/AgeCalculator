function calculateDifference() {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365);
    const diffMonths = Math.floor((diffDays % 365) / 30);
    const diffDaysOnly = diffDays - (diffYears * 365) - (diffMonths * 30);
    document.getElementById("result").innerHTML = `The difference between the dates is ${diffYears} years, ${diffMonths} months, and ${diffDaysOnly} days.`;
  }
  
  