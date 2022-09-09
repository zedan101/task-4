// Add employees popup

function OpenForm() {
  document.getElementById("popUp").style.display = "block";
}
function CloseForm() {
  document.getElementById("popUp").style.display = "none";
}


//  display data when website opens
function OnLoading() {
  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  console.log(apiResult);
  if (apiResult != null) {
    apiResult.forEach((result, idx) => {

      const card = document.createElement('div');
      let jt = JobTitle(result.JobTitle)
      var dprt = Department(result.Deprt)
      CreateCard(result.FirstName, result.LastName, jt, dprt, idx);
    })
  }
}
window.onload = OnLoading();

// turnig select input numeric values to respective choices

function Filterby(searchby) {
  switch (searchby) {
    case "1":
      return "FirstName";
    case "2":
      return "PrfdName";
    case "3":
      return "EMail";
    case "4":
      return "MobNum";
    case "5":
      return "SkypId";
  }
}

function JobTitle(jobTitle) {
  switch (jobTitle) {
    case "1":
      return "SharePoint Practice Head";
    case "2":
      return "Net Development Lead";
    case "3":
      return "Recruiting Expert";
    case "4":
      return "BI Developer";
    case "5":
      return "Bussiness Analyst";
  }
}

function office(off) {
  switch (off) {
    case "1":
      return "Seattle";
    case "2":
      return "India";
  }
}

function Department(deprt) {
  switch (deprt) {
    case "1":
      return "IT";
    case "2":
      return "Human Resource";
    case "3":
      return "MD";
    case "4":
      return "Sales";

  }
}

// Class Employees 

class Employees {
  constructor(FirstName, LastName, PrfdName = PrfdName(), EMail, JobTitle, Office, Deprt, MobNum, SkypId) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.PrfdName = PrfdName;
    this.EMail = EMail;
    this.JobTitle = JobTitle;
    this.Office = Office;
    this.Deprt = Deprt;
    this.MobNum = MobNum;
    this.SkypId = SkypId;
  }
  PrfdName() {
    return this.FirstName + this.LastName;
  }

}
// storing values to local storage 

var Objarr = [];

function submit() {
  let FirstName = document.getElementById("fName").value;
  let LastName = document.getElementById("lName").value;
  let PrfdName = document.getElementById("prfdName").value;
  let EMail = document.getElementById("eMail").value;
  let JobTitle = document.getElementById("jobTitle").value;
  let Office = document.getElementById("office").value;
  let Deprt = document.getElementById("depart").value;
  let MobNum = document.getElementById("mobNo").value;
  let SkypId = document.getElementById("skypId").value;
  let EmpObj = new Employees(FirstName, LastName, PrfdName, EMail, JobTitle, Office, Deprt, MobNum, SkypId);

  console.log(EmpObj);
  appendData(EmpObj)
  clear();
  display();
  FCount();
}
function appendData(EmpObj) {
  let temp = localStorage.getItem('Employees');
  console.log(temp);
  if (temp == null) {
    localStorage.setItem('Employees', JSON.stringify(EmpObj));
  } else {
    Objarr = JSON.parse(temp);
    console.log(Objarr);
  }
  Objarr.push(EmpObj);
  localStorage.setItem('Employees', JSON.stringify(Objarr));
  console.log(Objarr);
}


function clear() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("prfdName").value = "";
  document.getElementById("eMail").value = "";
  document.getElementById("jobTitle").value = "";
  document.getElementById("office").value = "";
  document.getElementById("depart").value = "";
  document.getElementById("mobNo").value = "";
  document.getElementById("skypId").value = "";
}

// function to display all data 
function display() {
  const container = document.getElementById('result');
  container.innerHTML = "";
  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult.forEach((result, idx) => {
    let jt = JobTitle(result.JobTitle)
    var dprt = Department(result.Deprt)
    CreateCard(result.FirstName, result.LastName, jt, dprt, idx);
    document.getElementById("searchKey").value = "";
  })
}

// functions for searching
function AlphaSearch(letter) {
  const container = document.getElementById('result');
  container.innerHTML = "";
  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult.forEach((result, idx) => {
    if (result.FirstName[0] == letter) {
      let jt = JobTitle(result.JobTitle)
      var dprt = Department(result.Deprt)
      CreateCard(result.FirstName, result.LastName, jt, dprt, idx);
    }
  })

}


function Search() {
  const container = document.getElementById('result');
  container.innerHTML = "";
  let Searchby = document.getElementById("filterBy").value;
  let Searchkey = document.getElementById("searchKey").value;
  let filterby = Filterby(Searchby);
  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult.find(function (result, index) {
    if (filterby == "FirstName" && result.FirstName == Searchkey) {
      var jt = JobTitle(result.JobTitle)
      var dprt = Department(result.Deprt)
      CreateCard(result.FirstName, result.LastName, jt, dprt, index);
    }
    else if (filterby == "PrfdName" && result.PrfdName == Searchkey) {
      var jt = JobTitle(result.JobTitle)
      var dprt = Department(result.Deprt)
      CreateCard(result.FirstName, result.LastName, jt, dprt, index);
    }
    else if (filterby == "EMail" && result.EMail == Searchkey) {
      var jt = JobTitle(result.JobTitle)
      var dprt = Department(result.Deprt)
      CreateCard(result.FirstName, result.LastName, jt, dprt, index);
    }
    else if (filterby == "MobNum" && result.MobNum == Searchkey) {
      var jt = JobTitle(result.JobTitle)
      var dprt = Department(result.Deprt)
      CreateCard(result.FirstName, result.LastName, jt, dprt, index);
    }
    else if (filterby == "SkypId" && result.SkypId == Searchkey) {
      var jt = JobTitle(result.JobTitle)
      var dprt = Department(result.Deprt)
      CreateCard(result.FirstName, result.LastName, jt, dprt, index);
    }
  });
}

// Fliters

function FDepartment(Dpt) {
  const container = document.getElementById('result');
  container.innerHTML = "";
  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult.forEach((result, idx) => {
    let jt = JobTitle(result.JobTitle)
    var dprt = Department(result.Deprt)
    if (dprt == Dpt) {
      CreateCard(result.FirstName, result.LastName, jt, dprt, idx);
    }
  })

}

function FJobTitle(fjt) {
  const container = document.getElementById('result');
  container.innerHTML = "";
  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult.forEach((result, idx) => {
    let jt = JobTitle(result.JobTitle)
    var dprt = Department(result.Deprt)
    if (jt == fjt) {
      CreateCard(result.FirstName, result.LastName, jt, dprt, idx);
    }
  })

}


function FOffice(ofc) {
  const container = document.getElementById('result');
  container.innerHTML = "";
  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult.forEach((result, idx) => {
    let jt = JobTitle(result.JobTitle)
    var dprt = Department(result.Deprt)
    let off = office(result.Office)
    if (off == ofc) {
      CreateCard(result.FirstName, result.LastName, jt, dprt, idx);
    }
  })

}


// Function to create emp card 

function CreateCard(fname, lname, jt, dprt, idx) {
  const container = document.getElementById('result');
  const content = `
<div class="p-1"><div id="empCard${idx}" class="card">
<img src="./assets/profile.png" alt="img">
<span>
    <h6>${fname} ${lname}</h6>
    <p>${jt}<br>${dprt}</p>
    <span class="d-flex">
        <a href=""><i class="bi bi-telephone-fill"></i></a>
        <a href=""><i class="bi bi-envelope-fill"></i></a>
        <a href=""><i class="bi bi-chat-fill"></i></a>
        <a href=""><i class="bi bi-star-fill"></i></a>
        <a href=""><i class="bi bi-heart-fill"></i></a>
    </span>
    <a href="#" id="${idx}" onclick="DisplayData(this.id)">
    <span class="link"></span>
  </a>
</span>
</div></div>
`;


  container.innerHTML += content;
}

function DisplayData(index) {

  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  const container = document.getElementsByTagName("BODY")[0];
  const content = `
  <section id="editData" class="position-absolute p-5">
  <button type="button" class="close float-end" aria-label="Close" onclick="closeeditForm()">
      <span aria-hidden="true">&times;</span>
    </button>
  <h2>Edit Employees Details</h2><br>
  <input type="text" placeholder="${apiResult[index].FirstName}" id="edfName" value="${apiResult[index].FirstName}">
  <input class="" type="text" placeholder="${apiResult[index].LastName}" id="edlName" value="${apiResult[index].LastName}"><br>
  <input type="text" placeholder="${apiResult[index].PrfdName}" id="edprfdName" value="${apiResult[index].PrfdName}">
  <input type="email" name="Email" id="edeMail" placeholder="${apiResult[index].EMail}" value="${apiResult[index].EMail}"><br>
  
  
  <select class="form-select" aria-label="Default select example" id="edJobTitle">
      <option value="${apiResult[index].JobTitle}" selected>${JobTitle(apiResult[index].JobTitle)}</option>
      <option value="1">SharePoint Practice Head</option>
      <option value="2">Net Devlopment Lead</option>
      <option value="3">Recruiting Expert</option>
      <option value="4">BI Devloper</option>
      <option value="5">Bussiness Analyst</option>
    </select>
  
  
    <select class="form-select" aria-label="Default select example" id="edOffice">
      <option value="${apiResult[index].Office}" selected>${office(apiResult[index].Office)}</option>
      <option value="1">Seattle</option>
      <option value="2">India</option>
  
    </select>
   
    <select class="form-select" aria-label="Default select example" id="edDepart">
      <option value="${apiResult[index].Deprt}" selected>${Department(apiResult[index].Deprt)}</option>
      <option value="1">IT</option>
      <option value="2">Human Resource</option>
      <option value="3">MD</option>
      <option value="4">sales</option>
      
    </select>
    
  <input type="number" name="mobno" id="edmobNo" placeholder="${apiResult[index].MobNum}" value="${apiResult[index].MobNum}">
  <input type="text" placeholder="${apiResult[index].SkypId}" id="edskypId" value="${apiResult[index].SkypId}"><br>
  <button onclick="SubmitEdits(${index})">submit</button>
</section>
</section>
  `;

  container.innerHTML += content;
  document.getElementById("editData").style.display = "block";
}

function SubmitEdits(index) {

  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult[index].FirstName = document.getElementById("edfName").value;
  apiResult[index].LastName = document.getElementById("edlName").value;
  apiResult[index].PrfdName = document.getElementById("edprfdName").value;
  apiResult[index].EMail = document.getElementById("edeMail").value;
  console.log(document.getElementById("edJobTitle").value);
  apiResult[index].JobTitle = document.getElementById("edJobTitle").value;
  apiResult[index].Office = document.getElementById("edOffice").value;
  apiResult[index].Deprt = document.getElementById("edDepart").value;
  apiResult[index].MobNum = document.getElementById("edmobNo").value;
  apiResult[index].SkypId = document.getElementById("edskypId").value;
  localStorage.setItem('Employees', JSON.stringify(apiResult));
  $("#editData").remove();
  display();
}


function closeeditForm() {
  $("#editData").remove();


}
// filter countings 
function FCount() {
  let countd = [0,0,0,0];
  let counto=[0,0];
  let countjt=[0,0,0,0,0];

  var apiResult = JSON.parse(localStorage.getItem('Employees'));
  apiResult.forEach((result) => {
    
    switch (result.Deprt) {
      case "1":
        countd[0] ++;
        break;
      case "2":
        countd[1] ++;
        break;
      case "3":
        countd[2] ++;
        break;
      case "4":
        countd[3] ++;
        break;
    }
    
    switch(result.Office){
      case "1":
        counto[0]+=1;
        break;
      case "2":
        counto[1]+=1;
        break;
    }
    
    switch (result.JobTitle) {
      case "1":
        countjt[0]+=1;
        break;
      case "2":
        countjt[1]+=1;
        break;
      case "3":
        countjt[2]+=1;
        break;
      case "4":
        countjt[3]+=1;
        break;
      case "5":
        countjt[4]+=1;
        break;
    }
  })
  
  countd.forEach((val,i)=>{
    let count=document.getElementById(`d${i}`);
    count.innerHTML=`(${val})`;
  })
  counto.forEach((val,i)=>{
    let count=document.getElementById(`o${i}`);
    count.innerHTML=`(${val})`;
  })
  countjt.forEach((val,i)=>{
    let count=document.getElementById(`jt${i}`);
    count.innerHTML=`(${val})`;
  })


}
window.onload=FCount();

// form validation
function FormValidate(){
  let FirstName = document.getElementById("fName").value;
  let LastName = document.getElementById("lName").value;
  let EMail = document.getElementById("eMail").value;
  let MobNum = document.getElementById("mobNo").value;
  

  var phoneno = /^\d{10}$/;
  if(MobNum.match(phoneno) && MobNum.length==10)
  {
    let mn=document.getElementById("valMn");
    mn.innerHTML="";
  }else{
    let mn=document.getElementById("valMn");
    mn.innerHTML="Invalid Mobile Number";
    mn.style.color = "red";
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(EMail.match(mailformat))
{
  let em=document.getElementById("valEm");
  em.innerHTML="";
}else{
  let em=document.getElementById("valEm");
    em.innerHTML="Invalid Email";
   em.style.color = "red";

}
if(FirstName=="" || FirstName==null && LastName=="" || LastName==null){
let fn=document.getElementById("valN");
fn.innerHTML="Invalid Name";
fn.style.color = "red";
}else{
  let fn=document.getElementById("valN");
fn.innerHTML="";
}


}