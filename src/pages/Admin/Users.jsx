import React from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';

const Users = () => {
  return (
    <Layout title={'Dashbord All users '}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 p-3">
            <h1>Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
