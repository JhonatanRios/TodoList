import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store'

import './Header.scss';

interface HeaderProps {
    title: string;
    text?: string;
    img?: string;
}

export const Header = observer((props: HeaderProps) => {
    return <header className="header">
        <img src={props.img} />
        <h1>{props.title}</h1>
        {props.text && <p>{props.text}</p>}

        <button onClick={(ev) => {
            ev.preventDefault();
            store.coleccionUser("Annie");
            store.coleccionTask("Annie", "validado");
        }}>añadir ciudad</button>

        <button onClick={(ev) => {
            store.listTask();
        }}>consultar</button>

        <ul>
            {store.ListTask.map((task: any) => {
                const t = task;
                return <li>{t.desc}</li>
            })}

        </ul>
    </header>;
})