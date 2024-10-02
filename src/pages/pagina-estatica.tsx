/**
 * Página estática ✅
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';
import { getCities } from './api/cities/[length]';
type PageProps = {
  list: ICity[];
};

export default function Lista({ list }: PageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de cidades</h2>

        <div data-list-container>
          {list.map((city) => (
            <div data-list-item key={city.id}>
              {city.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const defaultList = [
    {
      id: new Date().getTime().toString(),
      name: 'São Paulo',
    },
  ];

  try {
    const response = await getCities(10);
    return {
      props: {
        list: response,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        list: defaultList,
      },
      revalidate: 60,
    };
  }
}
