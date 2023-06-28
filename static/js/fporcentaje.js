function FcmaxCalcyzn(){
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if( userinput==null || userinput == ""){
        document.getElementById("message").innerHTML = "**Escribe una fecha correcta!";
        return false
    }
    else{
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();

        var age = Math.abs(year - 1970);

        var fcmax = 220 - age;

        return document.getElementById("resultado").innerHTML = "Tu frecuencia cárdica máxima es: " + fcmax;

    }
}

function fcporcentaje(){
    var userinput = document.getElementById("FCB").value;
    var fcb = new Number(userinput);
    if (userinput == null || userinput == ""){
        document.getElementById("message").innerHTML = "**Escribe la frecuencia mínima";
        return false;
    }
    else{
        var sesentaPorciento = ((fcmax - fcb) * 0.6) + fcb;
        var fcmax = 320 - age;
        return document.getElementById("resultado").innerHTML = "60%" + sesentaPorciento;
    }
}