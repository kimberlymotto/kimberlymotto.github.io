const sexArray = [];
const jobArray = [];
const salaryArray = [];
const ageArray = [];

function addData() {
    const sex = parseInt(document.getElementById('sex').value);
    const job = parseInt(document.getElementById('job').value);
    const salary = parseInt(document.getElementById('salary').value);
    const age = parseInt(document.getElementById('age').value);

    sexArray.push(sex);
    jobArray.push(job);
    salaryArray.push(salary);
    ageArray.push(age);

    // Clear the form
    document.getElementById('surveyForm').reset();
}

function displayResults(option) {
    let result = '';
    switch(option) {
        case 1:
            result = calculatePercentage(1, 2);
            break;
        case 2:
            result = calculatePercentage(2, 2);
            break;
        case 3:
            result = calculateAverageSalary(1);
            break;
        case 4:
            result = calculateAverageSalary(2);
            break;
        case 5:
            result = calculateAverageAge(1);
            break;
        case 6:
            result = calculateAverageAge(2);
            break;
        case 7:
            result = displayAllData();
            break;
    }
    document.getElementById('results').innerHTML = result;
}

function calculatePercentage(sex, job) {
    let count = 0;
    let total = 0;
    for (let i = 0; i < sexArray.length; i++) {
        if (sexArray[i] === sex && jobArray[i] === job) {
            count++;
        }
        if (sexArray[i] === sex) {
            total++;
        }
    }
    return total > 0 ? `Porcentaje: ${(count / total * 100).toFixed(2)}%` : 'No hay datos suficientes.';
}

function calculateAverageSalary(sex) {
    let totalSalary = 0;
    let count = 0;
    for (let i = 0; i < sexArray.length; i++) {
        if (sexArray[i] === sex && jobArray[i] === 1) {
            totalSalary += salaryArray[i];
            count++;
        }
    }
    return count > 0 ? `Sueldo promedio: ${(totalSalary / count).toFixed(2)}` : 'No hay datos suficientes.';
}

function calculateAverageAge(sex) {
    let totalAge = 0;
    let count = 0;
    for (let i = 0; i < sexArray.length; i++) {
        if (sexArray[i] === sex) {
            totalAge += ageArray[i];
            count++;
        }
    }
    return count > 0 ? `Edad promedio: ${(totalAge / count).toFixed(2)}` : 'No hay datos suficientes.';
}

function displayAllData() {
    let table = '<table><thead><tr><th>Sexo</th><th>Trabajo</th><th>Sueldo</th><th>Edad</th></tr></thead><tbody>';
    for (let i = 0; i < sexArray.length; i++) {
        table += `<tr><td>${sexArray[i] === 1 ? 'Masculino' : 'Femenino'}</td>
                  <td>${jobArray[i] === 1 ? 'Sí' : 'No'}</td>
                  <td>${salaryArray[i]}</td>
                  <td>${ageArray[i]}</td></tr>`;
    }
    table += '</tbody></table>';
    return table;
}