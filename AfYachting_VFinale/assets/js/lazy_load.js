const images = document.querySelectorAll("[data-src]")

const imgOptions = {
    threshold: 0.30,
    rootMargin: "0px 0px 140px 0px"
};


function preloadImage(img) {
    const src = img.getAttribute("data-src")
    if (!src) {
        return
    }

    else {
        img.src = src
    }
}

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

        else {
            preloadImage(entry.target)
            imageObserver.unobserve(entry.target)

        }
    })
}, imgOptions)

images.forEach(image => {
    imageObserver.observe(image)
})