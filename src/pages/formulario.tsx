/**
 * Formulário ✅
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from '@/styles/formulario.module.css';
import { IUserCreate } from '@/types/user';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    setError,
  } = useForm<IUserCreate>();

  async function handleSubmit(fields: IUserCreate) {
    const res = await fetch('/api/users/create', {
      method: 'POST',
      body: JSON.stringify(fields),
    }).then((res) => {
      if (res.ok) {
        alert('Usuário criado com sucesso');
      } else {
        res.json().then((data) => {
          setError('email', {
            type: 'manual',
            message: 'E-mail já cadastrado',
          });
        });
      }
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form
          onSubmit={handleFormSubmit((e) => {
            handleSubmit(e);
          })}
        >
          <input
            type="text"
            className={errors.name && styles['input-invalid']}
            placeholder="Name"
            {...register('name', {
              required: 'Campo obrigatório',
              minLength: {
                message: 'Mínimo de 3 caracteres',
                value: 3,
              },
            })}
          />
          {errors.name && <span className={styles['error-message']}>{errors.name.message}</span>}
          <input
            type="email"
            className={errors.email && styles['input-invalid']}
            placeholder="E-mail"
            {...register('email', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido',
              },
            })}
          />

          {errors.email && <span className={styles['error-message']}>{errors.email.message}</span>}
          <button type="submit" data-type="confirm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
