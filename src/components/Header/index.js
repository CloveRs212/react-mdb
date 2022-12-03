import RMBDLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles.js';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMBDLogo} alt='rmbd-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb_logo' />
        </Content>
    </Wrapper>
)

export default Header;