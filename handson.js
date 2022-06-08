//let student =
//{
   // Name:'Raaha',
   // Class: 8,
  //  Grade:'A'
//}
//console.log(student);

//student.Rollno = 1001;

//for (const key in student)
///{
   // console.log(key+""+ student[key]);
//}


const Numbers =  
{
    x : 5,
    y: 4,
    mult2: function()
    {
        return this.x * this.y

    }
    ,sum1: function()
    {
         return this.x + this.y
    }
  
}
function_a();

function function_a()
{
    const test_num=
    [
        { x:5, y:4},
        { x:3, y:2}
    ]
    test_result=function_b(test_num);
    console.log(test_result);
}

function function_b(test_num)
{
    //console.log(test_num[0].x);
    let result =
    result.x = test_num[0].x;
    result.y = test_num[0].y;
    result.z = test_num[0].x * test_num[0].y;
    return result;
}

//console.log(Numbers.mult2());

//const Sum = Numbers.x+Numbers.y;
//console.log(Sum);

//console.log(Numbers.sum1());

//const mult1 = Numbers.sum1() * Numbers.y

//console.log(mult1);

//const divide2 = Numbers.sum1() / mult1;

//console.log(divide2);

//console.log(Numbers.sum1());

//console.log(Numbers.mult2 ());