export const saludar = (nombre)=> {
    console.log('creando etiqueta H1')
    const h1 = document.createElement('h1')
    h1.innerHTML = `hola ${nombre}`
    document.body.append(h1)
}
