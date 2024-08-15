const svg1=document.querySelector("#svg1");
const svg2=document.querySelector("#svg2");
const svg3=document.querySelector("#svg3");

svg1.addEventListener("click", () => {
    const mydiv = document.querySelector("#progress");
    let currentWidth = parseFloat(getComputedStyle(mydiv).width);
    console.log(currentWidth)
    let parentWidth = parseFloat(getComputedStyle(mydiv.parentElement).width);
    console.log(parentWidth)
  
    let newWidth = (currentWidth / parentWidth) * 100 + 33.3; // Increase by 33%
    if (newWidth > 100) newWidth = 100; // Ensure it doesn't exceed 100%
    mydiv.style.width = newWidth + "%";
    const inputText=document.querySelector("#goals")
    Object.assign(inputText.style,{
        textDecoration:"line-through",
        textDecorationColor:"#48A300",
        color:"#48A300",
    })
    svg1.style.display="none";
    hiddenSvg1.style.display="inline"
  });
svg2.addEventListener("click", () => {
    const mydiv = document.querySelector("#progress");
    let currentWidth = parseFloat(getComputedStyle(mydiv).width);
    console.log(currentWidth)
    let parentWidth = parseFloat(getComputedStyle(mydiv.parentElement).width);
    console.log(parentWidth)
  
    let newWidth = (currentWidth / parentWidth) * 100 + 33.3; // Increase by 33%
    if (newWidth > 100) newWidth = 100; // Ensure it doesn't exceed 100%
    mydiv.style.width = newWidth + "%";
    const inputText=document.querySelector("#goals2")
    Object.assign(inputText.style,{
        textDecoration:"line-through",
        textDecorationColor:"#48A300",
        color:"#48A300",
    })
    svg2.style.display="none";
    hiddenSvg2.style.display="inline"
  });
svg3.addEventListener("click", () => {
    const mydiv = document.querySelector("#progress");
    let currentWidth = parseFloat(getComputedStyle(mydiv).width);
    console.log(currentWidth)
    let parentWidth = parseFloat(getComputedStyle(mydiv.parentElement).width);
    console.log(parentWidth)
  
    let newWidth = (currentWidth / parentWidth) * 100 + 33.3; // Increase by 33%
    if (newWidth > 100) newWidth = 100; // Ensure it doesn't exceed 100%
    mydiv.style.width = newWidth + "%";
    const inputText=document.querySelector("#goals3")
    Object.assign(inputText.style,{
        textDecoration:"line-through",
        textDecorationColor:"#48A300",
        color:"#48A300",
    })
    svg3.style.display="none";
    hiddenSvg3.style.display="inline"
  });