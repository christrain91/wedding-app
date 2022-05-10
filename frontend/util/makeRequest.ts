export default async function makeRequest<T = unknown>(
  route: string,
  data: unknown
): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.json() as Promise<T>
}
