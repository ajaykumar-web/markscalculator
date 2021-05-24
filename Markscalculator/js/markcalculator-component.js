
    const calcy = () => {
        let maths = document.getElementById("Maths").value;
        let chem = document.getElementById("Chemistry").value;
        let phy = document.getElementById("Physics").value;
        let eng = document.getElementById("English").value;
        let phyedu = document.getElementById("PhyEdu").value;
        let grade = "";
        let total = parseInt(maths) + parseInt(chem) + parseInt(phy) + parseInt(eng) + parseInt(phyedu);
        let perc = total / 500 * 100;
        if (perc >= 80 && perc <= 100) {
            grade = "A";
        }
        else if (perc >= 60 && perc <= 79) {
            grade = "B";
        }
        else if (perc >= 40 && perc <= 59) {
            grade = "C";
        }
        else {
            grade = "F";
        }
        if (perc >= 40) {
            document.getElementById("showresult").innerHTML = `Out of 500 your total marks is ${total} and percentage is ${perc} %. <br> your grade is ${grade}. You are Pass.`
        }
        else {
            document.getElementById("showresult").innerHTML = `Out of 500 your total marks is ${total} and percentage is ${perc} %. <br> your grade is ${grade}. You are Fail.`
        }
    }
