function bubbleSort(list) {
  var len = list.length;
  var swapped;

  do {
    swapped = false;

    for (var i = 0; i < len - 1; i++) {
      if (list[i] > list[i + 1]) {
       
        var temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return list;
}

function sortList() {
  var input = document.getElementById('list-input').value;
  var list = input.split(',').map(function(item) {
    return item.trim();
  });

  var sortedList = bubbleSort(list);

  var outputContainer = document.getElementById('sorted-list');
  outputContainer.innerHTML = '';

  sortedList.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    outputContainer.appendChild(li);
  });
}

function handleKeyPress(event) {
  var key = event.keyCode || event.which;
  var char = String.fromCharCode(key);

  
  var numericRegex = /^[0-9]$/;

  if (numericRegex.test(char)) {
    event.preventDefault();
  } else if (key === 13) { 
    sortList();
  }
}
