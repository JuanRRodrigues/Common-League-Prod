import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import PlayerService from '../../service/playerService';
import TeamService from '../../service/teamService';
import GameService from '../../service/teamService'; // Atualize o caminho, se necessário

export default function CreateAutoComplete({
    name,
    label,
    error,
    value,
    setFieldValue,
    onBlur
}) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let active = true;

        if (!open || options.length > 0) {
            return undefined;
        }

        setLoading(true);

        const fetchData = async () => {
            try {
                let results = [];

                if (name === 'player') {
                    const playerService = new PlayerService();
                    results = (await playerService.consult()).data;
                } else if (name === 'team') {
                    const teamService = new TeamService();
                    results = (await teamService.consult()).data;
                } else if (name === 'game') {
                    const gameService = new GameService();
                    results = (await gameService.consult()).data;
                }

                if (active) {
                    setOptions(results);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching options:', error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            active = false;
        };
    }, [open, name]);

    const handleChange = (event, newValue) => {
        console.log('handleChange - Novo valor:', newValue); // Log do valor selecionado
        setFieldValue(name, newValue); // Atualiza o valor no Formik
    };

    const handleInputChange = (event, newValue) => {
        console.log('handleInputChange - Novo valor digitado:', newValue); // Log do valor digitado
        setFieldValue(name, newValue); // Atualiza o valor digitado (freeSolo)
    };

    const handleBlur = (event) => {
        console.log('handleBlur - Campo perdeu o foco');
        if (onBlur) {
            onBlur(event);
        }
    };

    return (
        <Autocomplete
            fullWidth
            open={open}
            value={value || ''} // Define o valor diretamente
            onChange={handleChange} // Log quando o valor é selecionado
            onInputChange={handleInputChange} // Log quando o valor é digitado
            freeSolo
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            getOptionLabel={(option) => option.nome || option || ''} // Usa o valor diretamente se for string
            options={options}
            loading={loading}
            onBlur={handleBlur} // Adiciona onBlur
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    error={!!error}
                    helperText={error}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}
