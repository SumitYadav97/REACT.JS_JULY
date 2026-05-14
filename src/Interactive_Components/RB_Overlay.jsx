import { useState, useRef } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

function RB_Overlay() {

    return (
        <>
            {['top', 'right', 'bottom', 'left'].map((placement) => (
                <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                            Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                    }
                >
                    <Button variant="outline-secondary">popover on {placement}</Button>
                </OverlayTrigger>
            ))}

            <br />
            <div className='mt-5'>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                            </Tooltip>
                        }
                    >
                        <Button variant="secondary">Tooltip on {placement}</Button>
                    </OverlayTrigger>
                ))}
            </div>
        </>
    );
}


export default RB_Overlay;