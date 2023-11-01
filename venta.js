document.addEventListener("DOMContentLoaded", function () {
  const cantidadInput = document.getElementById("cantidad");
  const categoriaSelect = document.getElementById("categoria");
  const totalAmount = document.getElementById("total-amount");

  cantidadInput.addEventListener("input", calcularTotal);
  categoriaSelect.addEventListener("input", calcularTotal);

  function calcularTotal() {
    const cantidad = parseInt(cantidadInput.value);
    const categoria = categoriaSelect.value;
    const preciosBase = {
      Estudiante: 200,
      Trainee: 200,
      Junior: 200,
    };
    const descuentos = {
      Estudiante: 0.2, 
      Trainee: 0.5,
      Junior: 0.85,
    };

    // Verificar si cantidad y categoría son valores válidos
    if (!isNaN(cantidad) && preciosBase[categoria] && descuentos[categoria]) {
      const precioBase = preciosBase[categoria];
      const descuento = descuentos[categoria];
      const precioTotal = cantidad * precioBase * descuento;
      totalAmount.textContent = "$" + precioTotal.toFixed(2);
    } else {
      // Si los valores no son válidos,que seria al comienzo muestre 0
      totalAmount.textContent = "$ 0,00";
      
    }
  }

  calcularTotal();
});