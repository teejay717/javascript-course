
    let calculation = localStorage.getItem('calculation') || '';
    console.log(calculation);
    function updateCalculation(input) {
    calculation += input;
    console.log(calculation);
    localStorage.setItem('calculation', calculation);
    displayCalculations();
    }

    function displayCalculations() {
    document.querySelector('.calculations').innerHTML = calculation; 
    }