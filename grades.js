var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = scores.filter(function(score) {
	return score > 91;
}).length;
console.log("There are " + gradeA + " of students with a grade 91 or higher.");

var gradeB = scores.filter(function(score) {
	return score > 81 ;
}).length;
gradeB = gradeB - gradeA; 
console.log("There are " + gradeB + " of students with a grade between 81 and 90.");

var gradeC = scores.filter(function(score) {
	return score > 71 ;
}).length;

gradeC = gradeC - gradeB; 
console.log("There are " + gradeC + " of students with a grade between 71 and 80.");

var gradeD = scores.filter(function(score) {
	return score > 61 ;
}).length;

gradeD = gradeD - gradeC; 
console.log("There are " + gradeD + " of students with a grade between 61 and 70.");