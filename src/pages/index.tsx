import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import S from 'styles/home.module.scss'
import { schema } from 'utils/validation'

type FormFields = {
  email: string
  password: string
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormFields>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <main className={S.container}>
      <h1>React Hook Form & Yup</h1>
      <p>A simple login screen for studies purpose</p>

      <form className={S.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={S.formTitle}>Login</h1>

        <div className={S.infoContainer}>
          <label htmlFor="email">
            Email <br />
            <input
              className={S.formInput}
              {...register('email')}
              type="text"
              placeholder="example@example.com"
            />
            <p className={S.formError}>{errors.email?.message}</p>
          </label>

          <label htmlFor="password">
            Password <br />
            <input
              className={S.formInput}
              {...register('password')}
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
            <p className={S.formError}>{errors.password?.message}</p>
          </label>
        </div>
        <button className={S.formButton} type="submit">
          Sign In
        </button>
      </form>
    </main>
  )
}
