import Lupa from "../../assets/img/icone-lupa-principal.png"
import alertHome from "../../assets/img/alertheader.svg"
import Foto from "../../assets/img/img-user.png"
import Perfil from "../../assets/img/icone-btn-user-info.png"
import Down from "../../assets/img/down.svg"
import LogoVolks from "../../assets/img/icons8-volkswagen-100.png"
import Favorite from "../../assets/img/heartheader.svg"
import "./style.css"

function Header() {
    return (
        <>
            <div className="inicio-lateral">
                <section className="posicionamentoesquerda">
                    <div className="planta">
                        <div className="option_img">
                            <img src={Down} alt="" />
                        </div>
                        <div className="planta_img">
                            <img src={LogoVolks} alt="" />
                        </div>
                        <div className="posicionamento_planta">
                            <p>Panta de Taubaté </p>
                        </div>

                    </div>
                    {/* <div className="lupa-alert"> */}
                    {/* <div className="lupa">
                        <input className="lupa-input-centro" type="search"/>
                            <button className="btn-lupa-principal">
                                <img 
                                className="icone-lupa-principal" 
                                src={Lupa} 
                                alt="Icone de Lupa na Seção Principal"
                                />
                            </button>
                    </div> */}
                    <button className="alert">
                        <img
                            src={Favorite}
                            alt="Icone de Alerta da Tela Principal"
                        />
                    </button>
                    <button className="alert">
                        <img
                            src={alertHome}
                            alt="Icone de Alerta da Tela Principal"
                        />
                    </button>
                    {/* </div> */}
                </section>

                <div className="usuario">
                        <div className="option_img">
                            <img src={Down} alt="" />
                        </div>
                        <div className="usuario_img">
                            <img src={Foto} alt="" />
                        </div>
                        <div className="posicionamento_foto">
                            <p>Nome do usuario</p>
                        </div>

                    </div>

                {/* <div className="">
                <div className="option_img">
                            <img src={Down} alt="" />
                        </div>
                    <img
                        className="foto-user"
                        src={Foto}
                        alt="Foto do Usuário"
                    />
                    <span>Nome do Usuário</span>
                    
                </div> */}
            </div>
        </>
    )
}
export default Header