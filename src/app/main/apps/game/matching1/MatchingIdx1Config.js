import React from 'react';

const MatchingIdx1Config = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/game/matching1',
			component: React.lazy(() => import('./MatchingIdx1Page'))
		}
	]
};

export default MatchingIdx1Config;
