const express = require ('express');
const app = express();
const mockUserData=[
  {name:'Mark'},
  {name:'Jill'}
  ]
  app.get('/users', function(req,res){
     res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
     });
     console.log("Send responce to JSON");
     
  });

app.listen(8000, function test(){console.log(
"Running 8000 port") ;
});
