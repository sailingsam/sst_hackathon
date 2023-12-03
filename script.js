document.addEventListener("DOMContentLoaded", function () {
    const testimonialsSection = document.getElementById("testimonials");
    const testimonialsContainer = document.querySelector(".testimonials-container");
    const circles = document.querySelectorAll(".circle");
    const testimonials = document.querySelectorAll(".testimonial");

    // Smooth scroll to a specific testimonial
    const scrollToTestimonial = (index) => {
        const testimonial = testimonials[index];
        testimonial.scrollIntoView({
            behavior: "smooth"
        });
    };

    // Add click event listeners to navigation circles
    circles.forEach((circle, index) => {
        circle.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default scrolling behavior
            scrollToTestimonial(index);
        });
    });

    // Update navigation circles based on scroll position
    const updateNavigationCircles = () => {
        const scrollPosition = testimonialsSection.scrollTop;
        const testimonialHeights = Array.from(testimonials).map((testimonial) => testimonial.clientHeight);

        let cumulativeHeight = 0;
        let currentTestimonialIndex = 0;

        for (let i = 0; i < testimonialHeights.length; i++) {
            cumulativeHeight += testimonialHeights[i];
            if (scrollPosition < cumulativeHeight) {
                currentTestimonialIndex = i;
                break;
            }
        }

        // Highlight the corresponding circle
        circles.forEach((circle, index) => {
            if (index === currentTestimonialIndex) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    };

    // Add scroll event listener to update navigation circles
    testimonialsSection.addEventListener("scroll", updateNavigationCircles);

    // Initialize navigation circles
    updateNavigationCircles();
});
