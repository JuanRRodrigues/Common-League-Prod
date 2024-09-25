import React from 'react';

interface NavListItemProps {
    item: {
        icon: string;
        name: string;
    };
}

const NavListItem: React.FC<NavListItemProps> = ({ item }) => {
    return (
        <li>
            <a href="#">
                <i className={`bi ${item.icon}`}></i>
                <span className="navName">{item.name}</span>
            </a>
        </li>
    );
};

export default NavListItem;
