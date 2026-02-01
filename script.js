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



function sendToWhatsApp() {
    // আপনার দেওয়া ID গুলো দিয়ে ভ্যালু নেওয়া
    const name = document.getElementById('wa_name').value.trim();
    const emailInput = document.getElementById('wa_email'); // এলিমেন্টটি ধরলাম স্টাইল করার জন্য
    const email = emailInput.value.trim();
    const details = document.getElementById('wa_details').value.trim();

    // ইমেইল চেক করার নিয়ম (Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ১. খালি ঘর চেক করা
    if (name === "" || email === "" || details === "") {
        alert("আরে ভাই, সব ঘর পূরণ করুন!");
        return; // এখানেই থেমে যাবে
    }

    // ২. ইমেইল ভ্যালিডেশন (এটিই আপনার মূল চাওয়া)
    if (!emailPattern.test(email)) {
        alert("Incorrect email! Please enter a correct email.।"); // ওয়ার্নিং দেখাবে
        emailInput.style.borderColor = "red"; // বক্স লাল করবে
        emailInput.focus(); // কার্সার ইমেইল বক্সে নিয়ে যাবে
        return; // এটি অত্যন্ত জরুরি, যাতে কোড আর নিচে না নামে
    }

    // ৩. সব ঠিক থাকলে বক্সের বর্ডার আগের মতো করে দেওয়া
    emailInput.style.borderColor = "#1a1e1e"; 

    // ৪. হোয়াটসঅ্যাপে পাঠানোর লজিক
    const phoneNumber = "8801887041612";
    const message = "নতুন ইনকোয়ারি:%0A" + 
                    "👤 নাম: " + encodeURIComponent(name) + "%0A" + 
                    "📧 ইমেইল: " + encodeURIComponent(email) + "%0A" + 
                    "📝 বিস্তারিত: " + encodeURIComponent(details);

    const whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;
    
    // ৫. নতুন ট্যাবে ওপেন করা
    window.open(whatsappURL, '_blank');
}






