import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Definir o tipo para os itens da lista de navegação
interface NavItem {
    id: number;
    target: string;
    name: string;
    icon: string;
    active: boolean;
}

// Tipar a constante `navListData` como um array de `NavItem`
const navListData: NavItem[] = [
    {
        id: 1,
        target: 'Home',
        name: 'Home',
        icon: 'bi bi-house-door',
        active: true,
    },
    {
        id: 2,
        target: 'Championships',
        name: 'Championships',
        icon: 'bi bi-trophy',
        active: false,
    },
    {
        id: 3,
        target: 'Team',
        name: 'Team',
        icon: 'bi bi-people',
        active: false,
    },
    {
        id: 4,
        target: 'Perfil',
        name: 'Perfil',
        icon: 'bi bi-person-badge',
        active: false,
    },
];

export default navListData;
