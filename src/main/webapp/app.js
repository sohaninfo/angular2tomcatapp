( function ()  { 

  var  HelloApp  =  
    ng . core 
    . Component ({ 
      selector :  'hello-app' , 
      templateUrl :  'app/hello.html' 
    }) 
    . Class ({ 
      constructor :  function ()  {
        this.name = "Sohan";
      },
      sayMyName: function() {
        console.log('My name is', this.name)
      } 
    }); 

  document . addEventListener ( 'DOMContentLoaded' ,  function ()  { 
    ng . platform . browser . bootstrap ( HelloApp ); 
  }); 

})(); 