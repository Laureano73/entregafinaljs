const showQuantityValidationAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Porfavor ingrese una cantidad válida",
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
    title: "Quieres eliminar este producto?",
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
    confirmButtonText: "Si, quiero eliminarlo",
  }).then((result) => {
    if (result.isConfirmed) {
      removeFromCart(productId);
      Swal.fire({
        title: "Eliminado!",
        text: "Tu producto fué eliminado",
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
    text: "Tu compra se ha realizado con éxito",
    newWindow: true,
    close: false,
    gravity: "top",
    duration: 1500,
    position: "center",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true,
    className: "alerta",
  }).showToast();
};

const removeAllCartConfirmation = () => {
  const swalParams = {
    icon: "warning",
    title: "Quieres eliminar todos tus productos?",
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
    confirmButtonText: "Si, eliminar todo",
  };

  Swal.fire(swalParams).then((result) => {
    if (result.isConfirmed) {
      clearCart(productCart);
      Swal.fire({
        title: "Eliminado!",
        text: "Tus productos han sido eliminados.",
        icon: "success",
        color: "#000",
        background: "#fff",
        position: "top-end",
        customClass: "swal-wide",
      });
    }
  });
};