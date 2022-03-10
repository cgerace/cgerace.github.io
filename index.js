const introFade = () => {
    let intro = document.getElementById('intro').style;
    var spaceship = document.getElementById("spaceshipIntro");
    var pos = spaceship.style.top.slice(0, 3);

    intro.opacity = 1;
    const fade = () => {
        ((intro.opacity -= .01) < 0) ? intro.display = 'none':setTimeout(fade, 30)
        spaceship.style.top = (pos -= 5) + 'px';
    }

    fade();
  }

introFade();

const flyingSaucerChangeColor = () => {
    const elem = document.getElementById('flyingsaucer');
    const id = setInterval(changeColor, 750);
    let counter = 0;
    function changeColor() {
        counter++;
        if (counter === 1) {
            elem.src = './public/assets/images/Flying Saucer Red Lights v2.png'
        }
        else if (counter === 2) {
            elem.src = './public/assets/images/Flying Saucer Blue Lights v2.png'
        }
        else if (counter === 3) {
            elem.src = './public/assets/images/Flying Saucer Green Lights v2.png'
            counter = 0;
        }
    }
}

const astronautWave = () => {
    const elem = document.getElementById('astronaut');
    const id = setInterval(wave, 750);
    let counter = 0;
    function wave() {
        counter++;
        if (counter % 2 === 0) {
            elem.src = './public/assets/images/Astronaut Wave Shadow.png'
        }
        else {
            elem.src = './public/assets/images/Astronaut Shadow.png'
        }
    }
}

const spaceShipRock = () => {
    const elem = document.getElementById('spaceship');
    const id = setInterval(rock, 1000);
    let counter = 0;
    function rock() {
        counter++;
        if (counter % 2 === 0) {
            elem.style.transform = 'rotate(10deg)';
        }
        else {
            elem.style.transform = 'rotate(-10deg)';
        }
    }
}


flyingSaucerChangeColor();
astronautWave();
spaceShipRock();



let planets = document.getElementById('planets').style;
let main = document.getElementById('main').style;

planets.opacity = +0;
main.opacity = +0;

// app.opacity = +0;

const appFade = () => {

    const planetFade = () => {
        ((planets.opacity = +planets.opacity + 0.005) >= 0.35) ? planets.opacity = 0.35 : setTimeout(planetFade, 10)
    }

    const mainFade = () => {
        ((main.opacity = +main.opacity + 0.005) >= 1) ? main.opacity = 1 : setTimeout(mainFade, 10)
    }

    planetFade();
    mainFade();
    
  }

 setTimeout(appFade, 3500);
