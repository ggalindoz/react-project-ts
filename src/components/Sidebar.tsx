import style from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />

            <div className={style.profile}>

                <Avatar
                    src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/07/279420777-1109033966347510-3690137499922067532-n.jpg" alt="" />
                <strong>Guilherme Galindo</strong>
                <span>Desenvolvedor</span>

            </div>

            <footer>

                <a href="#"><PencilLine size={20} /> Editar seu perfil</a>
            </footer>

        </aside>
    )
}