import React from 'react';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  return (
    <Layout title="Blog">
      <Redirect to="/blog" />
    </Layout>
  );
}
