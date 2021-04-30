const layers = document.querySelectorAll(".layer")

document.addEventListener("mousemove", parallax);

function parallax(e)
{
    layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed")
        const x = (window.innerWidth - e.pageX * speed)/80
        const y = (window.innerHeight - e.pageY * speed)/80
        console.log(x,y)
        layer.style.transform =`translateX(${x}px) translateY(${y}px)`
    });    
}