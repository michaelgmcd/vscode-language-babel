import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';

const bitsForInjectGlobal = /* CSS */ `
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const StyledComponent = styled.div`
  text-align: center; /* Actual CSS highlighting! */
`;

const App = () => (
  <StyledComponent>
    {/* <p>Proper JSX commenting</p> */}
    <input
      name="input"
      // placeholder="Comments properly if attributes are split!"
    />
  </StyledComponent>
);

export default createFragmentContainer(
  App,
  graphql`
    fragment Properly_Highlighted_GraphQL_Query on Model {
      requestedVariables
    }
  `
);

// https://github.com/michaelgmcd/vscode-language-babel/issues/62
const userType = gql`
  """
  Description of the user type
  """
  type User { # Comment about user type
    "Description of the email field"
    email: String!
    id: ID!
  }
`;


class FlowTypeArguments extends React.Component<MyProps> {
  myRef = React.createRef<HTMLDivElement>();

  render() {
    const { foo } = this.props;
    return null;
  }
}
