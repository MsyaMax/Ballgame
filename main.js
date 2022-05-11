window.addEventListener('DOMContentLoaded', () => {
    const w = 35;
    const h = 35;

    function createBall(n) {
        for (let i = 0; n > i; i++) {
            // creating ball
            let ball = document.createElement('div');
            ball.classList.add('ballstyle');
            ball.style.width = w + 'px';
            ball.style.height = h + 'px';
            // valuing top and left properties for our ball 
            let width = window.innerWidth;
            let height = window.innerHeight;

            let x = Math.floor(Math.random() * (width - w));
            let y = Math.floor(Math.random() * (height - h));
            document.body.appendChild(ball);
            ball.style.left = `${x}px`;
            ball.style.top = `${y}px`;
        }
    };
    createBall(1);

})