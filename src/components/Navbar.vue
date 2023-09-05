<template>
  <nav>
    <div class="header">
      <router-link :to="{ name: 'HomePage' }">
        <img src="https://s3.amazonaws.com/static.digitrixllc.com/digitrixlogo.png" alt="logo" width="200" height="70" />
      </router-link>
      <p>Richard Rodriguez</p>
    </div>
    <div class="main-nav">
      <router-link :to="{ name: 'AddTask' }">+ Add New Task</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.363);
  padding: 0 30px;
}
.main-nav {
  text-align: right;
  margin: 10px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: darkslategray;
  font-size: 18px;
}
p {
  font-size: medium;
}
</style>
