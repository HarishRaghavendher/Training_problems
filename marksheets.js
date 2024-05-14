let markSheets = [
  {
    student: "Sriram",
    rollNo: 11,
    tamil: 80,
    english: 90,
    science: 86,
    maths: 97,
    social: 76,
  },
  {
    student: "Ram",
    rollNo: 16,
    tamil: 60,
    english: 97,
    science: 100,
    maths: 34,
    social: 100,
  },
  {
    student: "sri",
    rollNo: 18,
    tamil: 60,
    english: 90,
    science: 66,
    maths: 95,
    social: 46,
  },
  {
    student: "mani",
    rollNo: 20,
    tamil: 40,
    english: 70,
    science: 86,
    maths: 73,
    social: 86,
  },
];
let rank =1;
let boundary = 35;
const total=(marks)=>marks.english+marks.maths+marks.science+marks.social+marks.tamil;


const result=(marks)=>{
  const subjects =[marks.tamil,marks.english,marks.science,marks.social,marks.maths]
return (Math.min(...subjects,boundary) < boundary) ?  'FAIL' : "PASS";
}

const ranks = (marks)=>marks.result === "PASS" ?   {...marks, rank:rank++} : {...marks, rank:'-'};


markSheets = markSheets.map((marks) =>({...marks,total:total(marks),result:result(marks)}));
//single line functions doesn't  need a return and it is a single line function since we don't have any variables inside

markSheets = markSheets.sort((a,b)=>{(b.total - a.total)}) 
markSheets = markSheets.map(ranks);
console.log(markSheets);