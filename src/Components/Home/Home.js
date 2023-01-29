import React from 'react';
import Header from '../NavBar/Header';

const Home = () => {

    return (
        <div className="">
            
            <h1>This is the real home component</h1>
            <table className="border-separate border">
  <thead>
    <tr>
      <th className="border border-slate-600 ... ">State</th>
      <th className="border border-slate-600 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-700 ...">Indiana</td>
      <td className="border border-slate-700 ...">Indianapolis</td>
    </tr>
    <tr>
      <td className="border border-slate-700 ...">Ohio</td>
      <td className="border border-slate-700 ...">Columbus</td>
    </tr>
    <tr>
      <td className="border border-slate-700 ...">Michigan</td>
      <td className="border border-slate-700 ...">Detroit</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default Home;