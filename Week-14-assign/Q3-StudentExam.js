const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];

function checkResult (name){
    name = name.toUpperCase();
    for (let student of students){
        if(student.name.toUpperCase() === name){
            if(student.marks > 90){
                console.log(`congrats, ${student.name} has cleared the exam`);
            }
            else{
                console.log(`sorry, ${student.name} has not cleared the exam`);

            }
            return;
        }
    }
    console.log("invalid user");
}
checkResult("Mithun")
checkResult('random')
checkResult('Alka')
checkResult('Shivam')

