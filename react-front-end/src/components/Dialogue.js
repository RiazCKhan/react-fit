import "./Dialogue.scss";

export default function Dialogue({ show }) {

  if (!show) {
    return <></>
  }

  return (

    <>

      {/* <div className="mt-10 text-center">
        <button className="btn">Delete Task</button>
        <button className="btn">Delete User</button>
      </div> */}

      <div className="overlay">
        <div className="dialog">
          <div className="dialog__content">
            <h2 className="dialog__title">Delete a task?</h2>
            <p className="dialog__description">
              Are you sure you want to delete this task?
            </p>
          </div>

          <hr />

          <div className="dialog__footer">
            <button className="dialog__cancel">Cancel</button>
            <button className="dialog__confirm">Yes, delete it</button>
          </div>
        </div>
      </div>

    </>

  )
}