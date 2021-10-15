import React from 'react';

const Team =({TeamMembers, title }) => {
  return (
    <section className="volunteers-area section-padding" id="volunteers">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="title text-center">
              <h2>{title}</h2>
              <div className="separate"><span className="separate-icon"></span></div>
            </div>
          </div>
        </div>
        <div className="row">
          {TeamMembers}
        </div>
      </div>
    </section>
  )
}

export default Team;