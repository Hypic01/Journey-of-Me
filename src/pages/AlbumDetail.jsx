import { useParams } from 'react-router-dom';

const AlbumDetail = () => {

  let {id} = useParams();
  
  return (
    <section className="w-screen h-screen font-['Noto_Serif_JP'] text-white bg-slate-300">
      {id}
    </section>
  )
}

export default AlbumDetail;