import { countries } from "../../data/countries"
import styles from "./Form.module.css"

export default function Form() {
  return (
    <form action="" className={styles.form}>
        <div className={styles.field}>
            <label htmlFor="city">Ciudad</label>
            <input type="text" name="city" id="city" placeholder="Ciudad" />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">Pais</label>
            <select  name="coutry" id="country">
                <option value="">seleciona el pais</option>
                {countries.map(country =>(
                    <option value={country.code}>{country.name}</option>
                ))}
            </select>
        </div>
        <div><input type="submit" value="Enviar" /></div>
    </form>
  )
}


