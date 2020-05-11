<template>
  <div class="home">
    <div class="row header m-0">
      <h1>Get Premium free for 1 month</h1>
      <h2>Just EGP 49.99/month after. Cancel anytime.</h2>
      <router-link
        class="costum-btn"
        id="premium-btn"
        to="/GetPremium"
        tag="button"
        testid="log in link"
      >
        Get Premium
      </router-link>
    </div>
    <div class="row justify-content-center benefits m-0">
      <!-- <div> -->
      <h1>Why go Premium?</h1>
      <!-- </div> -->
      <div class="col-sm-6 col-md-3 col-lg-3 benefits-card">
        <div class="benefits-img img1"></div>
        <div class="benefits-desc">
          <header>Download music.</header>
          <p>Listen anywhere.</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 benefits-card">
        <div class="benefits-img img2"></div>
        <div class="benefits-desc">
          <header>No ad interruptions.</header>
          <p>Enjoy nonstop music.</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 benefits-card">
        <div class="benefits-img img3"></div>
        <div class="benefits-desc">
          <header>Play any song.</header>
          <p>Even on mobile.</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 benefits-card">
        <div class="benefits-img img4"></div>
        <div class="benefits-desc">
          <header>Unlimited skips.</header>
          <p>Just hit next.</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center card-div m-0">
      <div class="card">
        <div class="card-section">
          <h3>Spotify Premium</h3>
          <span class="big">EGP 49.99</span>
          <span class="small">/ month</span>
          <p>1 month free</p>
        </div>
        <div class="separator"></div>
        <div class="card-section">
          <ul>
            <li>
              <i class="fa fa-check"></i>
              Play any song
            </li>
            <li>
              <i class="fa fa-check"></i>
              Listen offline
            </li>
            <li>
              <i class="fa fa-check"></i>
              No ad interruptions.
            </li>
            <li>
              <i class="fa fa-check"></i>
              Unlimited skips High audio quality
            </li>
            <li>
              <i class="fa fa-check"></i>
              High audio quality
            </li>
          </ul>
        </div>
        <div class="separator"></div>
        <div class="row justify-content-center card-section m-0">
          <router-link
            class="costum-btn"
            id="premium-btn"
            to="/GetPremium"
            tag="button"
            testid="log in link"
          >
            Get Premium
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: calc(70vh);
  color: white;
  background-color: rgb(80, 155, 245);
  background-image: url("../assets/premium_dancer.png");
  background-repeat: no-repeat;
  background-size: 460px;
  background-position-x: 95%;
  h1 {
    width: 100%;
    line-height: 1.2;
    font-size: 80px;
    margin: 10% 0 0 7%;
    font-weight: 900;
    max-width: 100%;
    width: auto;
    display: inline-block;
  }
  h2 {
    width: 100%;
    margin: 0 0 0 7%;
  }
  #premium-btn {
    background-color: #1db954;
    width: 224px;
    height: 50px;
    justify-self: center;
    transition-duration: 33ms;
    margin: 0 0 0 7%;
  }
  #premium-btn:hover {
    background-color: #1ed760;
    transform: scale(1.04);
  }
}
.benefits {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px 5%;
  justify-content: center;
  h1 {
    font-size: 48px;
    line-height: 1.3;
    letter-spacing: -0.015em;
    font-weight: 900;
    text-align: center;
    width: 100%;
  }
}

.benefits-card {
  width: 400px;
  height: 270px;
  margin-top: 5%;
}
.img1 {
  background: url("../assets/benefit_1.png");
}
.img2 {
  background: url("../assets/benefit_2.png");
}
.img3 {
  background: url("../assets/benefit_3.png");
}
.img4 {
  background: url("../assets/benefit_4.png");
}

.benefits-img {
  position: relative;
  width: 100%;
  height: 142px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 142px 142px;
  align-items: center;
}
.benefits-desc {
  header {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 21px;
    text-align: center;
  }
  p {
    text-align: center;
    line-height: 1.5;
    font-size: 16px;
  }
}

.card-div {
  height: calc(100vh);
}
.card {
  height: 440px;
  width: 600px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
  margin: 10%;
}
.separator {
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  border-bottom: 1px solid rgb(217, 218, 220);
}
.card-section {
  margin: 0%;
  padding: 3%;
  p {
    color: rgb(145, 145, 145);
    font-size: 12px;
    margin-bottom: 0px;
    height: 29px;
  }
  #premium-btn {
    background-color: #1db954;
    width: 94%;
    justify-self: center;
    transition-duration: 33ms;
    margin: 0%;
  }
  #premium-btn:hover {
    background-color: #1ed760;
    transform: scale(1.04);
  }
}
ul {
  margin: 0%;
  padding: 0%;
  list-style-type: none;
  li {
    font-weight: 600;
  }
}
h3 {
  font-size: 24px;
  font-weight: 500;
  margin: 20px 0px 0px 0;
  line-height: 1.4;
}
.big {
  font-size: 32px;
  font-weight: 900;
  direction: ltr;
  margin: 5px 5px 0 0;
}
.small {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1;
}
@media screen and (max-width: 1000px) {
  .header {
    height: calc(90vh);
    background-size: 0px;
    h1 {
      font-size: 50px;
      font-weight: 700;
      margin: 20% 0 0 7%;
    }
    h2 {
      font-size: 30px;
      font-weight: 600;
      width: 100%;
      margin: 0 0 0 7%;
    }
    #premium-btn {
      width: 94%;
    }
  }
  .card {
    height: 80%;
    width: 100%;
  }
}
</style>
<script>
/**
 * Body of home page for premium functionalities
 * @displayName HomeBody
 * @example [none]
 */
</script>
