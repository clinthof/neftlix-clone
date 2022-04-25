import { OptForm } from '../components';

const OptFormContainer = () => {
  return (
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart
          your membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder='Email address' />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>
  );
};

export { OptFormContainer };