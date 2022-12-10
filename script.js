function ValidaCPF() {
    var CPF = document.getElementById("CPF").value;
    var Soma = 0;
    var Resto = 0;

    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(CPF.substring(i - 1, i)) * (11 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }

    if (Resto != parseInt(CPF.substring(9, 10))) {
        alert("CPF Invalido!!");
    }

    Soma = 0;

    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(CPF.substring(i - 1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }

    if (Resto != parseInt(CPF.substring(10, 11))) {
        alert("CPF Invalido!!");
    }

    alert("CPF Valido!!");
}