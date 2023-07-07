var fcmax = 0;

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

        fcmax = 220 - age;

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

function calcularZonas() {    
    var frecuenciaReposo = parseInt(document.getElementById("FCB").value);

    var zona60 = calcularFCE(fcmax, frecuenciaReposo, 0.6);
    var zona70 = calcularFCE(fcmax, frecuenciaReposo, 0.7);
    var zona80 = calcularFCE(fcmax, frecuenciaReposo, 0.8);
    var zona90 = calcularFCE(fcmax, frecuenciaReposo, 0.9);
    var zona100 = calcularFCE(fcmax, frecuenciaReposo, 1.0);

    document.getElementById("zona60").innerHTML = zona60;
    document.getElementById("zona70").innerHTML = zona70;
    document.getElementById("zona80").innerHTML = zona80;
    document.getElementById("zona90").innerHTML = zona90;
    document.getElementById("zona100").innerHTML = zona100;
}

function calcularFCE(frecuenciaMaxima, frecuenciaReposo, intensidad) {
    return Math.round((frecuenciaMaxima - frecuenciaReposo) * intensidad + frecuenciaReposo);
  }