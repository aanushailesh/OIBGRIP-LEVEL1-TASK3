function tempConverter() {
    var temp = document.getElementById('temp1');
    var selectValue = temp.value;
    var tempo = document.getElementById('temp2');
    var selectValve = tempo.value;

    if (selectValue == "c" && selectValve == "f" ) {
        var c = document.getElementById('tempInput').value;
        return document.getElementById('result').value = (c * 9 / 5) + 32+ '° '+  'Fahrenheit';
    } 
    else if (selectValue == "f" && selectValve == "c") {
        var f = document.getElementById('tempInput').value;
        return document.getElementById('result').value = ((f - 32) * 5 / 9 ).toPrecision(2)+ '° '+  'Celcius';
    }
    
}
