document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const select = document.getElementById('options');

    // Fetch para obtener las opciones del select
    fetch('options.json')
        .then(response => response.json())
        .then(data => {
            data.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.text;
                select.appendChild(opt);
            });
        })
        .catch(error => console.error('Error al cargar las opciones:', error));

    // Listener para el submit del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío por defecto

        // Obtener los valores de los inputs
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            option: select.value
        };

        // Imprimir el objeto en la consola
        console.log(formData);
    });
});
