// app/routes/invite.$inviteCode.tsx
import { json, type LoaderFunction, type ActionFunction, redirect } from '@remix-run/node';
import { useLoaderData, Form, useSearchParams } from '@remix-run/react';
import { supabaseServer } from '~/utils/supabase.server';

export const loader: LoaderFunction = async ({ params }) => {
  const { inviteCode } = params;
  if (!inviteCode) throw new Response('Not Found', { status: 404 });

  const { data, error } = await supabaseServer.from('invites').select('*').eq('code', inviteCode).single();

  if (error || !data) throw new Response('Invite not found', { status: 404 });

  return json({ invite: data });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const attending = formData.get('attending') === 'yes';
  const message = formData.get('message');

  const { inviteCode } = params;
  if (!inviteCode) return redirect('/');

  const { data: invite } = await supabaseServer.from('invites').select('id').eq('code', inviteCode).single();

  if (!invite) return redirect('/');

  const { error } = await supabaseServer.from('rsvps').insert({
    invite_id: invite.id,
    name,
    attending,
    message,
  });

  if (error) throw new Response('Something went wrong', { status: 500 });

  return redirect(`/invite/${inviteCode}?success=1`);
};

export default function InvitePage() {
  const { invite } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');

  return (
    <div>
      <h1>Welcome, {invite.name}!</h1>
      <p>We’re so excited to celebrate with you.</p>

      {success ? (
        <p>🎉 Thanks for your RSVP!</p>
      ) : (
        <Form method="post">
          <label>
            Your name:
            <input type="text" name="name" required />
          </label>

          <fieldset>
            <legend>Will you attend?</legend>
            <label>
              <input type="radio" name="attending" value="yes" required />
              Yes
            </label>
            <label>
              <input type="radio" name="attending" value="no" />
              No
            </label>
          </fieldset>

          <label>
            Message for the couple (optional):
            <textarea name="message" />
          </label>

          <button type="submit">Submit RSVP</button>
        </Form>
      )}
    </div>
  );
}
