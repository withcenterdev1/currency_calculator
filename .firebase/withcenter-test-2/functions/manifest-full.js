export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.6b6e14f0.js","app":"_app/immutable/entry/app.aff78d16.js","imports":["_app/immutable/entry/start.6b6e14f0.js","_app/immutable/chunks/index.a17072c9.js","_app/immutable/chunks/singletons.815bbdb2.js","_app/immutable/entry/app.aff78d16.js","_app/immutable/chunks/index.a17072c9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
