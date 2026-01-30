<script>
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            // এনিমেশন ফাংশন (১০০০ মিলি-সেকেন্ড = ১ সেকেন্ড)
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, 1000);
                window.scrollTo(0, run);
                if (timeElapsed < 1000) requestAnimationFrame(animation);
            }

            // ইজিং ফাংশন (স্মুথ মুভমেন্টের জন্য)
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});
</script>
