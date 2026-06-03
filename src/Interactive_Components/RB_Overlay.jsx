import { OverlayTrigger, Tooltip, Popover, Button } from 'react-bootstrap';

function RB_Overlay() {
    return (
        <> 
            {/* Popovers */}
            <div className="d-flex gap-3 flex-wrap">
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        key={placement}
                        trigger="click"
                        placement={placement}
                        overlay={
                            <Popover id={`popover-${placement}`}>
                                <Popover.Header as="h3">
                                    Popover {placement}
                                </Popover.Header>

                                <Popover.Body>
                                    <b>Holy guacamole!</b><span>Check this info.</span>
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <Button variant="secondary">
                            Popover on {placement}
                        </Button>
                    </OverlayTrigger>
                ))}
            </div>

            {/* Tooltips */}
            <div className="mt-5 d-flex gap-3 flex-wrap">
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
                        <Button variant="secondary">
                            Tooltip on {placement}
                        </Button>
                    </OverlayTrigger>
                ))}
            </div>
        </>
    );
}

export default RB_Overlay;