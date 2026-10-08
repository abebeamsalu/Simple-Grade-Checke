let name = document.getElementById("studentName");
let Mark=document.getElementById("mark");
let button=document.getElementById("checkBtn");
let result=document.getElementById("result");
button.onclick=function()
{
let studentName=name.value;
let studentMark=Number(Mark.value)
if(studentMark>=85)
{
result.textContent=studentName + "- Grade A";
}
else if(studentMark>=75)
{
result.textContent=studentName+"- Grade B+";
}
else if(studentMark>=65)
{
result.textContent=studentName + "- Grade B ";
}
else
{
result.textContent=studentName + "- Grade F";
}
};
