import NewPasswordForm from '@/components/auth/NewPasswordForm'

const page = async ({searchParams}: {searchParams: Promise<{token: string}>}) => {
  const {token} = await searchParams
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">Actualice su seguridad.</h2>
          <p>Crea y confirma una nueva contraseña para actualizar la seguridad de tu cuenta.</p>
        </section>
        <NewPasswordForm token={token} />
      </div>
      </div>
  )
}

export default page