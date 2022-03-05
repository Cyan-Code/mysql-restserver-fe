type peticion = {
  method: string,
  path: string,
  params?: string,
}

type objPetition = {
  id: string,
  password: string,
  nombre  ?: string,
}

export const handleFetch = async (args: peticion, body?: objPetition) => {
  return await fetch(`http://localhost:8000/api${args.path}`, {
    method: args.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .catch(resp => resp.json());
}
