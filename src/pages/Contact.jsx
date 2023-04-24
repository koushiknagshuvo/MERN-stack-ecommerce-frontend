import React from 'react';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';
import Layout from '../components/Layout/Layout';
const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : koushiknagshuvo@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 01720648273
          </p>
          <p className="mt-3">
            <BiSupport /> : 01883517442 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
