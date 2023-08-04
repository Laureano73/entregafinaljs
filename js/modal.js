const showQuantityValidationAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Porfavor ingrese una cantidad valida",
    customClass: "swal-wide-error",
    color: "#000",
    background: "#fff",
    confirmButtonText: "Ok",
    position: "top",
    timer: 6000,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
  });
};

const showRemoveConfirmation = (productId) => {
  Swal.fire({
    icon: "warning",
    title: "Seguro que quieres eliminar este producto?",
    customClass: {
      title: "swal2-title",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    color: "#000",
    background: "#fff",
    position: "top-end",
    customClass: "swal-wide",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí,eliminalo!",
  }).then((result) => {
    if (result.isConfirmed) {
      removeFromCart(productId);
      Swal.fire({
        title: "Deleted!",
        text: "Tu producto fue eliminado con éxito!",
        icon: "success",
        color: "#000",
        background: "#fff",
        position: "top-end",
        customClass: "swal-wide",
      });
    }
  });
};

const showPurchaseSuccess = () => {
  Toastify({
    text: "Su compra fue realizada con éxito!",
    newWindow: true,
    close: true,
    gravity: "top",
    duration: 6000,
    position: "center",
    backgroundColor: "orange",
    stopOnFocus: true,
  }).showToast();
};
