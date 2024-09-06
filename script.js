document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    const rgbValue = document.getElementById('rgbValue');
    const colorPicker = document.getElementById('colorPicker');

    function updateColor() {
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor;
        rgbValue.textContent = rgbColor;
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
        colorPicker.value = hexColor;
    }

    function updateRangeFromInput() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const hexColor = colorPicker.value;
        const red = parseInt(hexColor.substr(1, 2), 16);
        const green = parseInt(hexColor.substr(3, 2), 16);
        const blue = parseInt(hexColor.substr(5, 2), 16);
        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);
    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);
    colorPicker.addEventListener('input', updateFromColorPicker);
    updateColor();
});
