NameArray = []

function Submit()
{
  var Name1 = document.getElementById("Name1").value
  var Name2 = document.getElementById("Name2").value
  var Name3 = document.getElementById("Name3").value
  var Name4 = document.getElementById("Name4").value

  NameArray.push(Name1)
  NameArray.push(Name2)
  NameArray.push(Name3)
  NameArray.push(Name4)

  console.log(NameArray)

  document.getElementById("Display_Name").innerHTML = NameArray;
  document.getElementById("Submitbtm").style.display = "none";
  document.getElementById("Sortbtm").style.display = "inline-block";
}

function Sorting()
{
  NameArray.sort()

  console.log(NameArray)

  document.getElementById("Display_Name").innerHTML = NameArray;
}