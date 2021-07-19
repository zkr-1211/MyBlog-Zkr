<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    // background: url(./assets/background.jpg) repeat;
  //    background: url(./assets/background.jpg) top repeat-x,url(./assets/background.jpg) bottom repeat-x,url(./assets/background.jpg) center;
  // background-attachment: fixed;

    body, html {
    width: 100%;
    word-wrap: break-word;
    background: url(./assets/background.png) top repeat-x,url(./assets/bottom.png) bottom repeat-x,url(./assets/back.jpg) center;
    background-attachment: fixed;
    transition: all .5s;

}
</style>
