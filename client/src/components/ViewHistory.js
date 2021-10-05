import React, { Fragment} from "react";

function ViewHistory() {
 

//   const updateBook = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5000/update/`);

//       window.location = "/";
//       console.log(response);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };


  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id`}
      >
        View Past Bookings
      </button>

      <div className="modal " id={`id`}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">History of Books Recieved in the Past</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
             <div class="table-responsive-lg">
              <table class="table">
                  ...
             </table>
            </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ViewHistory;
