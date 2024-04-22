document.getElementById('bmiForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);
            var bmi = weight / (height * height);
            var resultText;
            if (isNaN(bmi)) {
                resultText = "Please enter valid weight and height.";
            } else {
                resultText = "Your BMI is: " + bmi.toFixed(2);
            }
            document.getElementById('result').textContent = resultText;
        });