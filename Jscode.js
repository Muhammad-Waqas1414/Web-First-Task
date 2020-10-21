var temp = 0;

function generateTable() {
    
    
    var table = document.querySelector("#table2");
	var row = table.insertRow();
	
	var cell1 = row.insertCell();
	cell1.appendChild(document.createTextNode(document.getElementById("name").value));
	var cell2 = row.insertCell();
	cell2.appendChild(document.createTextNode(document.querySelector("input[name='gender']:checked").value));
	var cell3 = row.insertCell();
	cell3.appendChild(document.createTextNode(document.getElementById("age").value));
	var cell4 = row.insertCell();
	cell4.appendChild(document.createTextNode(document.getElementById("city").value));
	
	var link1 = document.createElement("a");
	link1.setAttribute("href", "#");
	link1.appendChild(document.createTextNode("Update"));

	link1.onclick=update;
	
	var link2 = document.createElement("a");
	link2.setAttribute("href", "#");
	link2.appendChild(document.createTextNode("Remove"));

	link2.onclick=Remove_row;
	
	var cell5 = row.insertCell();
	cell5.appendChild(link1);
	cell5.appendChild(document.createTextNode(" / "));
    cell5.appendChild(link2);
    
    document.getElementById("name").value="";
    document.querySelector("input[name='gender']:checked").checked=false;
    document.getElementById("age").value="";
    document.getElementById("city").value="";


}

function Remove_row()
{
    var row = document.activeElement.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function update()
{
    temp = document.activeElement.parentNode.parentNode.rowIndex;
    Addbutton=document.getElementById("add");
    Addbutton.disabled=true;
    
    updatebutton=document.getElementById("update");
    updatebutton.disabled=false;

    var row = document.activeElement.parentNode.parentNode;
    document.getElementById("name").value=row.cells[0].innerHTML;
    if(row.cells[1].innerHTML == "Male") {
        document.querySelector("input[id='m']").checked = true;
    } else {
        document.querySelector("input[id='f']").checked = true;
    }
    document.getElementById("age").value=row.cells[2].innerHTML;
    document.getElementById("city").value=row.cells[3].innerHTML;
}

function Re_update()
{
    var table=document.getElementById("table2");
    
	var cell1=document.getElementById("name").value;
	var cell2=document.querySelector("input[name='gender']:checked").value;
	var cell3=document.getElementById("age").value;
	var cell4=document.getElementById("city").value;

    table.rows[temp].cells[0].innerHTML = cell1;
    table.rows[temp].cells[1].innerHTML = cell2;
    table.rows[temp].cells[2].innerHTML = cell3;
    table.rows[temp].cells[3].innerHTML = cell4;

    const Addbutton=document.getElementById("add");
    Addbutton.disabled = false;

    const updatebutton=document.getElementById("update");
	updatebutton.disabled = true;
}

}
