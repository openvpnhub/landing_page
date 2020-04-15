import React from 'react';

// Components
import {
    Col,
	Container
} from 'reactstrap';

// Scss
import '../../styles/components/hero.scss';

// Images & icons
import heroImage from '../../images/hero.png';
import proxy4lesslogo from '../../images/logo_proxy4less.png';

interface Props {
	minPrice: string,
	children: any
}

const Hero = ({ minPrice, children }: Props) => (
    <div className="main-content">
        <Container fluid>
			{children}
        </Container>

        <Container fluid>
            <Col lg={{ size: 12 }}>
                <img src={heroImage} alt="Buy Proxies" className="main-content__img" />
                <img src={proxy4lesslogo} alt="Buy Proxies" style="display:none; visibility:hidden;"/>
            </Col>
        </Container>
    </div>
);

export default Hero;
