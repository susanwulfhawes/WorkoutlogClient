import React from 'react';
import {Table, Button} from 'reactstrap';



const WorkoutTable = (props) => {
    console.log(props.workouts)

    const deleteWorkout = (workout) => {
        console.log(`This is the id ${workout.id}`);
        fetch(`http://localhost:3000/log/delete/${workout.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchWorkouts())
    }

    const workoutMapper = () => {
        return props.workouts.map((workout, index) => {
        return(
            <tr key={index}>
                <th scope="row">{workout.id}</th>
                <td>{workout.result}</td>
                <td>{workout.description}</td>
                <td>{workout.definition}</td>
                    <Button color="warning" onClick={() => {props.editUpdateWorkout(workout); props.updateOn()}}>Update</Button>
                    <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button>
            </tr>
        )
        })
    }

    return ( 
        <>
        <h3>Workout History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Result</th>
                    <th>Description</th>
                    <th>Definition</th>
                </tr>
            </thead>
            <tbody>{workoutMapper()}</tbody>
        </Table>
        </>
     );
}
 
export default WorkoutTable;