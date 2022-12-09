const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function getCookies(){
  console.log(cookies)
}
getCookies()

  // Progression 2: using setTimeout() 


  function getallCookies(){
    setTimeout(()=>{
      let output = "";
      for(i=0;i<cookies.length;i++){
        output+=cookies[i].name+" "
      }
console.log(cookies)
      document.body.innerHTML = output;
    },1000);
  }
    getallCookies()
//Progression 3: Create a function to creat cookies

function createCookies(){
  setTimeout(()=>{
    cookies.push(newCookie)
    getCookies()
  },2000)
}

// Progression 5: calling function??
createCookies()