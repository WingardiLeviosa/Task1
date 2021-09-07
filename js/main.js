 let addBtn = document.getElementById('addBtn');
 let taskInput = document.getElementById('taskData');
 let noTasks = document.getElementById('noTasks');
 let allTasks = document.getElementById('allTasks');
 let lrgBtn = document.getElementById('lrgBtn');
 let listss = document.getElementById('listss');
 let darkMode = document.getElementById('darkMode');
 let darkMode2 = document.getElementById('darkMode2');
 let drkMode = document.getElementById('drkMode');
 let lgtMode = document.getElementById('lgtMode');
 let modaldiv1 = document.getElementById('modaldiv1');
 let modaldiv2 = document.getElementById('modaldiv2');
 let modaldiv3 = document.getElementById('modaldiv3');
 let modaldiv4 = document.getElementById('modaldiv4');
 let modaldiv5 = document.getElementById('modaldiv5');
 let closebtn = document.getElementById('close-btn');
 let crdBody = document.getElementById('crdBody');
 let opnBtn = document.getElementById('opnBtn');
 let ulMode = document.getElementById('ulMode');
 let titSpn = document.getElementById('titSpn');
 let titSpan = document.getElementById('titSpan');
 let taskadded = document.getElementById('taskadded');
 let clearBtn = document.getElementById('clearBtn');
 let playDiv = document.getElementById('playDiv');
 let playBtn = document.getElementById('playBtn');
 let input = document.querySelectorAll('input');
 let btn = document.querySelector('button');
 let div = document.querySelector('div');
 let checkMe = document.getElementById('checkMe');
 let dataoftask = document.getElementById('dataoftask');




 lrgBtn.onclick = function () {
     if (listss.style.display == "none") {
         listss.style.display = "block";
     } else {
         listss.style.display = "none";
     }
 }

 let showNoTasks = () => {
     if (allTasks.childElementCount == 0) {
        noTasks.style.display = "";
     }

 }

 let addTask = () => {
     let taskData = taskInput.value;
     if (taskData.trim() == "") {
         alert('Please Enter Valid Data');
     } else {
         noTasks.style.display = "none";
         allTasks.innerHTML += `
         <div id ="dataoftask" class="noTaskss alert alert-success text-center">${taskData}
         <input id="checkMe" class="btn" type="checkBox" value="" onclick="togglecheck()">
         <button id='deletemargin' class='delete float-right btn btn-danger'> Delete </button></div>`
         taskInput.value = "";
     }
 }
 addBtn.addEventListener('click', addTask);



 function togglecheck() {
     if (document.getElementById("checkMe").checked == true) {
         document.getElementById("dataoftask").style.textDecoration = "line-through";
     } else {
         document.getElementById("dataoftask").style.textDecoration = "";
     }
 }

 let deleteTask = (e) => {
     if (e.target.classList.contains('delete')) {
         e.target.parentElement.remove();
         showNoTasks();
     }
 }

 document.addEventListener('click', deleteTask)

 darkMode.onclick = function () {
     if (darkMode.id == "darkMode" && darkMode.innerText == "Dark Mode" &&
         lgtMode.id == "lgtMode" && crdBody.style.backgroundColor == 'white' &&
         opnBtn.className == 'btn btn-success my-4' && lrgBtn.className == 'btn btn-warning my-4' &&
         ulMode.className == 'btn-warning' && titSpn.className == 'h1-heading text-center display-1 text-success' && titSpan.className == 'text-warning' &&
         clearBtn.className == 'clearBtn btn btn-danger my-4' && playBtn.className == 'btn btn-info my-4' &&
         noTasks.className == 'noTaskss alert alert-light text-center mt-1' 
     ) {
         darkMode.id = "lightMode";
         darkMode.innerText = "light Mode"
         lgtMode.id = "drkMode";
         crdBody.style.backgroundColor = 'black';
         opnBtn.className = 'btn btn-dark my-4';
         lrgBtn.className = 'btn btn-dark my-4';
         ulMode.className = 'btn-black2';
         noTasks.className = 'noTaskss alert alert-dark text-center mt-1';
         titSpn.className = 'h1-heading text-center display-1 text-light';
         titSpan.className = 'text-light';
         clearBtn.className = 'clearBtn btnclear btn my-4';
         playBtn.className = 'btn btnplay my-4';
     } else {
         darkMode.id = "darkMode";
         darkMode.innerText = "Dark Mode"
         lgtMode.id = "lgtMode";
         crdBody.style.backgroundColor = 'white';
         opnBtn.className = 'btn btn-success my-4';
         lrgBtn.className = 'btn btn-warning my-4';
         ulMode.className = 'btn-warning';
         noTasks.className = 'noTaskss alert alert-light text-center mt-1';
         titSpn.className = 'h1-heading text-center display-1 text-success';
         titSpan.className = 'text-warning';
         clearBtn.className = 'clearBtn btn btn-danger my-4';
         playBtn.className = 'btn btn-info my-4';
     }
 }

 darkMode2.onclick = function () {
     if (darkMode2.id == "darkMode2" && darkMode2.innerText == "Dark Mode" &&
         modaldiv1.className == 'modal-dialog modal-lg alert alert-info' && modaldiv2.className == 'modal-content alert alert-info' &&
         modaldiv3.className == 'modal-header alert alert-info' && modaldiv4.className == 'modal-body text-center alert alert-info' &&
         modaldiv5.className == 'modal-footer alert alert-info' && closebtn.className == 'btn btn-info' &&
         addBtn.className == 'btn btn-info my-2 btn-block'
     ) {
         darkMode2.id = "lightMode2";
         darkMode2.innerText = "light Mode";
         modaldiv1.className = 'modal-dialog modal-lg alert alert-dark';
         modaldiv2.className = 'modal-content alert alert-dark';
         modaldiv3.className = 'modal-header alert alert-dark';
         modaldiv4.className = 'modal-body text-center alert alert-dark';
         modaldiv5.className = 'modal-footer alert alert-dark';
         closebtn.className = 'btn btn-black';
         addBtn.className = 'btn btn-black my-2 btn-block';
     } else {
         darkMode2.id = "darkMode2";
         darkMode2.innerText = "Dark Mode";
         modaldiv1.className = 'modal-dialog modal-lg alert alert-info';
         modaldiv2.className = 'modal-content alert alert-info';
         modaldiv3.className = 'modal-header alert alert-info';
         modaldiv4.className = 'modal-body text-center alert alert-info';
         modaldiv5.className = 'modal-footer alert alert-info';
         closebtn.className = 'btn btn-info';
         addBtn.className = 'btn btn-info my-2 btn-block';
     }
 }

 let ahmedStyle = () => {
     h = input[0].value;
     w = input[1].value;
     bg = input[2].value;

     div.style.height = h + "px";
     div.style.width = w + "px";
     div.style.backgroundColor = bg;

 }
 btn.addEventListener('click', ahmedStyle);

 let removestyle = () => {
     h = 0;
     w = 0;
     div.style.height = h + "px";
     div.style.width = w + "px";

 }
 clearBtn.addEventListener('click', removestyle);