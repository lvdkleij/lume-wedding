import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route(':lang', 'routes/$lang/_layout.tsx', [route('invite/:inviteCode', 'routes/$lang/invite.$inviteCode.tsx')]),
] satisfies RouteConfig;
