<template>
    <section class="about-me" id="about">
        <div class="about-container">
            <div class="wrapper">
            <div class="title">
                <div class="aboutHeader">
                <div
                    class="spanAbout"
                    data-aos="zoom-out-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    <span>| </span>
                    <p>who am i</p>
                </div>
                <h2
                    data-aos="zoom-out-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    HELLO
                </h2>
                </div>
            </div>
            <div class="aboutMainContainer">
                <figure
                data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                >
                <div class="frame"></div>
                <img
                    src="../assets/profile.jpg"
                    class="profiledesktop"
                    alt="diego ribeiro profile picture"
                />
                <img
                    src="profilemobile.png"
                    class="profilemobile"
                    alt="diego ribeiro profile picture"
                />
                </figure>
                <div
                class="aboutText"
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                >
                <p>
                    I’m Diego, a Toronto-based Full stack developer with an Engineering background. 
                    I excel in developing innovative and creative solutions to build responsive web applications
                    that are accessible for all users.
                </p>
                <p>
                    I’m
                    constantly challenging myself to think outside the box to try
                    to learn something new and bring innovation to all my
                    projects.
                </p>
                <p>
                    As for my life outside coding. I love
                    spending time with my dachsund and on those cold
                    winter days you can count that I’m indoors playing PS5 or watching a Soccer match(TFC!).
                </p>
                <div class="downloadDiv">
                    <a
                    href="assets/DiegoRibeiroResume.pdf"
                    download
                    class="download"
                    >Download Resume</a
                    >
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'About',
  props: {
  }
}
</script>

<style lang="scss" scoped>
// aboutme
.about-me {
  background-color: $primary;
  height: calc(100vh - 72px);
}
.about-container {
  background-color: $notwhite;
  padding: 3rem 0 3rem 0;
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

.aboutMainContainer {
  display: flex;
}

.about-me figure {
  width: 40%;
  position: relative;
}

.frame {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 0;
  border: 3px solid $primary;
}

.aboutText {
  width: 60%;
  padding: 1rem;
  margin-left: 5%;
  p {
    font-size: 1.25rem;
    line-height: 2rem;
  }
}

.aboutMainContainer img {
  object-fit: cover;
}

.downloadDiv {
  display: flex;
  justify-content: center;
}

a.download {
  margin-top: 1rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  background-color: $primary;
  text-align: center;
  width: 16rem;
  border-radius: 15px;
  box-shadow: 2.5px 2.5px #888888;
  padding: 0.7rem;
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

a.download:hover {
  background-color: $charcoal;
  color: white;
}
@media (max-width: 850px) {
  .aboutMainContainer {
    flex-wrap: wrap;
    figure {
      width: 30rem;
      margin: 0 auto;
    }
    .aboutText {
      margin-top: 5%;
      width: 100%;
    }
  }
}
@media (max-width: 600px) {
  .aboutMainContainer {
    figure {
      width: 25rem;
    }
  }

  .aboutMainContainer figure {
    width: 20rem;
  }
  button {
    border-radius: 15px;
  }
}
@media (max-width: 470px) {
  .aboutMainContainer figure {
    width: 19rem;
  }
  .about-me-container {
    padding: 2rem 0rem 12rem 0rem;
  }
  .used li {
    margin: 0.5rem;
  }
}
@media (max-width: 355px) {
  .aboutMainContainer figure {
    width: 17rem;
  }
}
</style>