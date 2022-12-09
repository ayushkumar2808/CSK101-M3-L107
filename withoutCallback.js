const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies(){
  console.log(cookies)
}

  // Progression 2: using setTimeout() - use 1000 units for time parameter
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
    
//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter
  function getnewCookies(){
    setTimeout(()=>{
      cookies.push(newCookie)
      let output = "";
      for(i=0;i<cookies.length;i++){
        output+=cookies[i].name+" "
      }
    
console.log(cookies)
      document.body.innerHTML = output;
    },2000);
  }
    
// Progression 4: calling functions
getCookies()
getallCookies()
getnewCookies()