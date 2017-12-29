/**
*
* SignUp
*
*/

import React from 'react';
import Link from 'next/link';
import { Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import TextField from 'components/widgets/Form/TextField';
import SubmitButton from 'components/widgets/Form/SubmitButton';

class SignUp extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleChange = (name, value) => {
    const tempFormDetails = Object.assign({}, this.props.formDetails);
    tempFormDetails[name].value = value;
    this.props.updateFormDetails(tempFormDetails);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { formDetails } = this.props;
    const result = this.props.validateForm(formDetails);
    this.props.updateFormDetails(result.updatedFormData);
    if (result.validateFlag) this.props.submitForm(formDetails);
  }


  render() {
    const { formDetails, error } = this.props;
    return (
      <div>
        <Grid
          textAlign='center'
          style={{ height: '100%', }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450, marginTop: "13vh" }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='static/images/logo.png' />
              {' '}Sign up for your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                {
                  !!error && <Message negative>
                    <p>{error}</p>
                  </Message>
                }
                
                <TextField
                  label="Full Name"
                  name="name"
                  value={formDetails.name.value||""}
                  handleChange={this.handleChange}
                  errorText={!formDetails.name.status ? formDetails.name.errorText : ''}
                />

                <TextField
                  icon="mail"
                  label="Email"
                  name="email"
                  value={formDetails.email.value||""}
                  handleChange={this.handleChange}
                  errorText={!formDetails.email.status ? formDetails.email.errorText : ''}
                />

                <TextField
                  icon='lock'
                  name="password"
                  label='Password'
                  type='password'
                  value={formDetails.password.value||""}
                  handleChange={(name, value) => this.handleChange(name, value)}
                  errorText={!formDetails.password.status ? formDetails.password.errorText : ''}
                />

                <SubmitButton
                  color="teal"
                  label="Sign Up"
                  onSubmit={this.handleSubmit}
                />
              </Segment>
            </Form>
            <Message>
              Already have the account? <Link href="/">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

SignUp.propTypes = {

};

export default SignUp;
