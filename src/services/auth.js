class Auth {

      constructor(){
            
            
      }



 
  authenticate(cb) {
        localStorage.setItem('session','something'); 
    this.isAuthenticated = true
    setTimeout(cb, 100)
  }
  
  signout(cb) {
      localStorage.clear();
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }



}


