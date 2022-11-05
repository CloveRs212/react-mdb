import RMBDLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from '../../images/tmbd_logo.svg';

import { Wrapper, Content, LogoImg, TMBDLogoImg} from './Header.styles.js';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMBDLogo} alt='rmbd-logo' />
            <TMBDLogoImg src={TMBDLogo} alt='tmbd_logo' />
        </Content>
    </Wrapper>
)

export default Header;