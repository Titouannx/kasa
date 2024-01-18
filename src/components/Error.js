import { Link } from 'react-router-dom';
import '../styles/Error.css'; 

function Error() {
  return (
    <div className="error-404">
      <div className="text-large">404</div>
      <div className="text-medium">Oups! La page que vous demandez n'existe pas.</div>
      <div className="text-small">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
}

export default Error;
