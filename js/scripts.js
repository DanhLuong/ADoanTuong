//Temperature Convert
function convertFC(){
    let tempUnit = document.getElementById("tempConvert").value;
    let input = document.getElementById("tempinput").value;
    let output;
    if (isNaN(input)) {
      const text = "Input not valid. Input must be number";
      document.getElementById("validate").innerHTML = text;
    } else {
        if(tempUnit==="FtoC") {
            output=Math.round((input-32)*5/9*100)/100;
        } else if(tempUnit==="CtoF") {
            output=Math.round(((input*9/5)+32)*100)/100;
        }
        document.getElementById("validate").innerHTML ="";
        document.getElementById("tempoutput").value=output;
        document.getElementById("tempoutput").disabled=true;
        document.getElementById("tempConvertButton").style.border="solid 1px black";
    }
}

function tempChangeTracking() {
    document.getElementById("tempConvertButton").focus();
    document.getElementById("tempConvertButton").style.border="solid 3px green";
}

function tempSaveRecord() {
    let input = document.getElementById("tempinput").value;
    let convert = document.getElementById("tempConvert").value;
    let tempArray=[];
    if(window.localStorage.getItem("tempData")!==null&&window.localStorage.getItem("tempData")!=="") {
        tempArray=JSON.parse(window.localStorage.getItem("tempData"));
    }
    tempArray.push([input,convert]);
    window.localStorage.setItem("tempData",JSON.stringify(tempArray));
    renderTempRecord(tempArray);
}

function tempDeleteRecord() {
    const tempArray=[];
    window.localStorage.setItem("tempData", JSON.stringify(tempArray));
    renderTempRecord(tempArray);
}

function renderTempRecord(arr) {
    let text="";
    for (i=0;i<arr.length;i++) {
        let output;
        if (arr[i][1]==="FtoC") {
            output=Math.round((arr[i][0]-32)*5/9*100)/100;
            text=text+"<div>"+arr[i][0]+"oF = "+output+"oC</div>";
        } else if(arr[i][1]==="CtoF") {
            output=Math.round(((arr[i][0]*9/5)+32)*100)/100;
            text=text+"<div>"+arr[i][0]+"oC = "+output+"oF</div>";
        }
    }
    document.getElementById("tempRecord").innerHTML=text;
}
//Voltage Calculation

function calculateVP(){
    let ampere = document.getElementById("ampereInput").value;
    let resistance = document.getElementById("resistanceInput").value;
    let volt, power;
    if (isNaN(ampere)||isNaN(resistance)) {
      const text = "Input is not valid. Input must be number";
      document.getElementById("validate").innerHTML = text;
    } else {
        volt=Math.round(ampere*resistance*100)/100;
        power=Math.round(volt*ampere*100)/100;
        document.getElementById("validate").innerHTML ="";
        document.getElementById("voltageOutput").value=volt;
        document.getElementById("voltageOutput").disabled=true;
        document.getElementById("powerOutput").value=power;
        document.getElementById("powerOutput").disabled=true;
        document.getElementById("voltageCalculationButton").style.border="solid 1px black";
    }       
}

function volChangeTracking() {
    document.getElementById("voltageCalculationButton").focus();
    document.getElementById("voltageCalculationButton").style.border="solid 3px red";
}

function saveRecordVP() {
    let ampere = document.getElementById("ampereInput").value;
    let resistance = document.getElementById("resistanceInput").value;
    let tempArray=[];
    if(window.localStorage.getItem("volData")!==null&&window.localStorage.getItem("volData")!=="") {
        tempArray=JSON.parse(window.localStorage.getItem("volData"));
    }
    tempArray.push([ampere,resistance]);
    window.localStorage.setItem("volData",JSON.stringify(tempArray));
    renderVolRecord(tempArray);
}

function deleteRecordVP() {
    const tempArray=[];
    window.localStorage.setItem("volData", JSON.stringify(tempArray));
    renderVolRecord(tempArray);
}

function renderVolRecord(arr) {
    let text="";
    for (i=0;i<arr.length;i++) {
        let volt, power;
        volt=Math.round(arr[i][0]*arr[i][1]*100)/100;
        power=Math.round(volt*arr[i][0]*100)/100;
        text=text+"<div class=\"volRecord-element\"><div class=\"volRecord-unit\">Current I :"
            +arr[i][0]+" (A)</div>"
            +"<div class=\"volRecord-unit\">Resistance R :"
            +arr[i][1]+" (Ω)</div>"
            +"<div class=\"volRecord-unit\">Voltage V :"
            +volt+" (V)</div>"
            +"<div class=\"volRecord-unit\">Power P :"
            +power+" (W)</div>"
            +"</div>";
    }
    document.getElementById("volRecord").innerHTML=text;
}