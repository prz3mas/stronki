function isEmpty(str) {
    return (!str || str.length === 0);
}

function validate(form) {
    if (isEmpty(form.elements["f_imie"].value)) {
        alert("Podaj imię!");
        return false;
    } else {
        return true;
    }
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}

function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        alert(msg);
        return false;
    } else return true;
}

function validate(form) {
    checkStringAndFocus(form.elements["f_imie"], "złe imie");
    checkString(form.elements["f_nazwisko"].value, "złe nazwisko");
    checkEmail(form.elements["email"].value, "zły email");
    checkStringAndFocus(form.elements["f_ulica"], "zła ulica");
    checkString(form.elements["f_miasto"].value, "zła ulica");
}

function checkEmail(str) {
    if (isWhiteSpace(str)) alert("Podaj właściwy e-mail");
    else {
        at = str.indexOf("@");
        if (at < 1) {
            alert("Nieprawidłowy e-mail");
            return false;
        } else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") l = i;
            }
            if ((l < (at + 2)) || (l == str.length - 1)) alert("Nieprawidłowy e-mail");
        }
        return true;
    }
}

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else return true;
}

function checkEmailRegEx(str) {
    var email = /[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
    if (email.test(str)) return true; else alert("Podaj właściwy e-mail");
}

function checkZIPCodeRegEx(e) {
    var ZIPcode = /^[0-9]{2}-[0-9]{3}$/;
    if (ZIPcode.test(e.value)) {
        document.getElementById("kod").innerHTML = "OK";
        document.getElementById("kod").className = "green";
        return true;
    } else {
        document.getElementById("kod").innerHTML = "Źle";

        document.getElementById("kod").className = "red";
        return false;
    }
}