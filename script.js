
function calculateWaterSavings() {
    var occupants = parseInt(document.getElementById("occupants").value);
    var ShR = parseInt(document.getElementById("showerRate").value);
    var ShN = parseInt(document.getElementById("showerNumber").value);
    var KsR = parseInt(document.getElementById("kitchenRate").value);
    var KsN = parseInt(document.getElementById("kitchenNumber").value);
    var LR = parseInt(document.getElementById("lavatoryRate").value);
    var LN = parseInt(document.getElementById("lavatoryNumber").value);
    var TR = parseInt(document.getElementById("toiletRate").value);
    var TN = parseInt(document.getElementById("toiletNumber").value);
    totalUsage = 0;
    if (isNaN(occupants)) {
        document.getElementById("occupantError").innerHTML = "You did not enter a number. Please try again";
    } else {
        document.getElementById("occupantError").innerHTML = "";

        if (isNaN(ShR) == true || isNaN(ShN) == true) {
            document.getElementById("showerUsage").innerHTML = "You did not enter a number. Please try again";
        } else {
            if (ShR <= 2) {
                document.getElementById("showerUsage").innerHTML = "Your shower head is up to current guidelines!";
            } else {
                var ShDiff = ShR - 2;
                var ShUsage = ShDiff * ShN * 8.2 * occupants * 365;
                document.getElementById("showerUsage").innerHTML = "By replacing your shower head(s) with one within the guidelines of 2 gallons per minute, you could save " + ShUsage + " gallons per year.";
                totalUsage += ShUsage;
            }
        }
        if (isNaN(KsR) == true || isNaN(KsN) == true) {
            document.getElementById("kitchenUsage").innerHTML = "You did not enter a number. Please try again";
        } else {
            if (KsR <= 1.8) {
                document.getElementById("kitchenUsage").innerHTML = "Your kitchen faucet is up to current standards!";
            } else {
                var KsDiff = KsR - 1.8;
                var KsUsage = KsDiff * KsN * 4 * occupants * 365;
                document.getElementById("kitchenUsage").innerHTML = "By replacing your kitchen faucet(s) with one within the guidelines of 1.8 gallons per minute, you could save " + KsUsage + " gallons per year.";
                totalUsage += KsUsage;
            }
        }
        if (isNaN(LR) == true || isNaN(LN) == true) {
            document.getElementById("lavatoryUsage").innerHTML = "You did not enter a number. Please try again";
        } else {
            if (LR <= 1.2) {
                document.getElementById("lavatoryUsage").innerHTML = "Your lavatory faucet is up to current standards!";
            } else {
                var LDiff = LR - 1.2;
                var LUsage = LDiff * LN * 4 * occupants * 365;
                document.getElementById("lavatoryUsage").innerHTML = "By replacing your lavatory faucet(s) with one within the guidelines of 1.2 gallons per minute, you could save " + LUsage + " gallons per year.";
                totalUsage += LUsage;
            }
        }
        if (isNaN(TR) == true || isNaN(TN) == true) {
            document.getElementById("toiletUsage").innerHTML = "You did not enter a number. Please try again";
        } else {
            if (TR <= .5) {
                document.getElementById("toiletUsage").innerHTML = "Your toilet is up to current standards!";
            } else {
                var TDiff = TR - .5;
                var TUsage = TDiff * TN * 2.5 * occupants * 365;
                document.getElementById("toiletUsage").innerHTML = "By replacing your toilet(s) with one within the guidelines of .5 gallons per minute, you could save " + TUsage + " gallons per year.";
                totalUsage += TUsage;
            }
        }
        if (isNaN(totalUsage) == true) {
            document.getElementById("Usage").innerHTML = "There is an error with the numbers you have entered. Please try again";
        } else if (totalUsage == 0) {
            document.getElementById("Usage").innerHTML = "There is an error with the numbers you have entered. Please try again";
        } else {
            document.getElementById("Usage").innerHTML = "By replacing all of your outdated water fixtures, you could save a total of " + totalUsage + " gallons per year";
        }

    }
}
function calculateMoneySavings(x){
    var price = document.getElementById("price").value;
    var cost = price * totalUsage;
    document.getElementById("finalCost").innerHTML = "These replacements would save you around $" + cost + " per year.";
}

