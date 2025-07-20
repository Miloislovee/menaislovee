function mostrarClave() {
    // Mostrar el modal
    document.getElementById('modalClave').classList.add('activo');
    document.getElementById('inputClave').value = '';
    document.getElementById('mensajeClave').textContent = '';
    setTimeout(() => {
        document.getElementById('inputClave').focus();
    }, 200);
}

// Cerrar modal al hacer clic en la X o fuera del contenido
window.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalClave');
    const cerrar = document.getElementById('cerrarModal');
    const inputClave = document.getElementById('inputClave');
    const btnEnviar = document.getElementById('btnEnviarClave');
    const mensaje = document.getElementById('mensajeClave');

    cerrar.onclick = function() {
        modal.classList.remove('activo');
    };
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.classList.remove('activo');
        }
    };

    // Enviar clave con botón o Enter
    function validarClave() {
        const clave = inputClave.value.trim();
        if (clave === '0206') {
            mensaje.style.color = '#28a745';
            mensaje.innerHTML = 'uyy eso fue suerte <span style="font-size:22px">😛</span>';
            setTimeout(() => {
                window.location.href = 'amor.html';
            }, 1200);
        } else {
            mensaje.style.color = '#fff';
            mensaje.innerHTML = 'CLAVE INCORRECTA DOWNNN<span style="font-size:20px"></span>';
            inputClave.classList.add('shake');
            setTimeout(() => inputClave.classList.remove('shake'), 400);
        }
    }
    btnEnviar.onclick = validarClave;
    inputClave.onkeydown = function(e) {
        if (e.key === 'Enter') validarClave();
    };
});

// Animación shake para input incorrecto
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-8px); }
  80% { transform: translateX(8px); }
  100% { transform: translateX(0); }
}
input.shake {
  animation: shake 0.4s;
  border: 2px solid #6426d7ff !important;
}
`;
document.head.appendChild(style);
