<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="calc">
        <input type="text" id="txt" name="txt">
        <span onclick="document.calc.txt.value += '1'">1</span>
        <span onclick="document.calc.txt.value += '2'">2</span>
        <span onclick="document.calc.txt.value += '3'">3</span>
        <span onclick="document.calc.txt.value += '4'">4</span>
        <span onclick="document.calc.txt.value += '5'">5</span>
        <span onclick="document.calc.txt.value += '6'">6</span>
        <span onclick="document.calc.txt.value += '7'">7</span>
        <span onclick="document.calc.txt.value += '8'">8</span>
        <span onclick="document.calc.txt.value += '9'">9</span>
        <span onclick="document.calc.txt.value += '0'">0</span>
        <span onclick="document.calc.txt.value += '00'">00</span>
        <span onclick="document.calc.txt.value += '.'">.</span>
        <span onclick="document.calc.txt.value += '+'">+</span>
        <span onclick="document.calc.txt.value += '-'">-</span>
        <span onclick="document.calc.txt.value += '*'">x</span>
        <span onclick="document.calc.txt.value += '/'">/</span>
        <span onclick="document.calc.txt.value = eval(document.calc.txt.value)">=</span>

    </form>
</body>
</html>
