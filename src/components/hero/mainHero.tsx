import React from 'react';
import { connect } from 'react-redux';

// Components
import Hero from './index';
import {
	Col,
	Row
} from 'reactstrap';

// Constants
import { MEMBERS_URL, SIGNUP_URL } from '../../settings';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Utils
import get from 'lodash/get';

interface Props {
	minPrice: string
}

const MainHero = ({ minPrice }: Props) => (
	<Hero>
		<Row>
			<Col
				xl={{ size: 8, offset: 2 }}
				lg={{ size: 10, offset: 1 }}
			>
				<h1 className="main-content__title mb-3 mb-lg-4 h2">
					Secure, Anonymous & Fast
					<br />
					HTTP and SOCKSv5 Private Proxies
				</h1>
				<p className="main-content__lead lead mb-4">
					Fully Anonymous Private Proxies
					<br />
					(Shared, Dedicated & Residential) Starting at just $0.99 USD / Month.
				</p>
				<a
					href={SIGNUP_URL}
					className="btn btn--green btn--lg mb-0 mt-4">
					Order Now
					<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
				</a>
			</Col>
		</Row>
	</Hero>
);


const mapStateToProps = (state) => ({
	minPrice: get(state, 'core.minPrice', ''),
});

export default connect(mapStateToProps)(MainHero);