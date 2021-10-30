<template>
  <header class="hero">
    <div class="wrapper">
      <div class="titleContainer">
        <div class="animate__animated animate__swing animate__slower animate__infinite dev-container">
          <i class="fab fa-dev dev icon-fontawesome"></i>
        </div>
        <div class="animate__animated animate__tada animate__slower animate__infinite computer-container">
          <i class="computer fas fa-desktop icon-fontawesome"></i>
        </div>
        <div>
          <h1>DIEGO</h1>
          <h2>Ribeiro</h2>
          <p>Full Stack Developer</p>
        </div>
        <div class="animate__animated animate__tada animate__slower animate__infinite code-container">
          <i class="fas fa-code code icon-fontawesome"></i>
        </div>
        <div class="animate__animated animate__tada animate__slower animate__infinite computer-container database-container">
          <i class="fas fa-database database icon-fontawesome"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import 'animate.css';

export default {
  name: 'Home',
  props: {
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
.wrapper {
  height: 100%;
  margin: 0 auto;
  width: 95%;
  max-width: 1200px;
}

header {
  height: calc(100vh - 72px);
  overflow: hidden;
  background-color: $background-green;
  p {
    font-size: 1.5rem;
    color: $purple;
    font-weight: bold;
    line-height: 7vh;
    margin: 0;
    margin-left: 0.5rem;
    margin-top: 1%;
  }
}
.firstCoffee {
  line-height: 10vh;
  margin-left: 0.7rem;
}

.titleContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(270deg);
  animation: goingBack 5s forwards;
  position: relative;
}

@keyframes goingBack {
  from {
    transform: rotate(270deg);
  }
  50% {
    transform: rotate(270deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.computer-container {
  position: absolute;
  left: 70%;
  top: 23%;
  .computer {
    animation: floating3 2s infinite;
    font-size: 3rem;
    color: #9BAEBC;
  }
}

.dev-container {
  position: absolute;
  left: 17%;
  top: 18%;
  .dev {
    bottom: 5rem;
    animation: floating3 2.5s infinite;
    font-size: 3.5rem;
    color: lightskyblue;
  }
}
.code-container {
  position: absolute;
  left: 73%;
  top: 60%;
  .code {
    bottom: 5rem;
    animation: floating2 2.5s infinite;
    font-size: 3.5rem;
    color: #DEB887;
  }
}

.database-container {
  position: absolute;
  left: 18%;
  top: 76%;
  .database {
    bottom: 5rem;
    animation: floating1 2.5s infinite;
    font-size: 3.5rem;
    color: #00C680;
  }
}

@keyframes floating1 {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(15px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}

@keyframes floating2 {
  from {
    transform: translate(15, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(15, -0px);
  }
}

@keyframes floating3 {
  from {
    transform: translate(15, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(35, 40px);
  }
}
@media (max-width: 600px) {
  .titleContainer {
    h1 {
      font-size: 15vh;
    }
    h2 {
      font-size: 6vh;
      line-height: 1vh;
    }
    .firstCoffee {
      font-size: 6vh;
      line-height: 6vh;
    }
  }
  .titleContainer div .icon-fontawesome {
    font-size: 2rem;
  }
  .dev-container {
    top: 26%;
  }
  .computer-container {
    top: 23%;
  }
  .database-container {
    top: 65%;
  }
  .code-container {
    top: 68%;
  }

}
@media (max-width: 470px) {
  .titleContainer {
    h1 {
      font-size: 11vh;
      line-height: 14vh;
    }
    h2 {
      font-size: 6vh;
    }
    .firstCoffee {
      line-height: 5vh;
      font-size: 6vh;
    }
  }
}

</style>
