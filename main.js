window.addEventListener('DOMContentLoaded', () => {
    const w = 35;
    const h = 35;
    let width = window.innerWidth - 14;
    let height = window.innerHeight - 14;

    function createBall(n) {
        for (let i = 0; n > i; i++) {
            // creating ball
            let ball = document.createElement('div');
            ball.classList.add('ballstyle');
            ball.style.width = w + 'px';
            ball.style.height = h + 'px';


            // valuing top and left properties for our ball 
            let x = Math.floor(Math.random() * (width - w));
            let y = Math.floor(Math.random() * (height - h));
            document.body.appendChild(ball);
            ball.style.left = `${x}px`;
            ball.style.top = `${y}px`;
        }
    };
    createBall(15);

    // animating the balls
    const balls = document.querySelectorAll('.ballstyle')



    for (let i = 0; i < balls.length; i++) {
        animator(i)
    }

    function animator(p) {

        let n = p
        let vx = Math.floor((Math.random() - 0.5) * 30);
        let vh = Math.floor((Math.random() - 0.5) * 30);

        function animate() {

            // set left proprety 
            let left = parseInt(getComputedStyle(balls[n]).getPropertyValue('left'));
            if (left + w >= width || left <= 0) {
                vx = -vx
            }
            left += vx
            balls[n].style.left = left + 'px';
            // set top proprety 

            let top = parseInt(getComputedStyle(balls[n]).getPropertyValue('top'));
            if (top + h >= height || top <= 0) {
                vh = -vh
            }
            top += vh
            balls[n].style.top = top + 'px';

            if (!isClick) {
                requestAnimationFrame(animate);
            }



        }
        animate()
    }
})

// check clicking 
let isClick = false;
document.addEventListener('click', (event) => {
    isClick = true;
    changeAnimate(event.clientX, event.clientY)
    return isClick;
})