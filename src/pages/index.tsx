import S from 'styles/home.module.scss'
export default function Home() {
  return (
    <main className={S.container}>
      <h1>React Hook Form & Yup</h1>
      <p>A simple login screen for studies purpose</p>

      <form className={S.formContainer}>
        <h1 className={S.formTitle}>Login</h1>

        <div className={S.infoContainer}>
          <label htmlFor="email">
            Email <br />
            <input
              className={S.formInput}
              name="email"
              type="text"
              placeholder="example@example.com"
            />
          </label>

          <label htmlFor="password">
            Password <br />
            <input
              className={S.formInput}
              name="password"
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </label>
        </div>
        <button className={S.formButton} type="submit">
          Sign In
        </button>
      </form>
    </main>
  )
}
