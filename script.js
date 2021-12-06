let stuRoll = document.getElementById("roll");
let stuName = document.getElementById("name");
let stuSub = document.getElementById("sub");
let stuStore = document.getElementById("popup");

// Check Roll No.
function checkLocal(roll_no) {
  let x;
  if (
    sessionStorage.getItem("Std_Info") === null &&
    localStorage.getItem("Std_Info") === null &&
    document.cookie === ""
  ) {
    return true;
  } else if (
    localStorage.getItem("Std_Info") !== null &&
    sessionStorage.getItem("Std_Info") === null &&
    document.cookie === ""
  ) {
    x = JSON.parse(localStorage.getItem("Std_Info"));
  } else if (
    sessionStorage.getItem("Std_Info") !== null &&
    localStorage.getItem("Std_Info") === null &&
    document.cookie === ""
  ) {
    x = JSON.parse(sessionStorage.getItem("Std_Info"));
  } else if (
    document.cookie !== "" &&
    localStorage.getItem("Std_Info") === null &&
    sessionStorage.getItem("Std_Info") === null
  ) {
    let u = document.cookie.split("=");
    x = JSON.parse(u[1]);
  } else if (
    localStorage.getItem("Std_Info") !== null &&
    sessionStorage.getItem("Std_Info") !== null &&
    document.cookie === ""
  ) {
    let v = JSON.parse(localStorage.getItem("Std_Info"));
    let w = JSON.parse(sessionStorage.getItem("Std_Info"));
    x = v.concat(w);
  } else if (
    localStorage.getItem("Std_Info") !== null &&
    sessionStorage.getItem("Std_Info") === null &&
    document.cookie !== ""
  ) {
    let v = JSON.parse(localStorage.getItem("Std_Info"));
    let u = document.cookie.split("=");
    let z = JSON.parse(u[1]);
    x = v.concat(z);
  } else if (
    localStorage.getItem("Std_Info") === null &&
    sessionStorage.getItem("Std_Info") !== null &&
    document.cookie !== ""
  ) {
    let w = JSON.parse(sessionStorage.getItem("Std_Info"));
    let u = document.cookie.split("=");
    let z = JSON.parse(u[1]);
    x = w.concat(z);
  } else {
    let v = JSON.parse(localStorage.getItem("Std_Info"));
    let w = JSON.parse(sessionStorage.getItem("Std_Info"));
    let y = v.concat(w);
    let u = document.cookie.split("=");
    let z = JSON.parse(u[1]);
    x = y.concat(z);
  }
  let num = 0;
  x.forEach(function (index, item) {
    if (index.Roll_No === roll_no) {
      num = 1;
    }
  });
  if (num === 0) {
    return true;
  } else {
    return false;
  }
}

// Submit Button
function xyz() {
  document.getElementById("myButton").addEventListener("click", function () {
    if (stuRoll.value != 0 && stuName.value != "" && stuSub.value != "") {
      let myObj = {
        Roll_No: stuRoll.value,
        Name: stuName.value,
        Subject: stuSub.value,
        Storage_type: stuStore.value,
      };

      if (myObj["Storage_type"] === "sessionStorage") {
        if (sessionStorage.getItem("Std_Info") === null) {
          if (
            myObj["Storage_type"] === "sessionStorage" &&
            checkLocal(myObj["Roll_No"])
          ) {
            let newArry = [];
            newArry.push(myObj);
            let a = JSON.stringify(newArry);
            sessionStorage.setItem("Std_Info", a);
          } else {
            alert("Roll No already exist Please Fill Another Roll No");
          }
        } else {
          if (
            myObj["Storage_type"] === "sessionStorage" &&
            checkLocal(myObj["Roll_No"])
          ) {
            let z = JSON.parse(sessionStorage.getItem("Std_Info"));
            z.push(myObj);
            let a = JSON.stringify(z);
            sessionStorage.setItem("Std_Info", a);
          } else {
            alert("Roll No already exist Please Fill Another Roll No");
          }
        }
      } else if (myObj["Storage_type"] === "localStorage") {
        if (localStorage.getItem("Std_Info") === null) {
          if (
            myObj["Storage_type"] === "localStorage" &&
            checkLocal(myObj["Roll_No"])
          ) {
            let newArry = [];
            newArry.push(myObj);
            let a = JSON.stringify(newArry);
            localStorage.setItem("Std_Info", a);
          }
        } else {
          if (
            myObj["Storage_type"] === "localStorage" &&
            checkLocal(myObj["Roll_No"])
          ) {
            let b = JSON.parse(localStorage.getItem("Std_Info"));
            b.push(myObj);
            let a = JSON.stringify(b);
            localStorage.setItem("Std_Info", a);
          } else {
            alert("Roll No already exist Please Fill Another Roll No");
          }
        }
      } else {
        if (document.cookie === "" && checkLocal(myObj["Roll_No"])) {
          let newArry = [];
          newArry.push(myObj);
          let a = JSON.stringify(newArry);
          document.cookie = `Std_Info=${a}`;
        } else {
          if (checkLocal(myObj["Roll_No"])) {
            let b = document.cookie.split("=");
            let c = JSON.parse(b[1]);
            c.push(myObj);
            let d = JSON.stringify(c);
            document.cookie = `Std_Info=${d}`;
          } else {
            alert("Roll No already exist Please Fill Another Roll No");
          }
        }
      }

      dispData();
    } else {
      alert("Please Fill all box");
    }
    stuRoll.value = "";
    stuName.value = "";
    stuSub.value = "";
    stuStore.value = "localStorage";
  });
}

// Output Show
function dispData() {
  if (
    sessionStorage.getItem("Std_Info") === null &&
    localStorage.getItem("Std_Info") === null &&
    document.cookie === ""
  ) {
    alert("Please Fill Data");
  } else {
    let x;
    if (
      sessionStorage.getItem("Std_Info") === null &&
      localStorage.getItem("Std_Info") !== null &&
      document.cookie !== ""
    ) {
      let e = JSON.parse(localStorage.getItem("Std_Info"));
      let f = document.cookie.split("=");
      let g = JSON.parse(f[1]);
      x = e.concat(g);
    } else if (
      localStorage.getItem("Std_Info") === null &&
      sessionStorage.getItem("Std_Info") !== null &&
      document.cookie !== ""
    ) {
      let h = JSON.parse(sessionStorage.getItem("Std_Info"));
      let i = document.cookie.split("=");
      let j = JSON.parse(i[1]);
      x = h.concat(j);
    } else if (
      document.cookie === "" &&
      localStorage.getItem("Std_Info") !== null &&
      sessionStorage.getItem("Std_Info") !== null
    ) {
      let k = JSON.parse(localStorage.getItem("Std_Info"));
      let l = JSON.parse(sessionStorage.getItem("Std_Info"));
      x = k.concat(l);
    } else if (
      localStorage.getItem("Std_Info") !== null &&
      sessionStorage.getItem("Std_Info") === null &&
      document.cookie === ""
    ) {
      x = JSON.parse(localStorage.getItem("Std_Info"));
    } else if (
      sessionStorage.getItem("Std_Info") !== null &&
      localStorage.getItem("Std_Info") === null &&
      document.cookie === ""
    ) {
      x = JSON.parse(sessionStorage.getItem("Std_Info"));
    } else if (
      document.cookie !== "" &&
      localStorage.getItem("Std_Info") === null &&
      sessionStorage.getItem("Std_Info") === null
    ) {
      let m = document.cookie.split("=");
      x = JSON.parse(m[1]);
    } else {
      let n = JSON.parse(localStorage.getItem("Std_Info"));
      let o = JSON.parse(sessionStorage.getItem("Std_Info"));
      let p = n.concat(o);
      let q = document.cookie.split("=");
      let r = JSON.parse(q[1]);
      x = p.concat(r);
    }

    document.getElementById("output").innerHTML = "";
    x.forEach((data, index) => {
      const html = `
        <div class="mainData">
          <table class="usertable">
                <tr>
                    <td>Roll No :</td>
                    <td class="no">${data["Roll_No"]}</td>
                </tr>
                <tr>
                    <td>Student Name :</td> 
                    <td>${data["Name"]}</td>
                </tr>
                <tr>
                    <td>Subject :</td>
                    <td>${data["Subject"]}</td>
                </tr>
                <tr>
                    <td>Storage Type :</td>
                    <td class="store">${data["Storage_type"]}</td>
                </tr>

          </table>
          <button type="button" class="myButtonEdit">Edit</button>
          <button type="button" class="myButtonDelete">Delete</button>
        </div>`;
      document.getElementById("output").insertAdjacentHTML("beforeend", html);
    });

    deleteButton();
    editButton();
  }
}

// For Delete Button  
function deleteButton() {
  let list = document.querySelectorAll(".myButtonDelete");
  list.forEach(function (btn) {
    let par = btn.parentElement;
    btn.addEventListener("click", function () {
      let del = par.querySelector(".no").textContent;
      let newStore = par.querySelector(".store").textContent;
      if (newStore === "localStorage") {
        myLocalStorage(del);
      } else if (newStore === "sessionStorage") {
        mySessionStorage(del);
      } else {
        myCookiesStorage(del);
      }
    });

    function myLocalStorage(del) {
      let b = JSON.parse(localStorage.getItem("Std_Info"));
      b.forEach(function (item, index) {
        if (del === item["Roll_No"]) {
          b.splice(index, 1);
          par.remove();
        }
      });
      localStorage.clear();
      let c = JSON.stringify(b);
      localStorage.setItem("Std_Info", c);
    }

    function mySessionStorage(del) {
      let b = JSON.parse(sessionStorage.getItem("Std_Info"));
      b.forEach(function (item, index) {
        if (del === item["Roll_No"]) {
          b.splice(index, 1);
          par.remove();
        }
      });
      sessionStorage.clear();
      let c = JSON.stringify(b);
      sessionStorage.setItem("Std_Info", c);
    }

    function myCookiesStorage(del) {
      let i = document.cookie.split("=");
      let b = JSON.parse(i[1]);
      b.forEach(function (item, index) {
        if (del === item["Roll_No"]) {
          b.splice(index, 1);
          par.remove();
        }
      });
      let c = JSON.stringify(b);
      document.cookie = `Std_Info=${c}`;
    }
  });
}

// For Edit Button
function editButton() {
  let reNew = document.querySelectorAll(".myButtonEdit");
  let u;
  reNew.forEach(function (btnEdit) {
    let par = btnEdit.parentElement;
    btnEdit.addEventListener("click", function () {
      let myButton = document.getElementById("myButton");
      let editmyButton = document.getElementById("editmyButton");
      myButton.style.display = "none";
      editmyButton.style.display = "block";
      let del = par.querySelector(".no").textContent;
      let newStore = par.querySelector(".store").textContent;
      if (newStore === "localStorage") {
        u = myLocalStorageEdit(del);
        editmyButton.addEventListener("click", function () {
          rahulEdit(u);
          myButton.style.display = "block";
          editmyButton.style.display = "none";
          dictData();
          location.reload();
        });
      } else if (newStore === "sessionStorage") {
        u = mySessionStorageEdit(del);
        editmyButton.addEventListener("click", function () {
          rahulEdit(u);
          myButton.style.display = "block";
          editmyButton.style.display = "none";
          dictData();
          location.reload();
        });
      } else {
        u = myCookiesStorageEdit(del);
        editmyButton.addEventListener("click", function () {
          rahulEdit(u);
          myButton.style.display = "block";
          editmyButton.style.display = "none";
          dictData();
          location.reload();
        });
      }
    });
  });
}

// Edit Button For local-Storage
function myLocalStorageEdit(del) {
  let b = JSON.parse(localStorage.getItem("Std_Info"));
  let rahul;
  b.forEach(function (item, index) {
    if (del === item["Roll_No"]) {
      rahul = b[index];
      e = index;
    }
  });
  // localStorage.clear();
  let c = JSON.stringify(b);
  localStorage.setItem("Std_Info", c);
  objectData(rahul);
  return e;
}

// Edit Button For session-Storage
function mySessionStorageEdit(del) {
  let b = JSON.parse(sessionStorage.getItem("Std_Info"));
  let rahul;
  b.forEach(function (item, index) {
    if (del === item["Roll_No"]) {
      rahul = b[index];
      e = index;
    }
  });
  // sessionStorage.clear();
  let c = JSON.stringify(b);
  sessionStorage.setItem("Std_Info", c);
  objectData(rahul);
  return e;
}

// Edit Button For cookies-Storage
function myCookiesStorageEdit(del) {
  let i = document.cookie.split("=");
  let b = JSON.parse(i[1]);
  let rahul;
  b.forEach(function (item, index) {
    if (del === item["Roll_No"]) {
      rahul = b[index];
      e = index;
    }
  });
  let c = JSON.stringify(b);
  document.cookie = `Std_Info=${c}`;
  objectData(rahul);
  return e;
}

function rahulEdit(u) {
  if (stuRoll.value != 0 && stuName.value != "" && stuSub.value != "") {
    let myObj = {
      Roll_No: stuRoll.value,
      Name: stuName.value,
      Subject: stuSub.value,
      Storage_type: stuStore.value,
    };
    console.log(myObj["Roll_No"], myObj["Name"], myObj["Subject"]);
    if (
      myObj["Storage_type"] === "localStorage" &&
      checkLocal(myObj["Roll_No"])
    ) {
      let a = JSON.parse(localStorage.getItem("Std_Info"));
      a[u] = myObj;
      let b = JSON.stringify(a);
      localStorage.setItem("Std_Info", b);
    } else if (
      myObj["Storage_type"] === "sessionStorage" &&
      checkLocal(myObj["Roll_No"])
    ) {
      let a = JSON.parse(sessionStorage.getItem("Std_Info"));
      a[u] = myObj;
      let b = JSON.stringify(a);
      sessionStorage.setItem("Std_Info", b);
    } else if (
      myObj["Storage_type"] === "cookies" &&
      checkLocal(myObj["Roll_No"])
    ) {
      let i = document.cookie.split("=");
      let b = JSON.parse(i[1]);
      b[u] = myObj;
      let c = JSON.stringify(b);
      document.cookie = `Std_Info=${c}`;
    } else {
      alert("Roll No already exist Please Fill Another Roll No");
    }
  }
  dispData();
}

function objectData(rahul) {
  stuRoll.value = rahul["Roll_No"];
  stuName.value = rahul["Name"];
  stuSub.value = rahul["Subject"];
  stuStore.value = rahul["Storage_type"];
}

function dictData() {
  stuRoll.value = "";
  stuName.value = "";
  stuSub.value = "";
  stuStore.value = "localStorage";
}

dispData();
xyz();
