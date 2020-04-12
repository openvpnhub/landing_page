import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Scroll
import Scroll from 'react-scroll';

// Components
import MainRoute from '../components/pages/main';

// Utils
import get from 'lodash/get';

// Actions
import { setScrollElement } from '../actions';

// Constants
import {
	SEO_DESCRIPTION,
	SEO_KEYWORDS
} from '../settings';

interface Props {
	doClearScrollElement(): void,
	scrollElement?: any
}

interface State {

}

class MainPage extends React.Component<Props, State> {
	componentDidMount() {
		this.handleScroll();
	}

	handleScroll() {
		const { doClearScrollElement, scrollElement } = this.props;

		if (scrollElement) {
			Scroll.scroller.scrollTo(scrollElement, {
				smooth: true,
				offset: -165
			});

			doClearScrollElement();
		}
	}

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Buy Anonymous Residential and Datacenter Proxies or SOCKSv5 with Bitcoin</title>
					<meta name="description" content={SEO_DESCRIPTION} />
					<meta name="keywords" content={SEO_KEYWORDS} />
					<meta name="google-site-verification" content="XwGDVFBvtg3bUIef8e-LsPjpOPIy-hfSUYDGIcViGwY" />
				</Helmet>

				<MainRoute />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	scrollElement: get(state, 'core.scrollElement', null)
});

const mapDispatchToProps = (dispatch) => ({
	doClearScrollElement: () => dispatch(setScrollElement(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
