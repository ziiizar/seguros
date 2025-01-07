import { emailVerification } from "@/actions/auth/emailVerification/action/emailVerification";
import Link from 'next/link';

const EmailVerificationPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const token = searchParams.token as string | undefined;

  if (!token) {
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="mb-4">Token no encontrado. Por favor, verifica el enlace de verificación.</p>
        <Link href="/login" className="text-blue-500 hover:underline">
          Volver al inicio de sesión
        </Link>
      </div>
    );
  }

  const result = await emailVerification(token);

  if ('error' in result) {
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Error de verificación</h1>
        <p className="mb-4">{result.error}</p>
        <Link href="/login" className="text-blue-500 hover:underline">
          Volver al inicio de sesión
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">¡Email verificado!</h1>
      <p className="mb-4">Tu correo electrónico ha sido verificado correctamente.</p>
      <Link href="/login" className="text-blue-500 hover:underline">
        Ir al inicio de sesión
      </Link>
    </div>
  );
};

export default EmailVerificationPage;

