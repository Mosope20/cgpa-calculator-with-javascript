var sope = true;
//using while loop to make the program run endlessly
while(sope==true){
    alert("Do you wish to calculate your cgpa: ")
    var ans = prompt("if yes, press y, if no, press x' (y/n): ")
    if(ans == "y" || ans == "Y"){
        sope = true;
    }
    if(ans == "n" || ans == "N"){
        alert("Bye")
        sope = false;
        break;
}
    alert("Welcome to my CGPA calculator in Javascript");
    var name = prompt("Enter your name: ");
    var matric_no = prompt("Enter your matric number: ");
    var no_courses = Number(prompt("Hello " + name + " how many courses do you offer?"));
    var sum_gotten_point = 0;
    var sum_point = 0;
    for (i = 1 ; i<=no_courses ; i++){
        var score = Number(prompt("Enter the score of the courses"+[i] +" :"));
        var unit = Number(prompt("Enter the unit of the courses"+[i] +" :"));

        if (score >= 70 && score <= 100){
            var grade = "A";
            var point = 5;
            var gpa = 5 * 5;
            }
        else if (score >= 60 && score <= 69){
            var grade = "B";
            var point = 4;
            var gpa = 5 * 4;
            }
        else if (score >= 50 && score <= 59){
            var grade = "C";
            var point = 3;
            var gpa = 5 * 3;
            }
        else if (score >= 40 && score <= 49){
            var grade = "D";
            var point = 2;
            var gpa = 5 * 2;
            }
        else if (score >= 30 && score <= 39){
            var grade = "E";
            var point = 1;
            var gpa = 5 * 1;
            }
        else if (score >= 0 && score <= 29){
            var grade = "F";
            var point = 0;
            var gpa = 5 * 0;
            }

        var attainable_sum = unit * 5;
        var attained_sum = point * unit;
        var sum_gotten_point = sum_gotten_point + attained_sum;
        var sum_point = sum_point + attainable_sum;
        var gpa = (sum_gotten_point / sum_point) * 5;

    }
    alert(name);
    alert("Your CGPA is: " + gpa);
}
