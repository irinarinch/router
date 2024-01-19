import { Link } from "react-router-dom"
import style from "./header.module.css"

const Header = () => {
  return (
    <div className={style.container}>      
      <Link className={style.button} to="/posts/new">Создать пост</Link>      
    </div>
  )
}

export default Header