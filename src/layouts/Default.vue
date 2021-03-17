<template>
  <div class="layout h-full">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700&display=swap");

body,
html {
  height: 100%;
}

body {
  background-color: black;
  color: white;

  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
