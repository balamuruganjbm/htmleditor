var btn = document.querySelector(".sai");
var getText = document.querySelector(".getText");
var content = document.querySelector(".getcontent");
var editorContent = document.querySelector(".editor");

btn.addEventListener("click", function () {
    var s = editorContent.innerHTML;
    content.style.display = "block";
    content.textContent = s;
});

getText.addEventListener("click", function () {
    const old = editorContent.textContent;
    content.style.display = "block";
    content.textContent = old;
});

function buttoncreation(type) {
    var btnelement = document.createElement("input");
    var value = prompt("Enter the value for button");
    var name = prompt("Enter the name for button");
    btnelement.setAttribute("type", type);
    btnelement.setAttribute("value", value);
    btnelement.setAttribute("name", name);
    editorContent.appendChild(btnelement);
}


function link() {
    var url = prompt("Enter the URL");
    document.execCommand("createLink", false, url);
}

function copy() {
    document.execCommand("copy", false, "");
}

function changeColor() {
    var color = prompt("Enter your color in hex ex:#f1f233");
    document.execCommand("foreColor", false, color);
}

function getImage() {
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
    let dataURI;
    reader.addEventListener(
      "load",
      function() {
        dataURI = reader.result;
        const img = document.createElement("img");
        img.src = dataURI;
        img.setAttribute("id","img"+Math.floor(Math.random() * 100) + 1);
        img.setAttribute("onclick","imgSize(this.id);");
        editorContent.appendChild(img);
      },
      false
    );
    if (file) {
      console.log("s");
      reader.readAsDataURL(file);
    }
  }
  
function tablecreation() {
    var noOfRows = prompt("Enter the number of rows for table");
    var t = document.createElement('table');
    var row;
    var col;
    t.setAttribute("border", "3");
    t.setAttribute("width", "250");
    t.setAttribute("height", "250");
    for (var itr = 0; itr < noOfRows; itr++) {
        row = document.createElement('tr');
        for (var itr1 = 0; itr1 < noOfRows; itr1++) {
            col = document.createElement('td');
            row.appendChild(col);
        }
        row.appendChild(col);
        t.appendChild(row);
    }

    editorContent.appendChild(t);
}


function printMe() {
    if (confirm("Check your Content before print")) {
        var filename = prompt("Enter the filename");
        divHtml = editorContent.innerHTML;
        var link = document.createElement("a");
        mimeType = 'text/plain';
        link.setAttribute('download', filename);
        link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(divHtml));
        link.click();
    }
}
function printMeText() {
  if (confirm("Check your Content before print")) {
    var filename=prompt("Enter the filename");
    divHtml = editorContent.innerHTML;
    var link = document.createElement("a");
    mimeType='text/html';
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(divHtml));
    link.click(); 
  }
}

//RESIZE IMAGE
var thatImage;
function imgSize(id){
  thatImage=id;
  modal.style.display = "block";
}
function smallImg(){
  document.getElementById(thatImage).removeAttribute("class");
  document.getElementById(thatImage).classList.toggle("smallImgSize");
}
function medImg(){
  document.getElementById(thatImage).removeAttribute("class")
  document.getElementById(thatImage).classList.toggle("medImgSize");
}
function larImg(){
  document.getElementById(thatImage).removeAttribute("class")
  document.getElementById(thatImage).classList.toggle("larImgSize");
}

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}