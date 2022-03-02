import Swal from "sweetalert2";

type alert = {
  msg?: string,
  title?: string,
}

export const swAlert = async(obj: alert) => {
  return Swal.fire({
    icon: 'error',
    title: obj.title,
    text: obj.msg,
    showConfirmButton: false,
    timer: 1500
  })
}

