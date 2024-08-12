var obtainMarks = +prompt("enter obtain marks")
var totalmarks = +prompt("enter Total  marks")
if(obtainMarks>0 && totalmarks >0){
    if(totalmarks >= obtainMarks){
        var percentage = obtainMarks/totalmarks*100
        // document.write("<h1>total marks"+totalmarks+"</h1><h1>obtain marks"+obtainMarks+"</h1><h1> Percentage : "+percentage+"</h1>")
        // document.write("<h1>total marks"+totalmarks+"</h1>")
        // document.write("<h1>Obtain marks"+obtainMarks+"</h1>")
        // document.write("<h1>percentage"+percentage+"</h1>")
        if(percentage>80){
            document.write("<div style='border:1px solid black;width:900px;margin:auto;font-size:50px;'>")
            document.write(`<table style:border:1px solid black;>
        <tr>
            <td>TOTAL MARKS:</td>
            <td>${totalmarks}</td>
        </tr>
        <tr>
            <td>OBTAIN MARKS:</td>
            <td>${obtainMarks}</td>
        </tr>
        <tr>
            <td>PERCENTAGE:</td>
            <td>${percentage}%</td>
        </tr>
        
        <tr>
            <td>GRADE:</td>
            <td>A1'</td>
        </tr>
    </table>`)
    document.write("</div>")
        }
        else if(percentage>70 && percentage<=80){
            document.write("<div style='border:1px solid black;width:900px;margin:auto;font-size:50px;'>")
            document.write(`<table style:border:1px solid black;>
        <tr>
            <td>TOTAL MARKS:</td>
            <td>${totalmarks}</td>
        </tr>
        <tr>
            <td>OBTAIN MARKS:</td>
            <td>${obtainMarks}</td>
        </tr>
        <tr>
            <td>PERCENTAGE:</td>
            <td>${percentage}%</td>
        </tr>
        
        <tr>
            <td>GRADE:</td>
            <td>A</td>
        </tr>
    </table>`)
    document.write("</div>")
        }
        else if(percentage>60 && percentage<=70){
            document.write("<div style='border:1px solid black;width:900px;margin:auto;font-size:50px;'>")
            document.write(`<table style:border:1px solid black;>
        <tr>
            <td>TOTAL MARKS:</td>
            <td>${totalmarks}</td>
        </tr>
        <tr>
            <td>OBTAIN MARKS:</td>
            <td>${obtainMarks}</td>
        </tr>
        <tr>
            <td>PERCENTAGE:</td>
            <td>${percentage}%</td>
        </tr>
        
        <tr>
            <td>GRADE:</td>
            <td>B</td>
        </tr>
    </table>`)
    document.write("</div>")
        }
        else if(percentage>50 && percentage<=60){
            document.write("<div style='border:1px solid black;width:900px;margin:auto;font-size:50px;'>")
            document.write(`<table style:border:1px solid black;>
        <tr>
            <td>TOTAL MARKS:</td>
            <td>${totalmarks}</td>
        </tr>
        <tr>
            <td>OBTAIN MARKS:</td>
            <td>${obtainMarks}</td>
        </tr>
        <tr>
            <td>PERCENTAGE:</td>
            <td>${percentage}%</td>
        </tr>
        
        <tr>
            <td>GRADE:</td>
            <td>C</td>
        </tr>
    </table>`)
    document.write("</div>")
        }
        else if(percentage>40 && percentage<=50){
            document.write("<div style='border:1px solid black;width:900px;margin:auto;font-size:50px;'>")
            document.write(`<table style:border:1px solid black;>
        <tr>
            <td>TOTAL MARKS:</td>
            <td>${totalmarks}</td>
        </tr>
        <tr>
            <td>OBTAIN MARKS:</td>
            <td>${obtainMarks}</td>
        </tr>
        <tr>
            <td>PERCENTAGE:</td>
            <td>${percentage}%</td>
        </tr>
        
        <tr>
            <td>GRADE:</td>
            <td>D</td>
        </tr>
    </table>`)
    document.write("</div>")
        }
        else if(percentage>10 && percentage<=40){
            document.write("<div style='border:1px solid black;width:900px;margin:auto;font-size:50px;'>")
            document.write(`<table style=border:1px solid black;>
        <tr>
            <td>TOTAL MARKS:</td>
            <td>${totalmarks}</td>
        </tr>
        <tr>
            <td>OBTAIN MARKS:</td>
            <td>${obtainMarks}</td>
        </tr>
        <tr>
            <td>PERCENTAGE:</td>
            <td>${percentage}%</td>
        </tr>
        
        <tr>
            <td>GRADE:</td>
            <td style=color:red;>FAIL</td>
        </tr>
    </table>`)
    document.write("</div>")
        }
    }
    else{
        document.write("please enter correct data")
    }

}

// else{
// }

// var studentName =["MICHAEl","JHON","TONY"]
// var studentScore =["320","480","230"]
// var totalScore =["500"]
// document.write("SCORE  "  +   "  OF  "  +   studentName[0]  +  "  IS  "  +  studentScore[0]  +  "  PERCENTAGE : "  +  studentScore[0]/totalScore*100 +" % " + "<br/>" )

// document.write("SCORE  "  +   "  OF  "  +   studentName[1]  +  "  IS  "  +  studentScore[1]  +  "  PERCENTAGE : "  +  studentScore[1]/totalScore*100 +" % " + "<br/>")

// document.write("SCORE  "  +   "  OF  "  +   studentName[2]  +  "  IS  "  +  studentScore[2]  +  "  PERCENTAGE : "  +  studentScore[2]/totalScore*100 +" % " + "<br/>")


// var education =["BSC","HSC","BS","PHD","B.COM","M.PHILS","MS"]
// document.write("<h1> QUALIFICATION:</h1> <br/>")
// document.write("<div style=font-size:30px;>")
// document.write(education[0]+"<br/>")
// document.write(education[1]+"<br/>")
// document.write(education[2]+"<br/>")
// document.write(education[3]+"<br/>")
// document.write(education[4]+"<br/>")
// document.write(education[5]+"<br/>")
// document.write(education[6]+"<br/>")
// document.write("</div>")


// let mobileStore=["nokia","samsung","apple","oppo","infinix"]
// document.write(`
//     <select name="" id="">
//     <option value="">nokia</option>
//     <option value="">samsung</option>
//     <option value="">apple</option>
//     <option value="">oppo</option>
//     <option value="">infinix</option>
//     </select>
//     `)

//     var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//  if (cityToCheck === cleanestCities[0]) {
//      alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[1]) {
//      alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[2]) {
//      alert("It's one of the cleanest cities");
//      }
//          else if (cityToCheck === cleanestCities[3]) {
//          alert("It's one of the cleanest cities");
//          }
//          else if (cityToCheck === cleanestCities[4]) {
//          alert("It's one of the cleanest cities");
//          }
        
//          else {
//          alert("It's not on the list");
//          }

for ( var i=0;i<10;i++);
