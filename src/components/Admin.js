import React from "react";

export default function Login() {
  return (
    <>
      <section className="adminpage">
        <h1 className="siteadmin">Site administration</h1>
        <div className="threefunctionbyadmin">
          <div className="authadmin">
            <h3>AUTHENTICATION AND AUTHORIZATION</h3>
            <div className="majajaj">
              <div className="addusersinadminpage">Add Users</div>
              <div className="addb"> Add +</div>
            </div>
            <div className="majajaj">
              <div className="addusersinadminpage">Users</div>
              <div className="addb"> View</div>
            </div>
          </div>

          <div className="authadmin ayya">
            <h3 className="MainAppOfSite">Main App</h3>
            <div className="collobAndCertifImage">
              <div className="majajaj">
                <div className="ImageOfColloborations">Colloboration</div>
                <div className="addb"> Add +</div>
              </div>
              <div className="majajaj">
                <div className="ImageOfCertifications">Certification</div>
                <div className="addb"> Add +</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
