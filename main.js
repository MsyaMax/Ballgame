window.addEventListener('DOMContentLoaded', () => {
    const w = 30;
    const h = 30;
    let width = window.innerWidth - 14;
    let height = window.innerHeight - 14;
    // creating ball
    function createBall(n, x, y) {
        for (let i = 0; n > i; i++) {

            let ball = document.createElement('div');
            ball.classList.add('ballstyle');
            ball.style.width = w + 'px';
            ball.style.height = h + 'px';


            // valuing top and left properties for our ball 
            x = (x == undefined) ? Math.floor(Math.random() * (width - w)) : x;
            y = (y == undefined) ? Math.floor(Math.random() * (height - h)) : y;
            document.body.appendChild(ball);
            ball.style.left = `${x}px`;
            ball.style.top = `${y}px`;
        }
    };
    createBall(1);

    // animating the balls
    let balls = document.querySelectorAll('.ballstyle')

    for (let i = 0; i < balls.length; i++) {
        animator(i)
    }

    function animator(n) {
        let vx = Math.floor((Math.random() - 0.5) * 15);
        let vh = Math.floor((Math.random() - 0.5) * 15);

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

            requestAnimationFrame(animate);

        }
        animate()
    }

    // check clicking
    document.addEventListener('click', (event) => {
        createBall(1, event.clientX, event.clientY)
        balls = document.querySelectorAll('.ballstyle')
        animator(balls.length - 1)
    })
})