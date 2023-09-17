import React, { useContext } from 'react';
import { withLayout } from '@/layouts/Layout';
import { AppContext } from '@/context/app.context';

const Home = (): JSX.Element => {
  const { notes, loading, error } = useContext(AppContext);
  return (
    <>
      {loading && <div><span>Загрузка...</span></div>}
      {(!loading || !error)&& <div className="container mx-auto flex flex-col mt-4">
        <h1 className="text-4xl mb-4 flex justify-center">Добро пожаловать в Заметки</h1>
        <div className='flex justify-center'>
          <span>У вас {notes ? notes.length : '0'} заметок</span>
        </div>
      </div>}
      {error && <div className="text-lg text-red-800"><span>{error}</span></div>}
    </>
  );
};

export default withLayout(Home)