const counter = document.querySelectorAll(".counter")

counter.forEach((current) => {

    const updateCount = () => {
        const target = +current.getAttribute('data-target')
        const c = +current.innerHTML
        const increment = target / 200

        if (c < target) {
            current.innerHTML = `${Math.ceil(c + increment)}`
            setTimeout(updateCount, 15);
        }


    }

    updateCount()
})