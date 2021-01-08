// Update the import to include the useState and useEffect hook
import React, {useState, useEffect} from "react";
// Import the Battery componenet used for visualization
import Battery from "../Battery/Battery";
import {register, unregister} from '../../utils/battery';

function BatteryHookContainer () {
    // // useState always returns an array of two elements
    // const arr = useState(.55);  // set initial state
    // // First element is the value of the state
    // const level = arr[0];
    // // Second element is a setter funciton for updating the state
    // const setLevel = arr[1];

    // const [level, setLevel] = useState(.55); // more accepted way to do the above (using destructuring assignment)

    // Initialize batteryData to an object with level & charging properties
    const [batteryData, setBatteryData] = useState({
        level: .55,
        charging: true
    });

    //to make useEffect just trigger once, pass in a empty [] as 2nd param
    useEffect(() => {
        register(updateBattery);
        // Return a "cleanup" function
        return () => {
            unregister(updateBattery);
        };
    }, []);

    let updateBattery = (batteryData) => {
        setBatteryData(batteryData);
    }
    return (
        <Battery level={batteryData.level} charging={batteryData.charging}/>
    );
}

export default BatteryHookContainer;