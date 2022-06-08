<template>
  <nav>
    <router-link to="/">CesiEats</router-link>

    <input placeholder="Restaurant, type, ..." type="text">
    <input placeholder="Adresse" type="text">
    <div class="dropdown">
      <span>Account</span>
      <div class="dropdown-link">
        <router-link to="/account">Mon compte</router-link>
        <router-link to="/orders">Commandes</router-link>
        <router-link to="/orders">Déconnexion</router-link>
      </div>
    </div>

    <router-link to="/cart">Panier</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  box-shadow: 0px 10px 10px -3px grey;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-link {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-link {
  display: flex;
  flex-direction: column;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
