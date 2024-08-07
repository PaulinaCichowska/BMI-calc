const form = document.querySelector("#formId");

function submitForm(event) {
    event.preventDefault();
    const weight = form.elements.weight.value
    const heightCm = form.elements.height.value

    heightM = heightCm / 100;

    BMI = weight / Math.pow(heightM, 2)
    console.log(BMI)

    const resultHtml = document.querySelector(".result")
    resultHtml.textContent = BMI

}


form.addEventListener('submit', submitForm);