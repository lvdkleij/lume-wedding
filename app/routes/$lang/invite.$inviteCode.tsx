// import { json, type LoaderFunction, type ActionFunction, redirect } from '@remix-run/node';
// import { useLoaderData, Form, useSearchParams, Link } from '@remix-run/react';
// import { supabaseServer } from '~/utils/supabase.server';

// type Invite = {
//   id: string;
//   code: string;
//   message_translations: Record<string, string>;
//   invitees: { name: string }[];
// };

// export const loader: LoaderFunction = async ({ params, request }) => {
//   const { inviteCode } = params;
//   if (!inviteCode) throw new Response('Not Found', { status: 404 });

//   const url = new URL(request.url);
//   const lang = url.searchParams.get('lang') || 'en';

//   const { data, error } = await supabaseServer.from('invites').select('*, invitees(*)').eq('code', inviteCode).single();

//   if (error || !data) {
//     console.error(error);
//     throw new Response('Invite not found', { status: 404 });
//   }

//   const message = data.message_translations?.[lang] ?? data.message_translations?.['en'];

//   return json({ invite: data as Invite, lang, message });
// };

// export const action: ActionFunction = async ({ request, params }) => {
//   const formData = await request.formData();
//   const name = formData.get('name');
//   const attending = formData.get('attending') === 'yes';
//   const message = formData.get('message');

//   const { inviteCode } = params;
//   if (!inviteCode) return redirect('/');

//   const { data: invite } = await supabaseServer.from('invites').select('id').eq('code', inviteCode).single();

//   if (!invite) return redirect('/');

//   const { error } = await supabaseServer.from('rsvps').insert({
//     invite_id: invite.id,
//     name,
//     attending,
//     message,
//   });

//   if (error) {
//     console.error(error);
//     throw new Response('Something went wrong', { status: 500 });
//   }

//   return redirect(`/invite/${inviteCode}?success=1`);
// };

// export default function InvitePage() {
//   const { invite, lang, message } = useLoaderData<typeof loader>();
//   const [searchParams] = useSearchParams();
//   const success = searchParams.get('success');
//   const availableLangs = Object.keys(invite.message_translations || {});

//   return (
//     <div className="max-w-xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-2">Invite Code: {invite.code}</h1>
//       <p className="mb-4">
//         <strong>Message:</strong> {message}
//       </p>

//       <h2 className="text-lg font-semibold">Invitees</h2>
//       <ul className="mb-4 list-disc list-inside">
//         {invite.invitees?.length ? (
//           invite.invitees.map((person) => <li key={person.name}>{person.name}</li>)
//         ) : (
//           <li>No invitees found</li>
//         )}
//       </ul>

//       <div className="mb-6">
//         <strong>Language:</strong>{' '}
//         {availableLangs.map((lng) => (
//           <Link
//             key={lng}
//             to={`?lang=${lng}${success ? '&success=1' : ''}`}
//             className={`mr-2 underline ${lng === lang ? 'font-bold text-blue-600' : ''}`}
//           >
//             {lng.toUpperCase()}
//           </Link>
//         ))}
//       </div>

//       {success ? (
//         <p className="text-green-600 font-medium">🎉 Thanks for your RSVP!</p>
//       ) : (
//         <Form method="post" className="space-y-4">
//           <label className="block">
//             Your name:
//             <input type="text" name="name" required className="w-full border p-2 mt-1" />
//           </label>

//           <fieldset className="border p-4">
//             <legend className="font-medium">Will you attend?</legend>
//             <label className="block">
//               <input type="radio" name="attending" value="yes" required /> Yes
//             </label>
//             <label className="block">
//               <input type="radio" name="attending" value="no" /> No
//             </label>
//           </fieldset>

//           <label className="block">
//             Message for the couple (optional):
//             <textarea name="message" className="w-full border p-2 mt-1" />
//           </label>

//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Submit RSVP
//           </button>
//         </Form>
//       )}
//     </div>
//   );
// }
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function InvitePage() {
  const { lang, inviteCode } = useParams<{ lang: string; inviteCode: string }>();
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('inviteMessage', { code: inviteCode })}</p>
    </div>
  );
}
