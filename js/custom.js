

var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');

//remove button

removeAll.onclick = function(){
	list.innerHTML = '';
}

//adding new list element

add.onclick = function(){
	addlist(list);
	document.getElementById('userinput').value = '';
	document.getElementById('userinput').focus();
}
function addlist(targetUL){
	var inputText = document.getElementById('userinput').value;
	var li = document.createElement('li');
	var textNode = document.createTextNode(inputText + ' ');
	var removeBtn = document.createElement('button');

	if(inputText !== ''){
		removeBtn.className = 'btn btn-xs btn-danger';
		removeBtn.innerHTML = ' &times; ';
		removeBtn.setAttribute('onclick', 'removeMe(this)');
	
		li.appendChild(textNode);
		li.appendChild(removeBtn);
		targetUL.appendChild(li);
	} else {
		alert("Please enter a todo list");
	}


}

function removeMe(item){
	var p = item.parentElement;
	p.parentElement.removeChild(p);
}