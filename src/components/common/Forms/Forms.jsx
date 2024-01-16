import { useForm } from "react-hook-form"
import { postReq } from "../../../services/http"
import { API_URL } from "../../../constants/constans"
import './Forms.css'
import { CommonMessage } from "../Messages/Messages"


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
      <div className="input-group">
        <input placeholder="https://tuenlace.es" className="url-input" type="url" {...register('url', {
          required: 'Inserta un enlace'
        })} />
        <input className="button--submit" type="submit" value="Acortar" />
      </div>
      {errors.url && <CommonMessage text={errors.url.message} type='error' />}
    </form>
  )
}