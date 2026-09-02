/* =================================
   TYPING SYSTEM
================================= */

const typing = document.getElementById("typing");

const words = [
    "WEB DEVELOPER",
    "FRONTEND DEVELOPER",
    "CREATIVE CODER",
    "DIGITAL BUILDER"
];

let word = 0;
let letter = 0;
let deleting = false;

function typeText() {

    const current = words[word];

    if (!deleting) {

        typing.textContent =
            current.substring(0, letter + 1);

        letter++;

        if (letter === current.length) {

            deleting = true;

            setTimeout(typeText, 1200);

            return;
        }

    } else {

        typing.textContent =
            current.substring(0, letter - 1);

        letter--;

        if (letter === 0) {

            deleting = false;

            word++;

            if (word >= words.length) {
                word = 0;
            }
        }
    }

    setTimeout(
        typeText,
        deleting ? 40 : 90
    );
}

typeText();


/* =================================
   CURSOR
================================= */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left =
        mouseX + "px";

    cursor.style.top =
        mouseY + "px";
});


function cursorAnimation() {

    ringX += (mouseX - ringX) * .12;
    ringY += (mouseY - ringY) * .12;

    cursorRing.style.left =
        ringX - 17 + "px";

    cursorRing.style.top =
        ringY - 17 + "px";

    requestAnimationFrame(cursorAnimation);
}

cursorAnimation();


/* =================================
   HOLOGRAM 3D MOUSE EFFECT
================================= */

const hologram =
    document.getElementById("hologram");

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX / window.innerWidth - .5);

    const y =
        (e.clientY / window.innerHeight - .5);

    const rotateY = x * 12;
    const rotateX = y * -12;

    hologram.style.transform =
        `rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
});


/* =================================
   MAGNETIC LINKS
================================= */

const buttons =
    document.querySelectorAll(".btn, nav a");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * .12}px,
                       ${y * .12}px)`;
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* =================================
   PARTICLE ENGINE
================================= */

const canvas =
    document.getElementById("canvas");

const ctx =
    canvas.getContext("2d");

let particles = [];

function resize() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}

resize();

window.addEventListener("resize", resize);


class Particle {

    constructor() {

        this.x =
            Math.random() * canvas.width;

        this.y =
            Math.random() * canvas.height;

        this.size =
            Math.random() * 1.5 + .2;

        this.speedX =
            (Math.random() - .5) * .3;

        this.speedY =
            (Math.random() - .5) * .3;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {
            this.speedX *= -1;
        }

        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {
            this.speedY *= -1;
        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(160,150,255,.45)";

        ctx.fill();

    }
}


function createParticles() {

    particles = [];

    const amount =
        Math.min(
            150,
            Math.floor(
                window.innerWidth / 8
            )
        );

    for (let i = 0; i < amount; i++) {

        particles.push(
            new Particle()
        );

    }
}

createParticles();

window.addEventListener(
    "resize",
    createParticles
);


function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p => {

        p.update();
        p.draw();

    });

    requestAnimationFrame(animate);
}

animate();


/* =================================
   CONSOLE SIGNATURE
================================= */

console.log(
    "%c DK CHAUDHARY ",
    "font-size:25px;font-weight:bold;"
);

console.log(
    "%c DIGITAL ARCHITECT ",
    "color:#8b7cff;font-size:12px;"
);
