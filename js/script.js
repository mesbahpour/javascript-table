 function Table()
  {

        let rows=window.prompt("input number of rows");
        let cols=window.prompt("input number of colunm");
            
        let table = "<table border='1'>";
        for(let i=0;i<rows;i++)
        {
        table  =table  + "<tr>";
           for(let j=0;j<cols;j++)
          {
          table  = table  + "<td>" + "Row-" +i+"colunm-"  +j+ "</td>"; 
        }
         table  = table  + "</tr>";        
      }
      table  = table  + "</table>";
      document.write(table );   
 }     
