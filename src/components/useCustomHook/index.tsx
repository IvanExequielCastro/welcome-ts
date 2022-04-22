import { useForm } from "./hooks/useForm";

interface Datos {
  dato: string;
}

export const CustomHooks = () => {
  // const { dato, handleChange } = useForm<Datos>({ dato: '' });
  const { form, handleChange } = useForm<Datos>({ dato: '' });
  const { dato } = form;

  return (
    <>
      <h3>CustomHooks</h3>
      <form>
        <input
          type={'text'}
          name={'dato'}
          value={dato}
          onChange={handleChange}
        />
        {
          (!form)
            ? <pre> No hay datos </pre>
            : <pre> {JSON.stringify(dato)} </pre>
        }
      </form>
    </>
  );
};
