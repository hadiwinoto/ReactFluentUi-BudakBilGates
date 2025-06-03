import {
    makeStyles,
    tokens,
    Button,
    Text,
    Caption1,
    Badge,
    Checkbox,
    Body1,
    mergeClasses,
} from "@fluentui/react-components";
import {
    AlertUrgent16Filled,
    Attach16Regular,
    CheckmarkCircle16Regular,
    CircleHalfFill16Regular,
    Comment16Regular,
    MoreHorizontal20Regular,
} from "@fluentui/react-icons";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";


const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },

    card: {
        height: "fit-content",
    },

    flex: {
        gap: "4px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    labels: { gap: "6px" },

    footer: { gap: "12px" },

    caption: {
        color: tokens.colorNeutralForeground3,
    },

    taskCheckbox: {
        display: "flex",
        alignItems: "flex-start",
    },

    grid: {
        gap: "16px",
        display: "flex",
        flexDirection: "column",
    },
});

const resolveAsset = (asset) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
};

const excelLogo = resolveAsset("xlsx.png");
const wordLogo = resolveAsset("docx.png");
const powerpointLogoURL = resolveAsset("pptx.png");
const LeaveRequest = () => {
    const styles = useStyles();

    return (
        <div>
            <div className="row">
            <div className="col-5">
                <div className="card">
                    test
                </div>
            </div>
            <div className="col-7">
                <div className="card">
                    
                </div>
            </div>
        </div>
        </div>
        
    );
};
export default LeaveRequest;
