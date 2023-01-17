
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>DuckNha Checker</title>
    <style>@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Noto+Sans|Open+Sans:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

*{

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
  box-sizing: border-box;
}
body{
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
  justify-content: center;
  background: url(bg.jpg);
  background-size: cover;
  background-position: center;
}
.container{
  position: relative;
  width: 400px;
  background: white;
  padding: 60px 40px;
}
header{
  font-size: 40px;
  margin-bottom: 60px;
  font-family: 'Montserrat', sans-serif;
}
.input-field input{
  height: 100%;
  width: 100%;
  border: 1px solid silver;
  padding-left: 15px;
  outline: none;
  font-size: 19px;
  transition: .4s;
}
input:focus{
  border: 1px solid #1DA1F2;
}
.input-field label, span.show{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.input-field label{
  left: 15px;
  pointer-events: none;
  color: grey;
  font-size: 18px;
  transition: .4s;
}
span.show{
  right: 20px;
  color: #111;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  visibility: hidden;
  font-family: 'Open Sans', sans-serif;
}
input:valid ~ span.show{
  visibility: visible;
}
input:focus ~ label,
input:valid ~ label{
  transform: translateY(-33px);
  background: white;
  font-size: 16px;
  color: #1DA1F2;
}
.btn a{
  position: relative;
  color: #f5f5f5;
  height: 70px;
  width: 220px;
  display: block;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;
  background-image: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
}
.btn a:hover{
  animation: rotate 0.4s linear infinite;
}
@keyframes rotate {
  100%{
    filter: hue-rotate(-360deg)
  }
}
.btn a span{
  height: 88%;
  width: 96%;
  background: #111;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  line-height: 62px;
  font-size: 25px;
  transform: translate(-50%, -50%);
}
.container .auth{
  margin: 35px 0 20px 0;
  font-size: 19px;
  color: grey;
}
.links{
  display: flex;
  cursor: pointer;
}
.facebook, .google{
  height: 40px;
  width: 100%;
  border: 1px solid silver;
  border-radius: 3px;
  margin: 0 10px;
  transition: .4s;
}
.facebook:hover{
  border: 1px solid #4267B2;
}
.google:hover{
  border: 1px solid #dd4b39;
}
.facebook i, .facebook span{
  color: #4267B2;
}
.google i, .google span{
  color: #dd4b39;
}
.links i{
  font-size: 23px;
  line-height: 40px;
  margin-left: -90px;
}
.links span{
  position: absolute;
  font-size: 17px;
  font-weight: bold;
  padding-left: 8px;
  font-family: 'Open Sans', sans-serif;
}
.signup{
  margin-top: 50px;
  font-family: 'Noto Sans', sans-serif;
}
.signup a{
  color: #3498db;
  text-decoration: none;
}
.signup a:hover{
  text-decoration: underline;
}</style>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  </head>
  <body>
    <div class="container">
         <div class="btn">
      <center><a href="https://subsieuleuytin.tk/HOME"><span>Tiếp Tục</span></a></center>
    </div>
  </body>
</html>