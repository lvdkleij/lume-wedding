import { type RouteConfig, route } from '@react-router/dev/routes';

export default [route('invite/:inviteCode', 'routes/invite.$inviteCode.tsx')] satisfies RouteConfig;
