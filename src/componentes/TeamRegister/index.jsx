import React, { useEffect } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import CreateAutoComplete from '../optionTest';
import TeamService from '../../service/teamService';
import { toast } from 'react-toastify';
import Grid from '@mui/material/Grid';

export default function TeamsForm({ handleClose, row, option = 'add' }) {
    const ServiceTeam = new TeamService();

  

    return (
        <Formik
            initialValues={{ team: '', player: '', dois: '' }} // Inicialmente vazio
            onSubmit={async (values) => {
                values.dataCreated = new Date().toLocaleDateString('en-US');

                try {
                    if (values.id > 0) {
                        await ServiceTeam.put(values);
                        toast.success('O registro foi atualizado');
                    } else {
                        await ServiceTeam.post(values);
                        toast.success('O registro foi criado');
                    }
                    handleClose();
                } catch (error) {
                    toast.error('Ocorreu um erro ao atualizar o registro');
                }
            }}
            validationSchema={Yup.object().shape({
                team: Yup.string().required('Nome do time é obrigatório'),
                player: Yup.string().required('Nome do jogador é obrigatório'),
                dois: Yup.string().required('Este campo é obrigatório'),
            })}
        >
            {({ errors, touched, handleSubmit, setFieldValue, values }) => {
                 const handleTeamBlur = (event) => {
                    // Atualiza o campo 'player' quando o campo 'team' perde o foco
                    // Defina a lógica para atualizar o valor de acordo com suas necessidades
                    console.log('Campo team perdeu o foco');
                };
            
                const handlePlayerBlur = (event) => {
                    // Atualiza o campo 'dois' quando o campo 'player' perde o foco
                    // Defina a lógica para atualizar o valor de acordo com suas necessidades
                    console.log('Campo player perdeu o foco');
                    setFieldValue('team', 'Time A');
                };

                return (
                    <StyledForm onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <CreateAutoComplete
                                error={touched.team && errors.team}
                                name="team"
                                value={values.team}  // Valor definido pelo useEffect
                                label="Nome do Time"
                                setFieldValue={setFieldValue}
                                onBlur={handleTeamBlur} // Adiciona o onBlur
                            />
                        </Grid>

                        <Grid container spacing={3}>
                            <CreateAutoComplete
                                error={touched.player && errors.player}
                                name="player"
                                value={values.player}  // Valor definido pelo useEffect
                                label="Nome do Jogador"
                                setFieldValue={setFieldValue}
                                onBlur={handlePlayerBlur} // Adiciona o onBlur
                            />
                        </Grid>

                        <button type="submit">Enviar</button>
                    </StyledForm>
                );
            }}
        </Formik>
    );
}
