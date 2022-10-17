<template>
  
  <body :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">

    <div id="app" :class="typeof weather.main != 'undefined'">
      <main>
        <div class="herotext">
          <div>App for the weather</div>
        </div>

        <div class="herosubtext">
          <div>
            <div id="second"> this weather app doesn't even do anything special. It is same as all other Apps.
            </div>
            <div id="third">
              It is also possible that this app may not function properly. Sorry about that.
            </div>
          </div>
          <div class="secondary-text">
            Made using <strong> Vue js </strong> and <strong> Open Weather API. </strong>
          </div>
        </div>

        <div class="search-box">
          <input type="text" class="search-bar" placeholder="Search" v-model="query" @keypress="fetchWeather">
        </div>

        <div class="result-showcase" v-if="typeof weather.main != 'undefined'">
          <div id="weather-name"><strong> {{weather.name}}, {{weather.sys.country}} </strong></div>
          <div id="temp">temperature : <strong> {{weather.main.temp}} </strong> feels like :
            <strong>{{weather.main.feels_like}}</strong>
          </div>
          <div class="humidity">Feeling humid? <strong>{{weather.main.humidity}}%</strong></div>
          <div class="rain">What's the weather like? It's : <strong> {{weather.weather[0].description}} </strong></div>
          <div class="video"></div>
          <div>video of me (real)</div>
        </div>
        
      </main>

    </div>


  </body>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
      console.log(this.weather);
    }
  }
}
</script>

<style>
/* fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

main {
  animation : move 0.75s ease-in-out;
  color: #121212b5;
}

.herotext {
  color: #121212;
  font-size: 44px;
  font-family: "poppins";
  margin-left: 25%;
  margin-top: 40px;
}

.herosubtext {
  font-size: 14px;
  font-family: "poppins";
  margin-left: 25%;
  margin-top: 15px;
  font-weight: 400;
  line-height: 1.5;
}

.secondary-text {
  margin-top: 10px;
}

#second {
  letter-spacing: 0.46px;
}

#third {
  letter-spacing: 0px;
}

.search-box {
  margin-left: 25%;
  margin-top: 15px;
}

.search-bar {
  padding: 10px;
  border-radius: 4px;
  border-width: 0.5px;
  border: 1px solid #00000033;
  background-color: white;
  transition: 0.2s;
}

.search-bar:focus {
  outline: none;
  border: 1px solid rgb(240, 85, 172);
  transition: 0.2s;
}

.result-showcase {
  padding: 0;
  font-family: 'poppins', montserrat;
  margin-left: 25%;
  font-size: 14px;
  margin-top: 10px;
}

#weather-name {
  font-size: 24px;
}
.video {
  width: 400px;
  height: 250px;
  background-size: 110%;
  background-image: url(./assets/dunke-dunkey.gif);
  margin-top: 10px;
}
.result-showcase{
  animation : move 0.75s ease-in-out;
  }
  @keyframes move {
  from {
    opacity: 0%;transform: translateY(42px);
  }

  to {
    opacity: 100%;transform: translateY(0px);
  }
}
</style>
