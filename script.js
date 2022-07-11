var tablesetup = "<table width='300px' height='300px' border=1>";

for(var x = 0; x < 9; x++)
{
  tablesetup += "<tr>";
  if(x == 0 || x == 1 || x == 2 || x == 6 || x == 7 || x == 8)
  {
    for(var y = 0; y < 3; y++)
    {
      tablesetup += "<td bgcolor='grey' </td>";
    }
    for(var y = 0; y < 3; y++)
    {
      tablesetup += "<td> </td>";
    }
    for(var y = 0; y < 3; y++)
    {
      tablesetup += "<td bgcolor='grey' </td>";
    }
  }
  else
  {
    for(var y = 0; y < 3; y++)
    {
      tablesetup += "<td> </td>";
    }
    for(var y = 0; y < 3; y++)
    {
      tablesetup += "<td bgcolor='grey' </td>";
    }
    for(var y = 0; y < 3; y++)
    {
      tablesetup += "<td> </td>";
    }
  }
  tablesetup += "</tr>";
}
document.write(tablesetup)