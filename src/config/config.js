class Config {


      constructor(){
            this.server = {
                  ip:'http://localhost',
                  port:3000
            }
            
      }

      static getServer(){
            var config = new Config()
            return `${config.server.ip}:${config.server.port}`
      }
}



export default Config;
