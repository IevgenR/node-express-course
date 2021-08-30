const express = require ('express');
const app = express();
app.use(express.json());

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


  app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
      success: true,
      message: 'got one user',
      user: req.params.id
    })
  })


 app.post('/login', function(req,res){


  if (req.body.username="p1") {
    res.json({
      success: true,
      message: 'successfully got users '+req.body.username+' Nice!',
      users: req.body.username
    });
  }
  
  
  console.log("Send responce to JSON with", req.params.id);
  
  
});


app.listen(8000, function test(){console.log(
"Running 8000 port") ;
});
