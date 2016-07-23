var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

for (var i = 0; i < scores.length; i++ ){
	var score = scores[i];
switch (true) {
	case score < 61:
	gradeF++
	break;
	case score < 71:
	gradeD++
	break;
	case score < 81:
	gradeC++
	break;
	case score < 91:
	gradeB++
	break;
	default:
	gradeA++
}
}
console.log("There are " + gradeA + " of students with grade A." );
console.log("There are " + gradeB + " of students with grade B." );
console.log("There are " + gradeC + " of students with grade C." );
console.log("There are " + gradeD + " of students with grade D." );
console.log("There are " + gradeF + " of students with grade F." );

var sortedScores = scores.sort(function (first, second){
	return first - second;
});
console.log("The lowest grade is " + sortedScores[0]);
console.log("The highest grade is " + sortedScores[sortedScores.length-1]);





