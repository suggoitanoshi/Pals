<template>
  <div class="home">
    <div class="cont-logo"><div class="logo"></div></div>
    <div class="container-home">
      <router-link to='/chat/Bobby' class="button-home">Chat as Bobby</router-link>
      <router-link to='/chat/Mom' class="button-home" >Chat as Mom</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
.home{
  display:flex;
  flex-flow:column;
  align-items:center;
  justify-items:center;
  justify-content:center;
  width : 100%;
  height : 100%;
}
.container-home{
	margin : 0;
  text-align:center;
  display : flex;
  flex-flow:column;
  align-items:center;
  justify-items:center;
  justify-content:center;
  background-color : #2053AF;
  border-radius : 10px;
  width : 30vw;
  height : 35vh;
}

.logo{
	background-image: url("./logo.png");
	background-size: contain;
	background-repeat: no-repeat;
	--scale: 0.2;
	min-width: calc(1247px * var(--scale));
	min-height: calc(617px * var(--scale));
	margin-bottom: 20px;
}

.cont-logo{
  width : 30vw;
  display:flex;
  align-items:flex-start;
}

.button-home{
  width : 13vw;
  padding : 20px 0px 20px 0px;
  background-color:#ffffff;
  border-radius : 5px;
  text-align:center;
  margin:10px 0px 10px 0px;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  color : #2053AF;
  font-size:24px;
}
</style>
