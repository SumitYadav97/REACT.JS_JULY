import React, { useState } from 'react'; // Added useState import
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';

const RB_Buttons = () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    return ( 
        <div className="p-4">
            <h2 className='d-flex'>BUTTON STYLES</h2>
            <div className='d-flex gap-2' >
                <Button variant="primary">Normal Button</Button>
                <Button variant="primary">
                    <FaPen /><span style={{ paddingLeft: "5px" }}>Edit Record</span>
                </Button>
                <Button variant="outline-primary">Outline Button</Button>
                <Button variant="primary" disabled>Disabled</Button>
            </div>

            {/* Button Types Section */}
            <h2 className='d-flex' style={{ marginTop: "70px" }}>BUTTON TYPES</h2>
            <div className='d-flex gap-2' >
                <Button href="#">Link</Button> <Button type="submit">Button</Button>
                <Button variant="primary" type="button">Input</Button>
                <Button variant="primary" type="submit">Submit</Button>
                <Button variant="primary" type="reset">Reset</Button>
            </div>

            {/* Toggle Buttons Section */}
            <h3 className="mt-4 d-flex">Toggle Buttons</h3>
            <div className="mt-4 d-flex">
                <Button onClick={() => setBold(!bold)} >
                    <b>B</b>
                </Button>

                <Button onClick={() => setItalic(!italic)}>
                    <i>I</i>
                </Button>

                <Button
                    onClick={() => setUnderline(!underline)} >
                    <u>U</u>
                </Button>
            </div>
            <p
                className=" d-flex mt-3"
                style={{
                    fontWeight: bold ? "bold" : "normal",
                    fontStyle: italic ? "italic" : "normal",
                    textDecoration: underline ? "underline" : "none"
                }}
            >
                This text changes style
            </p>
        </div>
    );
};

export default RB_Buttons;