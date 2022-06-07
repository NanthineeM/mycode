let student =
{
    Name:'Raaha',
    Class: 8,
    Grade:'A'
}
console.log(student);

student.Rollno = 1001;

for (const key in student)
{
    console.log(key+""+ student[key]);
}

