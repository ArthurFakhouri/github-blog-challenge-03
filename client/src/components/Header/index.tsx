import logoImg from '../../assets/logo.svg'
import effect1Img from '../../assets/effect1.png'
import effect2Img from '../../assets/effect2.png'
import { Effects, HeaderContainer, LogoContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <Effects>
                <img src={effect2Img} alt="" />
                <img src={effect1Img} alt="" />
            </Effects>
            <LogoContainer>
                <img src={logoImg} alt="" />
            </LogoContainer>
        </HeaderContainer>
    )
}