import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";
import { useNavigate } from 'react-router-dom';
import http from "../../../http";

interface Foto {
    path: string;
    alt: string;
    id: number;
}

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 30px;
`;

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.1);
    }
`;

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #0289b3;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 90%;
    margin-top: 16px;
`;

const BotaoFechar = styled.button`
    background-color: #0289b3;
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 8px;
`;

const BotoesContainer = styled.div`
    text-align: center;
`;

const Populares: React.FC = () => {
    const [imagemExpandida, setImagemExpandida] = useState<Foto | null>(null);
    const navigate = useNavigate();

    const handleZoom = (foto: Foto) => {
        setImagemExpandida(foto);
    };

    const handleEntrarNoTime = (foto: Foto) => {
        // Lógica para entrar no time com base na foto
        console.log("Entrar no time:", foto);
        navigate('/teamList');
    };

    // Remove UserList function as it seems unrelated to Populares component

    return (
        <section>
            <Titulo $alinhamento="center">Destaques</Titulo>
            <ColunaFotos>
                {fotos.map((foto: Foto) => (
                    <div key={foto.id}>
                        <Imagem
                            src={foto.path}
                            alt={foto.alt}
                            onClick={() => handleZoom(foto)}
                        />
                        {imagemExpandida === foto && (
                            <div>
                                <BotoesContainer>
                                    <Botao onClick={() => handleEntrarNoTime(foto)}>Entrar no time</Botao>
                                    <BotaoFechar onClick={() => setImagemExpandida(null)}>Fechar</BotaoFechar>
                                </BotoesContainer>
                            </div>
                        )}
                    </div>
                ))}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    );
};

export default Populares;
