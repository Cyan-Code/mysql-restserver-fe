type peticion = {
  method: string,
  path: string,
  params?: string,
}

type objPetition = {
  id: string,
  password?: string,
  nombre  ?: string,
  programa?: string,
}

type Token = {}

const token = localStorage.getItem('x-token')?.toString()

export const handleFetch = async (args: peticion, body?: objPetition) => {
  return await fetch(`http://localhost:8000/api${args.path}`, {
    method: args.method,
    headers: {
      'Content-Type': 'application/json',
      'x-token': token
    } as Token,
    body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .catch(resp => resp.json());
}
