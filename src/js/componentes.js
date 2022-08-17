import '../css/componentes.css'
import webpacklogo from '../assets/img/proxy.jpg'

export const saludar = (nombre)=> {
    console.log('creando etiqueta H1')
    const h1 = document.createElement('h1')
    h1.innerHTML = `hola ${nombre}`
    document.body.append(h1)
}

//img

console.log(webpacklogo)
const img = document.createElement('img')
img.src = webpacklogo
document.body.append(img)
