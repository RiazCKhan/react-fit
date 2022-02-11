import { Link } from "react-router-dom"

import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ExerciseListItem(props) {
  console.log("You've reached the Exercises Page")
  
  const { gif, name, bodyPart, target, equipment } = props

  return (
    <>
     

          <div className="workoutContainer col-4 clearfix">
            <div className="card boxstyle">
              <div className="row row-cols-2 flex-nowrap">
                <table>
                  <tbody>
                    <tr>
                      <td className="exerciseContainer">
                        <div className="col-md-5">
                          <h5 className="card-title">{name}</h5>
                          <img src={gif} className="img-fluid rounded-start" alt={name} />
                        </div>
                        <div className="exerciseInfo col-md-10">
                          <div className="card-body">
                            <div className="exerciseContainer">
                              <ul className="card-text">
                                <li>
                                  Category: {bodyPart}
                                </li>
                                <li>
                                  Target: {target}
                                </li>
                                <li>
                                  Equipment: {equipment}
                                </li>
                              </ul>
                            </div>
                            <a className="btn btn-primary">Add</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

     

    </>
  )
}

// Mimi API request for List Exercise By Body Part = Back



// Mimic API request for List All Body Parts

// const allBodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]