import React from 'react';
import { Foto } from '../../../data/types'; // Ensure this path is correct

// Define types for props
interface ImagemProps {
    foto: Foto;
    aoZoomSolicitado: (foto: Foto) => void;
    aoAlternarFavorito: (foto: Foto) => void;
}

// Functional component
const Imagem: React.FC<ImagemProps> = ({ foto, aoZoomSolicitado, aoAlternarFavorito }) => {
    const handleClick = () => {
        aoZoomSolicitado(foto);
    };

    const handleFavoriteToggle = () => {
        aoAlternarFavorito(foto);
    };

    return (
        <div>
            <img src={foto.path} alt={foto.titulo} onClick={handleClick} />
            <button onClick={handleFavoriteToggle}>View</button>
        </div>
    );
};

export default Imagem;
