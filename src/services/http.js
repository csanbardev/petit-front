
export const postReq = async (url, data) => {

  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })

  if (!response.ok) {
    const errorResponse = await response.json()
    throw new Error(errorResponse.code)
  }

  return response.json()
}
