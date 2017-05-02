/*! Source: http://stackoverflow.com/questions/19484544/set-height-of-div-to-height-of-another-div-through-css */ 
var right=document.getElementById('right-div').style.height;
var left=document.getElementById('left-div').style.height;
if(left>right)
{
    document.getElementById('right-div').style.height=left;
}
else
{
    document.getElementById('left-div').style.height=right;
}