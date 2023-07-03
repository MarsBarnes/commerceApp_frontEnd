import { useDispatch, useSelector } from 'react-redux';
import dinosaur from '../images/dinosaur.webp'
import { search, selectLoading } from './slice';

export const Tile = () => {

  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();


    return (
      <div className="tile">
        <h1 className="tileTitle">{loading ? '...' : 'Title'}</h1>
        <img className="tileImage" src={dinosaur} />
        <p className="tileFooter">Posted By Username X hours ago</p>
        <span className="material-symbols-outlined tileComment">comment</span>
        <span className="material-symbols-outlined tileArrowUp">arrow_upward</span>
        <span className="material-symbols-outlined tileArrowDown">arrow_downward</span>
        <p className="tileVotes">#</p>
        <button type="button" onClick={() => dispatch(search())}>Click</button>
      </div>
    );
}


