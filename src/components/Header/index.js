import react from 'react';

import RMBDLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmbd_logo.svg'

import { Wrapper, Content, LogoImg, TMBDLogoImg} from './Header.styles'

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMBDLogo} alt='rmbd-logo' />
            <TMBDLogoImg src={TMBDLogo} alt='tmbd-logo' />
        </Content>
    </Wrapper>
)