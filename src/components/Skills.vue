<template>
  <section class="my-skills" id="skills">
    <div class="my-skills-container">
      <div class="wrapper">
        <div class="title">
          <div class="aboutHeader">
            <div class="spanAbout">
              <span>| </span>
              <p>Technical</p>
            </div>
            <h2>SKILLS</h2>
          </div>
        </div>
        <div class="skillsContainer">
          <figure class="skillsLogo html">
            <i class="devicon-html5-plain" aria-hidden="true"></i>
            <figcaption>HTML5</figcaption>
          </figure>
          <figure class="skillsLogo javascript">
            <i class="devicon-javascript-plain" aria-hidden="true"></i>
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure class="skillsLogo sass">
            <i class="devicon-sass-original" aria-hidden="true"></i>
            <figcaption>SASS</figcaption>
          </figure>
          <figure class="skillsLogo css">
            <i class="devicon-css3-plain" aria-hidden="true"></i>
            <figcaption>CSS3</figcaption>
          </figure>
          <figure class="skillsLogo github">
            <i class="devicon-github-plain" aria-hidden="true"></i>
            <figcaption>Github</figcaption>
          </figure>
          <figure class="skillsLogo git">
            <i class="devicon-git-plain" aria-hidden="true"></i>
            <figcaption>Git</figcaption>
          </figure>
          <figure class="skillsLogo jquery">
            <i class="devicon-jquery-plain" aria-hidden="true"></i>
            <figcaption>jQuery</figcaption>
          </figure>
          <figure class="skillsLogo visualstudio">
             <i class="devicon-vuejs-plain"></i>
            <figcaption>Vue.js</figcaption>
          </figure>
          <figure class="skillsLogo react">
            <i class="devicon-react-original" aria-hidden="true"></i>
            <figcaption>React</figcaption>
          </figure>
          <figure class="skillsLogo firebase">
            <img src="../assets/icon-firebase.svg" alt="firebase icon" aria-hidden="true" />
            <figcaption>Firebase</figcaption>
          </figure>
          <figure class="skillsLogo w3c">
            <img src="../assets/icon-w3c.svg" alt=" w3c icon" aria-hidden="true" />
            <figcaption>Web Accessibility</figcaption>
          </figure>
          <figure class="skillsLogo responsive">
            <img
              src="../assets/icon-tablet-phone-and-browser.svg"
              alt="responsiveness icon"
              aria-hidden="true"
            />
            <figcaption>Responsive Websites</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Skills',
  props: {
  }
}
</script>

<style lang="scss" scoped>

.my-skills {
  background-color: $primary;
  padding-bottom: 2rem;
  min-height: 92vh;
  h2 {
    color: white;
    padding: 5% 0;
    text-align: center;
  }
  p {
    color: $primary;
  }
  span {
    color: $green;
  }
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $black;
  align-items: flex-end;
  position: relative;
  margin-bottom: 8%;
  padding-top: 3rem;
  .aboutHeader {
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: $charcoal;
    padding-top: 1rem;
  }
}
.spanAbout {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
  justify-content: flex-end;
  span {
    font-size: 2.5rem;
    font-weight: 100;
    color: $primary;
  }
  p {
    margin: 0 1rem;
    font-size: 1.2rem;
  }
}

.my-skills-container {
  background-color: $notwhite;
  padding-bottom: 4rem;
}

.skillsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.skillsLogo {
  width: 25%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  figcaption {
    color: $charcoal;
    text-align: center;
    font-size: 1.1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.skillsLogo i {
  font-size: 5rem;
  color: $primary;
}

.skillsLogo img {
  width: 80px;
  height: 80px;
}
@media (max-width: 850px) {
  .skillsLogo i {
    font-size: 5rem;
  }
  .skillsLogo img {
    height: 80px;
    width: 80px;
  }
}
@media (max-width: 600px) {
  .skillsLogo {
    width: 33.33%;
  }
}
@media (max-width: 470px) {
  .skillsLogo i {
    font-size: 4rem;
  }
  .skillsLogo img {
    height: 64px;
    width: 64px;
  }
  .used li {
    margin: 0.5rem;
  }
}
</style>