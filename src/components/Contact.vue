<template>
  <section class="contactMe" id="contact">
    <div class="wrapper">
      <div class="title contactTitle">
        <div class="aboutHeader">
          <div class="spanAbout">
            <span>| </span>
            <p>get in touch</p>
          </div>
          <h2>CONTACT</h2>
        </div>
      </div>
      <div class="formContainer">
        <form
          action="http://www.focuspocus.io/magic/rfdiego91@gmail.com"
          method="POST"
        >
          <label for="name" class="sr-only">Enter Your Name</label>
          <input
            type="text"
            id="name"
            class="name"
            placeholder="Name"
            name="name"
            requiprimary
          />
          <label for="email" class="sr-only">Enter Your Email</label>
          <input
            type="email"
            id="email"
            class="email"
            name="email"
            placeholder="Email"
          />
          <label for="areatext" class="sr-only">Enter your message</label>
          <textarea
            name="areatext"
            id="areatext"
            cols="20"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </form>
        <div class="social">
          <h4>Email</h4>
          <p>
            rfdiego91@gmail.com
          </p>
          <h4>Lets Connect</h4>
          <ul>
            <li>
              <a href="https://twitter.com/diegoribef" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="https://medium.com/@rfdiego91" target="_blank"
                ><i class="fab fa-medium"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ribeirojuan/"
                target="_blank"
                ><i class="fab fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a href="https://github.com/diegoribe" target="_blank"
                ><i class="fab fa-github"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Contact',
  props: {
  }
}
</script>

<style lang="scss" scoped>

// contact
.contactMe {
  padding: 2rem 0;
  span {
    color: $primary;
  }
}

.contactTitle {
  margin-bottom: 5rem;
}

.formContainer {
  padding: 3rem;
  display: flex;
  width: 100%;
  margin: 0 auto;
}
.contactFigures {
  position: absolute;
  left: 25px;
}

form {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem;
  border: $primary 3px solid;

  margin-right: 5%;
}

input {
  background: none;
  border: $charcoal 3px solid;
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.25rem;
}

textarea {
  background: none;
  border: none;
  font-size: 1.5rem;
  border: $charcoal solid 3px;
  margin: 0.5rem;
  padding: 0.5rem;
  resize: none;
}

.social p {
  padding-bottom: 0.5rem;
  font-size: 1.25rem;
  margin: 0;
}

.social h4 {
  padding-bottom: 0.5rem;
  padding-top: 1rem;
}

.social a {
  color: $charcoal;
}

.social a:hover {
  color: $primary;
}

.social {
  font-size: 1.5rem;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    list-style: none;
    padding: 0;
    padding-top: 7%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
}

.social {
  li {
    padding-right: 0.5rem;
    padding-bottom: 2rem;
    width: 50%;
    i {
      font-size: 6rem;
      padding: 0;
    }
    a {
      padding: 0;
    }
  }
}

.resume {
  width: 7rem;
  text-align: center;
  margin: 0.5rem auto;
  font-size: 1.5rem;
  background: $charcoal;
  padding: 0.25rem;
  color: white;
}
button {
  width: 7rem;
  text-align: center;
  margin: 0.5rem auto;
  font-size: 1.5rem;
  background: $charcoal;
  padding: 0.25rem;
  color: white;
}

button:hover {
  background-color: $primary;
  transition: all 0.5s;
}
@media (max-width: 850px) {
  .formContainer {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 100%;
    margin: 0;
  }
  .social {
    padding-top: 2rem;
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 600px) {
  .social {
    margin: 0;
  }

  form {
    margin-top: 5%;
    padding: 0;
    border: none;
  }

  input,
  textarea {
    border: $charcoal 4px solid;
    border-radius: 5px;
  }

  .contactTitle {
    margin-bottom: 3%;
  }
  .formContainer {
    padding: 0;
  }
  .social ul {
    justify-content: space-around;
  }
  .social li {
    width: 15%;
  }
  .social li i {
    font-size: 4rem;
  }

  button {
    border-radius: 15px;
  }
}
@media (max-width: 470px) {
  .used li {
    margin: 0.5rem;
  }
}
</style>
