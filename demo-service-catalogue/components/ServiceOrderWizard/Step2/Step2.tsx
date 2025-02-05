import { Field, Input, Label } from "@headlessui/react"
import { useForm } from "react-hook-form"
import styles from "./Step2.module.css"

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" })

  return (
    <div className={styles.wrapper}>
      <Field>
        <Label className={styles.label}>Name</Label>
        <Input
          className={styles.input}
          {...register("ownerName", { required: true })}
        />
        {errors.ownerName && <p>Owner name is required.</p>}
      </Field>
    </div>
  )
}

export default Step2
