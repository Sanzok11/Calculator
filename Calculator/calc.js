const cexp = document.querySelector(".currentExp");
const result = document.querySelectorAll(".output")[1];
const buttons = document.querySelectorAll("button");
const operator = document.querySelectorAll(".operator");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.innerHTML) {
            case "AC":
                cexp.innerHTML = '';
                result.innerHTML = '0';
                break;
            case "Del":
                cexp.innerHTML = cexp.innerHTML.substring(0, cexp.innerHTML.length - 1);
                break;
            case "%":
                cexp.innerHTML = cexp.innerHTML + '%';
                break;
            case "/":
                cexp.innerHTML = cexp.innerHTML + '/';
                break;
            case "7":
                cexp.innerHTML = cexp.innerHTML + '7';
                break;
            case "8":
                cexp.innerHTML = cexp.innerHTML + '8';
                break;
            case "9":
                cexp.innerHTML = cexp.innerHTML + '9';
                break;
            case "*":
                cexp.innerHTML = cexp.innerHTML + '*';
                break;
            case "4":
                cexp.innerHTML = cexp.innerHTML + '4';
                break;
            case "5":
                cexp.innerHTML = cexp.innerHTML + '5';
                break;
            case "6":
                cexp.innerHTML = cexp.innerHTML + '6';
                break;
            case "-":
                cexp.innerHTML = cexp.innerHTML + '-';
                break;
            case "1":
                cexp.innerHTML = cexp.innerHTML + '1';
                break;
            case "2":
                cexp.innerHTML = cexp.innerHTML + '2';
                break;
            case "3":
                cexp.innerHTML = cexp.innerHTML + '3';
                break;
            case "+":
                cexp.innerHTML = cexp.innerHTML + '+';
                break;
            case "0":
                cexp.innerHTML = cexp.innerHTML + '0';
                break;
            case ".":
                cexp.innerHTML = cexp.innerHTML + '.';
                break;
            case "=":
                result.innerHTML = eval(cexp.innerHTML);
            default:
                break;
        }
    })
})

