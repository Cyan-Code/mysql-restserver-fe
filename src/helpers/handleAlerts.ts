import Swal from "sweetalert2";
//'warning' | 'error'| 'success'| 'info'| 'question'

export const swAlert = async(obj: any) => {
  return Swal.fire({
    icon: obj.icon,
    title: obj.title,
    text: obj.msg,
    showConfirmButton: false,
    timer: obj.timer
  })
}

