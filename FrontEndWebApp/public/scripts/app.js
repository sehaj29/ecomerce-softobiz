
//Javascript Code
//Client Side Javascript Code

var fetchData = () => {
  console.log("hello")
  // alert("button is clicked.....");
  let url = "http://localhost:8000/api/allproducts";
  //use Ajax mechanism to fetch data from  rest api
  //it is inbuilt function of jQuery Library
  $.ajax({
    dataType: "json",
    url: url,
    type: "GET",
    success: (data) => {
      console.log(data);
      let strData = JSON.stringify(data)
      //alert(strData);
      /* let para1=document.getElementById("para");
       para1.innerHTML=strData;
       */
      //DOM tree Manipulation Code at Client Side
      let productList = document.getElementById("productList");
      for (var i = 0; i < data.length; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(data[i].Product_name);
        node.appendChild(textnode);
        productList.appendChild(node);
        //<button onclick="details">details</button>
        let details = () => {
          location.replace("/details.html");
          getElementById("id").innerText = data[i].id
          getElementById("description").innerText = data[i].Product_desc

        }

      }
    }
  });
  //on receive data dynamically append products names to existing HTML page
  //DOM Manipulation
  console.log("Button is Clicked......");
}

var fetchProductDetails = () => {
  let apiError;
  let result;

  fetch("//localhost:8000/api/products/2", {
    // NEW - add a Content-Type header
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(async response => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
        console.log(result);
      } else {
        apiError = true;
      }
    })
    .catch(() => (apiError = true));
}

var onSellerLogin = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let credential = {};
  credential.username = username;
  credential.password = password;
  let loginUrl = "http://localhost:8000/api/seller/login";
  $.ajax({
    url: loginUrl,
    type: "POST",
    data: credential,
    success: (data, status) => {
      console.log("on successfull login");
      console.log(status);
      console.log(data);
      localStorage.setItem("receivedtoken", data);
      location.replace("/sellerdashboard.html")
    }
  });
}
var onCustomerLogin = () => {
  console.log("clogin")
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let credential = {};
  credential.username = username;
  credential.password = password;
  let loginUrl = "http://localhost:8000/api/customer/login";
  $.ajax({
    url: loginUrl,
    type: "POST",
    data: credential,
    success: (data, status) => {
      console.log("on successfull login");
      console.log(status);
      console.log(data);
      localStorage.setItem("receivedtoken", data);
      location.replace("/list.html")
    }
  });
}

var fetchOrders = () => {
  console.log("orders")
  let apiError;
  let result;
  let token = localStorage.getItem("receivedtoken");
  console.log(token);
  fetch("http://localhost:8000/api/myorders", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })
    .then(async response => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
        console.log("orders")
        console.log(result);
        let ordersList = document.getElementById("lstOrders");
        for (var i = 0; i < result.length; i++) {
          const node = document.createElement("li");
          const textnode = document.createTextNode(result[i].orderid + " " + result[i].status + " " + result[i].total_amount);
          node.appendChild(textnode);
          ordersList.appendChild(node);

        }
      } else {
        apiError = true;
      }
    })
    .catch(() => (apiError = true));
}



var changepassword = () => {

  var oldP = document.getElementById("oldp").value;
  var newP = document.getElementById("newp").value;
  var confirmP = document.getElementById("confirmp").value;
  let updateUrl = "http://localhost:8000/api/changePassword";
  let token = localStorage.getItem("receivedtoken");
  let credential = {};
  credential.password = oldP;
  credential.confirmpassword = confirmP;

  if (oldP != "" && newP != "" && confirmP != "") {
    if (oldP != newP) {
      if (newP == confirmP) {
        $.ajax({
          url: updateUrl,
          type: "PUT",
          data: credential,

          success: (data, status) => {
            console.log("on successfull update");
            console.log(status);
            console.log(data);
            if (status == "success") {
              location.replace("/index.html")
            }
          }
        })
      }
      else {
        alert("Confirm password is not same as you new password.");
        return false;
      }
    }
    else {
      alert(" This Is Your Old Password,Please Provide A New Password");
      return false;
    }
  }
  else {
    alert("All Fields Are Required");
    return false;
  }
}
var myproducts = () => {
  console.log("products")
  let apiError;
  let result;
  let token = localStorage.getItem("receivedtoken");
  console.log(token);
  fetch("http://localhost:8000/api/myproducts", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })
    .then(async response => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
        console.log("orders")
        console.log(result);
        let productList = document.getElementById("productList");
        console.log(result.length)

        for (var i = 0; i < result.length; i++) {
          console.log(i)
          const node = document.createElement("li");
          const textnode = document.createTextNode(result[i].id + " " + result[i].Product_name + " " + result[i].Product_desc + " " + result[i].Product_price + " " + result[i].quantity);
          node.appendChild(textnode);
          productList.appendChild(node);
        }
      } 
    })
    
}
