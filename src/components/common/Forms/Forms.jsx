import { useForm } from "react-hook-form"
import { postReq } from "../../../services/http"
import { API_URL } from "../../../constants/constans"

export function AcortarForm() {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await postReq(`${API_URL}/save`, data)

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="url" {...register('url', {
        required: 'Inserta un enlace'
      })} />
      {errors.url && <p>{errors.url.message}</p>}
      <input type="submit" value="Acortar" />
    </form>
  )
}