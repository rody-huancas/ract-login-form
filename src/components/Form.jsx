// iconos
import { AiOutlineEye } from "react-icons/ai";
// imagen
import ImageFondo from "../images/fondo.avif";
import ImageGoogle from "../images/google.png";

export const Form = () => {
  return (
    <>
      <section className="bg-gray-50 mx-auto min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-cente">
          <div className="md:w-1/2 px-8 md:px-12">
            <h2 className="font-bold text-2xl text-[#002D74] text-center">
              Inicio De Sesión
            </h2>
            <p className="text-xs mt-4 text-[#002D74] text-center">
              Si ya eres miembro, inicia sesión fácilmente.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                className="p-2 mt-8 rounded-xl border"
                placeholder="ejemplo@correo.com"
              />

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="p-2 rounded-xl border w-full"
                  placeholder="********"
                />

                <AiOutlineEye className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" />
              </div>

              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">O</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <img src={ImageGoogle} alt="" className="mr-3" />
              Inicia Sesión con Google
            </button>

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>¿No tienes una cuenta?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Registrate
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl h-full" src={ImageFondo} />
          </div>
        </div>
      </section>
    </>
  );
};
