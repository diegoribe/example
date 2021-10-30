<template>
    <section class="mywork" id="projects">
        <div class="work-container">
            <div class="wrapper">
            <div
                class="myworkTitle"
                data-aos="zoom-out-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
            >
                <div class="myworkHeader">
                <div class="spanWork">
                    <span>| </span>
                    <p>Projects</p>
                </div>
                <h2>MY WORK</h2>
                </div>
            </div>
            <div class="projects">
                <ul>
                <li>
                    <div
                    class="figureContainer"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <figure class="desktop">
                        <img src="../assets/speed21together.png" alt="speed 21 front page" />
                    </figure>
                    </div>
                    <div
                    class="projectDescriptionRight"
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <h3>SPEED 21</h3>
                    <p>
                        Built using React & Firebase, Speed 21 is a Fast Paced
                        Blackjack Game with a little time twist. Try your luck and
                        see if you can reach the first place of the scoreboard.
                    </p>
                    <ul class="used">
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS3</li>
                        <li>API</li>
                        <li>JavaScript</li>
                        <li>Firebase</li>
                        <li>Responsive Design</li>
                    </ul>
                    <div class="alinks">
                        <a
                        href="https://juandiegocodes.github.io/diego-ribeiro-project-5/"
                        target="_blank"
                        >View Live</a
                        >
                        <a
                        href="https://github.com/juandiegocodes/diego-ribeiro-project-5"
                        target="_blank"
                        >GitHub</a
                        >
                    </div>
                    </div>
                </li>
                <li>
                    <div
                    class="projectDescriptionLeft"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <h3>FILM BUFF</h3>
                    <p>
                        Made with a group of four, this app will suggest a foreign
                        Movie based on an English movie inputted by the user.
                        Built using React, Firebase and the movie database API
                    </p>
                    <ul class="used">
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS3</li>
                        <li>API</li>
                        <li>JavaScript</li>
                        <li>Firebase</li>
                        <li>Responsive Design</li>
                        <li>Group Programming</li>
                    </ul>
                    <div class="alinks">
                        <a
                        href="https://filmbuff-a0153.firebaseapp.com"
                        target="_blank"
                        >View Live</a
                        >
                        <a
                        href="https://github.com/DiegoNeelKanuJenelle/project-6-film-buff"
                        target="_blank"
                        >GitHub</a
                        >
                    </div>
                    </div>
                    <div
                    class="figureContainer"
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <figure class="desktop">
                        <img src="../assets/filmbufftogether.png" alt="" />
                    </figure>
                    </div>
                </li>
                <li>
                    <div
                    class="figureContainer"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <figure class="desktop">
                        <img
                        src="../assets/wordstormtogether.png"
                        alt="speed 21 front page"
                        />
                    </figure>
                    </div>
                    <div
                    class="projectDescriptionRight"
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <h3>WORD STORM</h3>
                    <p>
                        Built using jQuery and Javascript in the third week of
                        bootcamp, this might be my favorite project so far. A
                        typing game where the user has to enter the word before it
                        reaches the bottom of the screen. Remember to look at the
                        clock and match as many words as possible in two minutes.
                    </p>
                    <ul class="used">
                        <li>jQuery</li>
                        <li>HTML</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Responsive Design</li>
                    </ul>
                    <div class="alinks">
                        <a
                        href="https://wordstorm.idiego.tech/"
                        target="_blank"
                        >View Live</a
                        >
                        <a
                        href="https://github.com/juandiegocodes/diegoRibeiroProjectThree"
                        target="_blank"
                        >GitHub</a
                        >
                    </div>
                    </div>
                </li>
                <li>
                    <div
                    class="figureContainer"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <figure class="desktop">
                        <img
                        src="../assets/hangrytummytogether.png"
                        alt="speed 21 front page"
                        />
                    </figure>
                    </div>
                    <div
                    class="projectDescriptionRight"
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    >
                    <h3>HANGRY TUMMY</h3>
                    <p>
                        A responsive Photoshop conversion. Coded using floats and
                        CSS.
                    </p>
                    <ul class="used">
                        <li>HTML</li>
                        <li>CSS3</li>
                        <li>Sass</li>
                        <li>Responsive Design</li>
                    </ul>
                    <div class="alinks">
                        <a
                        href="https://hangrytummy.idiego.tech/"
                        target="_blank"
                        >View Live</a
                        >
                        <a
                        href="https://github.com/juandiegocodes/diego-ribeiro-project-one"
                        target="_blank"
                        >GitHub</a
                        >
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Work',
  props: {
  }
}
</script>

<style lang="scss" scoped>
.work-container {
  background-color: #f7f7f7;
  padding: 3rem 0 3rem 0;
  margin-bottom: 2rem;
}

.mywork {
  background-color: $primary;
  padding-bottom: 2rem;
}

.myworkTitle {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $black;
  align-items: flex-end;
  position: relative;
  margin-bottom: 4%;
  .myworkHeader {
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: $charcoal;
    padding-top: 1rem;
  }
}

.spanWork {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
  justify-content: center;
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

.projects ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.projects li {
  border-radius: 15px;
  display: flex;
  margin: 5rem 0 8rem 0;
  padding: 2rem 0;
  align-items: center;
}

.projects {
  padding-top: 2rem;
}

.figureContainer {
  width: 50%;
  position: relative;
}

.projectDescriptionLeft {
  width: 50%;
  margin-right: 5%;
  text-align: left;
  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    background-color: $primary;
    text-align: center;
    width: 40%;
    border-radius: 15px;
    padding: 1rem;
  }
}

.projectDescriptionRight {
  width: 50%;
  margin-left: 5%;
  text-align: left;
  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    background-color: $primary;
    text-align: center;
    width: 40%;
    border-radius: 15px;
    padding: 1rem;
  }
}

.alinks {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
}

.alinks a {
  box-shadow: 2.5px 2.5px #888888;
}

.alinks a:hover {
  background-color: $charcoal;
  transition: all 0.25s;
}

.mobile {
  position: absolute;
  width: 25%;
  top: 43%;
  left: 83%;
}

.mobileLeft {
  position: absolute;
  width: 25%;
  top: 27%;
  left: 83%;
}

.used {
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  li {
    margin: 0;
    font-size: 1rem;
    padding: 1rem;
    margin: 0.5rem;
    border: $primary 2px dashed;
    border-radius: 0;
    color: black;
  }
}

@media (max-width: 1250px) {
  .projects .projectDescriptionLeft {
    width: 100%;
    order: 2;
    padding: 0 10rem;
    margin: 0;
    text-align: center;
  }

  .figureContainer {
    margin-bottom: 10%;
  }

  .projects .projectDescriptionRight {
    width: 100%;
    margin: 0;
    padding: 0 10rem;
    text-align: center;
  }
  .projects .figureContainer {
    width: 50%;
  }
  .projects li {
    justify-content: center;
    flex-wrap: wrap;
  }
  .projects ul {
    justify-content: center;
  }
}
@media (max-width: 850px) {
  .projects .projectDescriptionRight {
    padding: 0 5rem;
  }
  .projects .projectDescriptionLeft {
    padding: 0 5rem;
  }
  .projects .figureContainer {
    width: 60%;
  }
}

@media (max-width: 600px) {
  .projects .figureContainer {
    width: 80%;
  }
  .projects .projectDescriptionRight {
    padding: 0 0.25rem;
  }
  .projects .projectDescriptionLeft {
    padding: 0 0.25rem;
  }
}
@media (max-width: 470px) {
  .my-work-container {
    padding-bottom: 12rem;
  }
  .projectDescriptionLeft a {
    width: 45%;
  }
  .projectDescriptionRight a {
    width: 45%;
  }
  .projects li {
    margin: 2rem 0 5rem 0;
  }
  .used li {
    margin: 0.5rem;
  }
}
</style>