type peticion = {
  method: string,
  params?: string
}

type objPetition = {
  email: string,
  password: string,
  nombre  ?: string,
}

export const handleFetch = async (args: peticion, body: objPetition) => {
  await fetch('http://localhost:8000/api/usuarios', {
    method: args.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .then(resp => console.log(resp))
}
