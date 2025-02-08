import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../store/api/odooApi";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [login, { isLoading, isError }] = useLoginMutation();

  const onSubmit = async (formData: FormData) => {
    try {
      console.log("Data:", formData);

      const response = await login({
        username: formData.username,
        password: formData.password,
      }).unwrap();

      if (response.result) {
        // Guardar sesión en localStorage
        localStorage.setItem("session_id", response.result.session_id);

        // Redirigir con la sesión activa
        //window.location.href = `https://ronin-webdesign.odoo.com/web?session_id=${response.result.session_id}`;
        window.location.href = "https://alderete-informatica.odoo.com/my/home";
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error en la autenticación");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-20 bg-background">
      <h2 className="text-5xl font-semibold text-primary-dark font-title">
        Iniciar Sesión
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-[400px] h-[300px] gap-8 p-8 bg-white rounded-lg shadow-lg"
      >
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Usuario"
          className="w-full p-2 border rounded-lg outline-none focus:ring-1 focus:ring-primary-light"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className="w-full p-2 border rounded-lg outline-none focus:ring-1 focus:ring-primary-light"
        />
        <button
          type="submit"
          className="w-full p-2 text-xl font-semibold text-white transition-colors ease-in-out rounded-lg bg-primary hover:bg-primary-light"
          disabled={isLoading}
        >
          {isLoading ? "Verificando..." : "Ingresar"}
        </button>
        {isError && (
          <p className="text-red-600">Error en el inicio de sesión</p>
        )}
      </form>
    </div>
  );
};

export default Login;
