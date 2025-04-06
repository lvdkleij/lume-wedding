import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  route(':lang', 'routes/$lang/_layout.tsx', [
    index('routes/$lang/index.tsx'),
    route('invite/:inviteCode', 'routes/$lang/invite.$inviteCode.tsx'),
  ]),
] satisfies RouteConfig;
